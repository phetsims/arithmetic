// Copyright 2002-2013, University of Colorado Boulder

/**
 * Base type for models in the 'Arithmetic' simulation.  Each of the three screens - multiplication, factoring, and
 * division - has one of these models.  Each of these models tracks multiple levels.
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
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var LevelModel = require( 'ARITHMETIC/common/model/LevelModel' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Timer = require( 'JOIST/Timer' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  /**
   * Constructor for ArithmeticModel
   * @constructor
   */
  function ArithmeticModel( options ) {
    var self = this;

    options = _.extend( {fillEquation: null}, options );
    this.fillEquation = options.fillEquation;

    // array of levels with description
    this.levelModels = [
      // level 1
      new LevelModel( 6, phetGirlIcon1Image ),
      // level 2
      new LevelModel( 9, phetGirlIcon2Image ),
      // level 3
      new LevelModel( 12, phetGirlIcon3Image )
    ];

    PropertySet.call( this, {
      level: -1, // game level
      input: '', // user's input value
      activeInput: null, // point to multiplierLeft (if activeInput === 'left') or multiplierRight (if activeInput === 'right')
      state: GameState.LEVEL_SELECT, // current game state
      soundEnabled: true, // is sound active
      timerEnabled: false // is timer active
    } );

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( this.property( 'soundEnabled' ) );

    // model for single game
    this.gameModel = new GameModel();

    // model for smile face
    this.faceModel = new FaceModel();

    // When the smiling face has been shown and the user dismisses it, wait for a bit, then start fading out the
    // smiling face.  The fading is initiated here, done elsewhere (current ArithmeticFaceWithPointsNode.js).
    var pauseThenFadeFace = function() {
      Timer.setTimeout( function() {
        self.faceModel.isVisible = false; // This kicks off the fade out.
      }, ArithmeticConstants.SMILE_DISAPPEAR_TIME );
    };

    // handles game state transitions that pertain to the model (does not require handling GameState.LEVEL_SELECT)
    this.property( 'state' ).lazyLink( function( state ) {
      if ( state === GameState.LEVEL_INIT ) {
        // start timer
        self.currentLevelModel.gameTimer.start();

        // update display score
        self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;

        self.state = GameState.NEXT_TASK;
      }
      else if ( state === GameState.EQUATION_FILLED ) {
        // show smile face
        self.faceModel.isVisible = true;

        // correct answer
        if ( self.gameModel.multiplierLeft * self.gameModel.multiplierRight === self.gameModel.product ) {

          // increase total score
          self.currentLevelModel.currentScore += self.gameModel.possiblePoints;

          // update display score
          self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;

          // set smile face view and play sound
          self.faceModel.pointsToDisplay = self.gameModel.possiblePoints;
          self.faceModel.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.gameModel.answerSheet[self.gameModel.multiplierLeft - 1][self.gameModel.multiplierRight - 1] = true;

          // set next task
          self.state = GameState.NEXT_TASK;

          pauseThenFadeFace();
        }
        // incorrect answer
        else {
          // player will not get points for this task
          self.gameModel.possiblePoints = 0;

          // set smile face view and play sound
          self.faceModel.pointsToDisplay = self.gameModel.possiblePoints;
          self.faceModel.isSmile = false;
          self.gameAudioPlayer.wrongAnswer();

          self.state = GameState.AWAITING_USER_INPUT;

          pauseThenFadeFace();
        }

        // reset input field
        self.property( 'input' ).reset();
      }
      else if ( state === GameState.LEVEL_FINISHED ) {
        // play sound depend on result score
        self.playLevelFinishedSound();

        // set best time
        if ( self.timerEnabled ) {
          self.currentLevelModel.gameTimer.stop();
          if ( self.currentLevelModel.bestTime === null ) {
            self.currentLevelModel.bestTime = self.currentLevelModel.gameTimer.elapsedTime;
          }
          else {
            self.currentLevelModel.bestTime = Math.min( self.currentLevelModel.bestTime, self.currentLevelModel.gameTimer.elapsedTime );
          }
        }

        self.state = GameState.SHOW_STATISTICS;
      }
      else if ( state === GameState.REFRESH_LEVEL ) {
        self.resetLevel();
        self.currentLevelModel.displayScore = 0;
        self.state = GameState.NEXT_TASK;
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {

    //Get the current level model, to make some of the code slightly more readable
    get currentLevelModel() {
      return this.levelModels[this.level];
    },

    returnToLevelSelectScreen: function() {
      // save state of current level
      this.saveGameEnvironment();

      // refresh current level
      this.resetLevel();

      this.state = GameState.LEVEL_SELECT;
    },

    finishLevel: function() {
      // refresh current level
      this.resetLevel();

      // clear game state for game state
      this.clearGameEnvironment( this.level );

      this.state = GameState.LEVEL_SELECT;
    },

    resetLevelModels: function() {
      this.levelModels.forEach( function( levelModel ) {
        levelModel.reset();
      } );
    },

    playLevelFinishedSound: function() {
      var resultScore = this.currentLevelModel.currentScore,
        perfectScore = this.currentLevelModel.perfectScore;

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

    // init game after choosing level
    setLevel: function( level ) {
      this.level = level;

      // restore or init new environment for game
      if ( this.levelModels[level].environment ) {
        this.restoreGameEnvironment();
      }
      else {
        this.gameModel.initAnswerSheet( this.levelModels[level].tableSize );
        this.state = GameState.LEVEL_INIT;
      }
    },

    resetLevel: function() {
      this.currentLevelModel.property( 'currentScore' ).reset();
      this.currentLevelModel.gameTimer.property( 'elapsedTime' ).reset();
      this.property( 'input' ).reset();
      this.gameModel.reset();
      this.faceModel.reset();
    },

    reset: function() {
      PropertySet.prototype.reset.call( this );

      // reset levels model
      this.resetLevelModels();

      // clear game level states
      this.clearGameEnvironments();
    },

    clearGameEnvironment: function( levelNumber ) {
      this.levelModels[levelNumber].environment = null;
    },

    // clear environments of all levels
    clearGameEnvironments: function() {
      this.levelModels.forEach( function( levelModel ) {
        levelModel.environment = null;
      } );
    },

    // restore game environment of current level
    restoreGameEnvironment: function() {
      var environment = this.currentLevelModel.environment;

      this.currentLevelModel.currentScore = environment.currentScore;
      this.activeInput = environment.activeInput;
      this.gameModel.multiplierLeft = environment.multiplierLeft;
      this.gameModel.multiplierRight = environment.multiplierRight;
      this.gameModel.product = environment.product;
      this.gameModel.possiblePoints = environment.possiblePoints;
      this.gameModel.answerSheet = environment.answerSheet;
      this.state = environment.state;
      this.input = environment.input;

      // Elapsed time must account for any time that has gone by since the environment was saved.
      this.currentLevelModel.gameTimer.elapsedTime = environment.elapsedTime + Math.floor( ( new Date().getTime() - environment.systemTimeWhenSaveOccurred ) / 1000 );
    },

    // save game environment of current level
    saveGameEnvironment: function() {
      this.currentLevelModel.environment = {
        input: this.input,
        multiplierLeft: this.gameModel.multiplierLeft,
        multiplierRight: this.gameModel.multiplierRight,
        product: this.gameModel.product,
        state: this.state,
        currentScore: this.currentLevelModel.currentScore,
        elapsedTime: this.currentLevelModel.gameTimer.elapsedTime,
        systemTimeWhenSaveOccurred: new Date().getTime(),
        possiblePoints: this.gameModel.possiblePoints,
        answerSheet: _.cloneDeep( this.gameModel.answerSheet ),
        activeInput: this.activeInput
      };
    }
  } );
} );
