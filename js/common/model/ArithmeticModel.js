// Copyright 2002-2013, University of Colorado Boulder

//REVIEW Should make clear in header comment that this is essentially and abstract base class, not meant to be instantiated itself.
/**
 * Main model for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var FaceModel = require( 'ARITHMETIC/common/model/FaceModel' );
  var GameModel = require( 'ARITHMETIC/common/model/GameModel' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // audio
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );
  var levels = [
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
    this.levels = levels;

    PropertySet.call( this, {
      level: 0, // level difficulty, zero-based in the model, though levels appear to the user to start
      scoreTotal: 0, // total user score for current games
      time: 0, // current time
      input: '', // user's input value
      //REVIEW - Please use 'soundEnabled' and 'timerEnabled', as these are more conventional for PhET.
      soundEnabled: true, // is sound active
      timerEnabled: false // is time mode active
    } );

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( this.property( 'soundEnabled' ) );

    // model for single game
    this.game = new GameModel( this.property( 'level' ), levels );

    this.smileFace = new FaceModel();

    // best times and scores, equal to number of levels
    this.bestTimes = [];
    this.bestScores = [];
    this.levels.forEach( function() {
      self.bestTimes.push( null );
      self.bestScores.push( new Property( 0 ) );
    } );

    // clear time property when timer off
    this.property( 'timerEnabled' ).lazyLink( function( timerEnabled ) {
      if ( !timerEnabled ) {
        self.time = 0;
      }
    } );

    // init game after choosing level
    this.property( 'level' ).lazyLink( function( levelNumber ) {
      if ( levelNumber ) {
        self.game.state = GAME_STATE.NEXT_TASK;
        self.time = 0;
      }
      else {
        //REVIEW - This seems odd.  The game is reset if level is set to undefined or null?  Seems rather indirect, and there should be a more direct way to do it.
        self.game.reset();
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
          self.scoreTotal += self.game.scoreGame;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreGame;
          self.smileFace.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.game.answerSheet[self.game.multiplierLeft - 1][self.game.multiplierRight - 1] = true;

          // set next task
          self.game.state = GAME_STATE.NEXT_TASK;
        }
        // wrong answer
        else {

          // player will not get points for this task
          self.game.scoreGame = 0;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreGame;
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
          if ( self.bestTimes[self.level - 1] === null ) {
            self.bestTimes[self.level - 1] = self.time;
          }
          else {
            self.bestTimes[self.level - 1] = Math.min( self.bestTimes[self.level - 1], self.time );
          }
        }
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    back: function() {
      this.level = 0;
    },
    checkInput: function() {
      //REVIEW: Comment should probably say 'child types', since technically it's not the constructor where this is overridden.
      // should be defined in child constructors
    },
    refreshLevel: function() {
      this.property( 'scoreTotal' ).reset();
      this.game.reset();
      this.smileFace.reset();
    },
    reset: function() {
      PropertySet.prototype.reset.call( this );
    },
    step: function( dt ) {
      // if timer is on and level is select - add time
      if ( this.timerEnabled && this.level ) {
        this.time += dt;
      }
    }
  } );
} );
