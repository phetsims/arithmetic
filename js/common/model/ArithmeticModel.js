// Copyright 2002-2013, University of Colorado Boulder

//REVIEW Should make clear in header comment that this is essentially and abstract base class, not meant to be instantiated itself.
/**
 * Base type for models in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var FaceModel = require( 'ARITHMETIC/common/model/FaceModel' );
  var GameModel = require( 'ARITHMETIC/common/model/GameModel' );
  var GameTimer = require( 'VEGAS/GameTimer' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Timer = require( 'JOIST/Timer' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // audio
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );
  var BLINKING_INTERVAL = require( 'ARITHMETIC/common/ArithmeticConstants' ).EQUATION.BLINKING_INTERVAL;
  var levelDescriptions = [
    // level 1
    {
      icon: phetGirlIcon1Image,
      perfectScore: 6 * 6,
      tableSize: 6
    },
    // level 2
    {
      icon: phetGirlIcon2Image,
      perfectScore: 9 * 9,
      tableSize: 9
    },
    // level 3
    {
      icon: phetGirlIcon3Image,
      perfectScore: 12 * 12,
      tableSize: 12
    }
  ];

  function ArithmeticModel() {
    var self = this;

    // dimensions of the model's space
    this.simBounds = ScreenView.DEFAULT_LAYOUT_BOUNDS;

    // array of levels with description
    this.levelDescriptions = levelDescriptions;

    PropertySet.call( this, {
      level: 0, // level difficulty, zero-based in the model, though levels appear to the user to start
      scoreTotal: 0, // total user score for current games
      input: '', // user's input value
      inputCursorVisibility: false,
      soundEnabled: true, // is sound active
      timerEnabled: false // is time mode active
    } );

    // property necessary for tracing and changing inputCursorVisibility property
    this.time = 0;

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( this.property( 'soundEnabled' ) );

    // model for game timer
    this.gameTimer = new GameTimer();

    // start timer if level is select, stop timer time if level is not select
    this.property( 'level' ).link( function( levelNumber ) {
      if ( levelNumber && self.timerEnabled ) {
        self.gameTimer.start();
      }
      else {
        self.gameTimer.stop();

        // clear time when timer off
        self.gameTimer.elapsedTime = 0;
      }
    } );

    // model for single game
    this.game = new GameModel( this.property( 'level' ), levelDescriptions );

    this.smileFace = new FaceModel();

    // best times and scores, equal to number of levels
    this.bestTimes = [];
    this.bestScores = [];
    this.levelDescriptions.forEach( function() {
      self.bestTimes.push( null );
      self.bestScores.push( new Property( 0 ) );
    } );

    // init game after choosing level
    this.property( 'level' ).lazyLink( function( levelNumber ) {
      if ( levelNumber ) {
        self.game.state = GAME_STATE.NEXT_TASK;
      }
    } );

    // set next task if equation was filled
    this.game.property( 'state' ).lazyLink( function( state ) {
      if ( state === GAME_STATE.EQUATION_FILLED ) {
        // show smile face
        self.smileFace.isVisible = true;

        // correct answer
        if ( self.game.multiplierLeft * self.game.multiplierRight === self.game.product ) {

          // increase total score
          self.scoreTotal += self.game.scoreTask;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreTask;
          self.smileFace.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.game.answerSheet[self.game.multiplierLeft - 1][self.game.multiplierRight - 1] = true;

          // set next task and hide smile face
          Timer.setTimeout( function() {
            self.smileFace.isVisible = false;
            self.game.state = GAME_STATE.NEXT_TASK;
          }, 1000 );
        }
        // wrong answer
        else {

          // player will not get points for this task
          self.game.scoreTask = 0;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreTask;
          self.smileFace.isSmile = false;
          self.gameAudioPlayer.wrongAnswer();

          // return to start state
          self.game.state = GAME_STATE.START;
        }
      }

      // set best score
      if ( state === GAME_STATE.LEVEL_FINISHED ) {
        var bestScore = self.bestScores[self.level - 1];

        // set best score
        bestScore.value = Math.max( bestScore.value, self.scoreTotal );

        // set best time
        if ( self.timerEnabled ) {
          self.gameTimer.stop();
          if ( self.bestTimes[self.level - 1] === null ) {
            self.bestTimes[self.level - 1] = self.gameTimer.elapsedTime;
          }
          else {
            self.bestTimes[self.level - 1] = Math.min( self.bestTimes[self.level - 1], self.gameTimer.elapsedTime );
          }
        }

        self.game.state = GAME_STATE.SHOW_STATISTICS;
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    back: function() {
      this.level = 0;
      this.refreshLevel();
    },
    checkAnswer: function() {
      //REVIEW: Comment should probably say 'child types', since technically it's not the constructor where this is overridden.
      // should be defined in child types
    },
    clearBestTimesAndScores: function() {

      // clear best times
      for ( var i = 0; i < this.bestTimes.length; i++ ) {
        this.bestTimes[i] = null;
      }

      // clear best scores
      this.bestScores.forEach( function( scoreProperty ) {
        scoreProperty.reset();
      } );
    },
    refreshLevel: function() {
      this.property( 'scoreTotal' ).reset();
      this.gameTimer.elapsedTime = 0;
      this.game.reset();
      this.smileFace.reset();
    },
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // clear best times and scores
      this.clearBestTimesAndScores();
    },
    step: function( dt ) {
      this.time += dt;

      if ( this.time > BLINKING_INTERVAL ) {
        this.inputCursorVisibility = !this.inputCursorVisibility;
        this.time = 0;
      }
    }
  } );
} );
