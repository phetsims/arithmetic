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
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var FaceModel = require( 'ARITHMETIC/common/model/FaceModel' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var GameModel = require( 'ARITHMETIC/common/model/GameModel' );
  var GameTimer = require( 'VEGAS/GameTimer' );
  var LevelModel = require( 'ARITHMETIC/common/model/LevelModel' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Timer = require( 'JOIST/Timer' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * Constructor for ArithmeticModel
   * @constructor
   */
  function ArithmeticModel() {
    var self = this;

    // array of levels with description
    this.levelModels = [
      // level 1
      new LevelModel( 6, phetGirlIcon1Image ),
      // level 2
      new LevelModel( 9, phetGirlIcon2Image ),
      // level 3
      new LevelModel( 12, phetGirlIcon3Image )
    ];

    // game level states
    this.state = [];

    PropertySet.call( this, {
      level: 0, // game level, 0 indicates the home screen
      input: '', // user's input value
      inputCursorVisibility: false,
      soundEnabled: true, // is sound active
      timerEnabled: false // is timer active
    } );

    // property necessary for tracing and changing inputCursorVisibility property
    this.time = 0;

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( this.property( 'soundEnabled' ) );

    // model for game timer
    this.gameTimer = new GameTimer();

    // model for single game
    this.gameModel = new GameModel();

    // model for smile face
    this.faceModel = new FaceModel();

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
        self.gameModel.initAnswerSheet( self.levelModels[level - 1].tableSize );
        self.gameModel.state = GAME_STATE.LEVEL_INIT;
      }
    } );

    // When the smiling face has been shown and the user dismisses it,
    // wait for a bit then, start fading out the smiling face.  The fading is done elsewhere (current ArithmeticFaceWithPointsNode.js)
    var pauseThenFadeFace = function() {
      Timer.setTimeout( function() {
        self.faceModel.isVisible = false;
      }, ArithmeticConstants.SMILE_DISAPPEAR_TIME );
    };

    // handles game state transitions that pertain to the model (does not require handling GAME_STATE.LEVEL_SELECT)
    this.gameModel.property( 'state' ).lazyLink( function( state ) {
      if ( state === GAME_STATE.LEVEL_INIT ) {
        // start timer
        self.gameTimer.start();

        // update display score
        self.levelModels[self.level - 1].displayScore = self.levelModels[self.level - 1].currentScore;

        self.gameModel.state = GAME_STATE.NEXT_TASK;
      }
      else if ( state === GAME_STATE.EQUATION_FILLED ) {
        // show smile face
        self.faceModel.isVisible = true;

        // correct answer
        if ( self.gameModel.multiplierLeft * self.gameModel.multiplierRight === self.gameModel.product ) {

          // increase total score
          self.levelModels[self.level - 1].currentScore += self.gameModel.scoreTask;

          // update display score
          self.levelModels[self.level - 1].displayScore = self.levelModels[self.level - 1].currentScore;

          // set smile face view and play sound
          self.faceModel.scoreFace = self.gameModel.scoreTask;
          self.faceModel.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.gameModel.answerSheet[self.gameModel.multiplierLeft - 1][self.gameModel.multiplierRight - 1] = true;

          // set next task
          self.gameModel.state = GAME_STATE.NEXT_TASK;

          pauseThenFadeFace();
        }
        // incorrect answer
        else {
          // player will not get points for this task
          self.gameModel.scoreTask = 0;

          // set smile face view and play sound
          self.faceModel.scoreFace = self.gameModel.scoreTask;
          self.faceModel.isSmile = false;
          self.gameAudioPlayer.wrongAnswer();

          self.gameModel.state = GAME_STATE.AWAITING_USER_INPUT;

          pauseThenFadeFace();
        }

        // reset input field
        self.property( 'input' ).reset();
      }
      else if ( state === GAME_STATE.LEVEL_FINISHED ) {
        // play sound depend on result score
        self.playLevelFinishedSound();

        // set best time
        if ( self.timerEnabled ) {
          self.gameTimer.stop();
          if ( self.levelModels[self.level - 1].bestTime === null ) {
            self.levelModels[self.level - 1].bestTime = self.gameTimer.elapsedTime;
          }
          else {
            self.levelModels[self.level - 1].bestTime = Math.min( self.levelModels[self.level - 1].bestTime, self.gameTimer.elapsedTime );
          }
        }

        self.gameModel.state = GAME_STATE.SHOW_STATISTICS;
      }
      else if ( state === GAME_STATE.REFRESH_LEVEL ) {
        self.refreshLevel();
        self.gameModel.state = GAME_STATE.NEXT_TASK;
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
      // refresh current level
      this.refreshLevel();

      // clear game state for game state
      this.clearGameState( this.level );

      // set level value equal to unselected
      this.level = 0;
    },
    resetLevelModels: function() {
      this.levelModels.forEach( function( levelModel ) {
        levelModel.reset();
      } );
    },
    playLevelFinishedSound: function() {
      var resultScore = this.levelModels[this.level - 1].currentScore,
        perfectScore = this.levelModels[this.level - 1].perfectScore;

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
        this.levelModels[this.level - 1].property( 'currentScore' ).reset();
      }
      this.property( 'input' ).reset();
      this.gameTimer.elapsedTime = 0;
      this.gameModel.reset();
      this.faceModel.reset();
    },
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // reset levels model
      this.resetLevelModels();

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

      this.levelModels[this.level - 1].currentScore = state.currentScore;
      this.linkToActiveInput = state.linkToActiveInput;
      this.input = state.input;
      this.gameTimer.elapsedTime = state.elapsedTime;
      this.gameModel.multiplierLeft = state.multiplierLeft;
      this.gameModel.multiplierRight = state.multiplierRight;
      this.gameModel.product = state.product;
      this.gameModel.scoreTask = state.scoreTask;
      this.gameModel.answerSheet = state.answerSheet;
      this.gameModel.state = state.state;
    },
    // save game state of current level
    saveGameState: function() {
      this.state[this.level - 1] = {
        input: this.input,
        isGameTimerRunning: this.gameTimer.isRunning,
        elapsedTime: this.gameTimer.elapsedTime,
        multiplierLeft: this.gameModel.multiplierLeft,
        multiplierRight: this.gameModel.multiplierRight,
        product: this.gameModel.product,
        state: this.gameModel.state,
        currentScore: this.levelModels[this.level - 1].currentScore,
        scoreTask: this.gameModel.scoreTask,
        answerSheet: _.cloneDeep( this.gameModel.answerSheet ),
        linkToActiveInput: this.linkToActiveInput
      };
    },
    step: function( dt ) {
      this.time += dt;

      if ( this.time > ArithmeticConstants.EQUATION.BLINKING_INTERVAL ) {
        this.inputCursorVisibility = !this.inputCursorVisibility;
        this.time = 0;
      }
    }
  } );
} );
