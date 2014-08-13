// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base type for models in the 'Arithmetic' simulation.  This is used as an abstract base class for the model used in
 * all of the screens.
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
  var Timer = require( 'JOIST/Timer' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );
  var BLINKING_INTERVAL = require( 'ARITHMETIC/common/ArithmeticConstants' ).EQUATION.BLINKING_INTERVAL;
  var SMILE_DISAPPEAR_TIME = require( 'ARITHMETIC/common/ArithmeticConstants' ).SMILE_DISAPPEAR_TIME;

  function ArithmeticModel() {
    var self = this;

    // array of levels with description
    this.levelDescriptions = [
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

    // game level states
    this.state = [];

    PropertySet.call( this, {
      level: 0, // game level, 0 indicates the home screen
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

    // model for single game
    this.game = new GameModel();

    // model for smile face
    this.smileFace = new FaceModel();

    // best times and scores, equal to number of levels
    this.bestTimes = [];
    this.bestScores = [];
    this.currentScores = []; // current score for each level
    this.displayScores = []; // score displaying in level select buttons

    this.levelDescriptions.forEach( function() {
      var displayScoreProperty = new Property( 0 );
      var bestScoreProperty = new Property( 0 );
      var currentScoreProperty = new Property( 0 );
      var bestTime = new Property( null );

      self.bestTimes.push( bestTime );
      self.displayScores.push( displayScoreProperty );
      self.bestScores.push( bestScoreProperty );
      self.currentScores.push( currentScoreProperty );
    } );

    // init game after choosing level
    this.property( 'level' ).lazyLink( function( level ) {
      // add time which user spent on level selection screen to saved time in state
      if ( self.timerEnabled ) {
        if ( level && self.state[level - 1] && self.state[level - 1].isGameTimerRunning ) {
          self.state[level - 1].elapsedTime += self.gameTimer.elapsedTime;
        }
        else {
          self.gameTimer.elapsedTime = 0;
        }
      }

      // restore or init new state for game
      if ( self.state[level - 1] ) {
        self.restoreGameState();
      }
      else if ( level ) {
        self.game.initAnswerSheet( self.levelDescriptions[level - 1].tableSize );
        self.game.state = GAME_STATE.LEVEL_INIT;
      }
    } );

    // set next task if equation was filled
    this.game.property( 'state' ).lazyLink( function( state ) {
      if ( state === GAME_STATE.LEVEL_INIT ) {
        // start timer
        self.gameTimer.start();

        // update display score
        self.displayScores[self.level - 1].value = self.currentScores[self.level - 1].value;

        self.game.state = GAME_STATE.NEXT_TASK;
      }
      else if ( state === GAME_STATE.EQUATION_FILLED ) {
        // show smile face
        self.smileFace.isVisible = true;

        // correct answer
        if ( self.game.multiplierLeft * self.game.multiplierRight === self.game.product ) {

          // increase total score
          self.currentScores[self.level - 1].value += self.game.scoreTask;

          // update display score
          self.displayScores[self.level - 1].value = self.currentScores[self.level - 1].value;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreTask;
          self.smileFace.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.game.answerSheet[self.game.multiplierLeft - 1][self.game.multiplierRight - 1] = true;

          self.game.state = GAME_STATE.NEXT_TASK;

          // set next task and hide smile face
          Timer.setTimeout( function() {
            self.smileFace.isVisible = false;
          }, SMILE_DISAPPEAR_TIME );
        }
        // incorrect answer
        else {
          // player will not get points for this task
          self.game.scoreTask = 0;

          // set smile face view and play sound
          self.smileFace.scoreFace = self.game.scoreTask;
          self.smileFace.isSmile = false;
          self.gameAudioPlayer.wrongAnswer();

          self.game.state = GAME_STATE.START;

          // return to start state
          Timer.setTimeout( function() {
            self.smileFace.isVisible = false;
          }, SMILE_DISAPPEAR_TIME );
        }

        // reset input field
        self.property( 'input' ).reset();
      }
      else if ( state === GAME_STATE.LEVEL_FINISHED ) {
        // set best score
        self.setBestScore();

        // play sound depend on result score
        self.playLevelFinishedSound();

        // set best time
        if ( self.timerEnabled ) {
          self.gameTimer.stop();
          if ( self.bestTimes[self.level - 1].value === null ) {
            self.bestTimes[self.level - 1].value = self.gameTimer.elapsedTime;
          }
          else {
            self.bestTimes[self.level - 1].value = Math.min( self.bestTimes[self.level - 1].value, self.gameTimer.elapsedTime );
          }
        }

        self.game.state = GAME_STATE.SHOW_STATISTICS;
      }
      else if ( state === GAME_STATE.REFRESH_LEVEL ) {
        self.refreshLevel();
        self.game.state = GAME_STATE.NEXT_TASK;
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    back: function() {
      // save state of current level
      this.saveGameState();

      // refresh current level
      this.refreshLevel( true );

      // show user start menu
      this.level = 0;
    },
    checkAnswer: function() {
      //REVIEW: Comment should probably say 'child types', since technically it's not the constructor where this is overridden.
      // should be defined in child types
    },
    finishLevel: function() {
      // update best score value for current level
      this.setBestScore();

      // refresh current level
      this.refreshLevel();

      // clear game state for game state
      this.clearGameState( this.level );

      // set level value equal to unselected
      this.level = 0;
    },
    clearBestTimesAndScores: function() {
      // clear best times
      this.bestTimes.forEach( function( bestTimeProperty ) {
        bestTimeProperty.reset();
      } );

      // clear current scores
      this.currentScores.forEach( function( currentProperty ) {
        currentProperty.reset();
      } );

      // clear display scores
      this.displayScores.forEach( function( displayProperty ) {
        displayProperty.reset();
      } );

      // clear best scores
      this.bestScores.forEach( function( scoreProperty ) {
        scoreProperty.reset();
      } );
    },
    playLevelFinishedSound: function() {
      var resultScore = this.currentScores[this.level - 1].value,
        perfectScore = this.levelDescriptions[this.level - 1].perfectScore;

      if ( resultScore === perfectScore ) {
        this.gameAudioPlayer.gameOverPerfectScore();
      }
      else if ( resultScore === 0 ) {
        this.gameAudioPlayer.gameOverZeroScore();
      }
      else {
        this.gameAudioPlayer.gameOverImperfectScore();
      }
    },
    refreshLevel: function( isWithoutScore ) {
      if ( !isWithoutScore ) {
        this.currentScores[this.level - 1].reset();
      }
      this.gameTimer.elapsedTime = 0;
      this.game.reset();
      this.smileFace.reset();
    },
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // clear best times and scores
      this.clearBestTimesAndScores();

      // clear game level states
      this.clearGameStates();
    },
    clearGameState: function( levelNumber ) {
      this.state[levelNumber - 1] = undefined;
    },
    // clear states of all levels
    clearGameStates: function() {
      this.state = [];
    },
    // restore game state of current level
    restoreGameState: function() {
      var state = this.state[this.level - 1];

      if ( state.isGameTimerRunning ) {
        this.gameTimer.start();
      }
      else {
        this.gameTimer.stop();
      }

      this.currentScores[this.level - 1].value = state.currentScore;
      this.linkToActiveInput = state.linkToActiveInput;
      this.input = state.input;
      this.gameTimer.elapsedTime = state.elapsedTime;
      this.game.multiplierLeft = state.multiplierLeft;
      this.game.multiplierRight = state.multiplierRight;
      this.game.product = state.product;
      this.game.scoreTask = state.scoreTask;
      this.game.answerSheet = state.answerSheet;
      this.game.state = state.state;
    },
    // save game state of current level
    saveGameState: function() {
      this.state[this.level - 1] = {
        input: this.input,
        isGameTimerRunning: this.gameTimer.isRunning,
        elapsedTime: this.gameTimer.elapsedTime,
        multiplierLeft: this.game.multiplierLeft,
        multiplierRight: this.game.multiplierRight,
        product: this.game.product,
        state: this.game.state,
        currentScore: this.currentScores[this.level - 1].value,
        scoreTask: this.game.scoreTask,
        answerSheet: _.cloneDeep( this.game.answerSheet ),
        linkToActiveInput: this.linkToActiveInput
      };
    },
    // set max score for current level
    setBestScore: function() {
      this.bestScores[this.level - 1].value = Math.max( this.bestScores[this.level - 1].value, this.currentScores[this.level - 1].value );
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
