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
  var inherit = require( 'PHET_CORE/inherit' );
  var FaceModel = require( 'ARITHMETIC/common/model/FaceModel' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var ProblemModel = require( 'ARITHMETIC/common/model/ProblemModel' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var LevelModel = require( 'ARITHMETIC/common/model/LevelModel' );
  var PropertySet = require( 'AXON/PropertySet' );

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
      state: GameState.SELECTING_LEVEL, // current game state
      soundEnabled: true, // is sound active
      timerEnabled: false // is timer active
    } );

    // 2D array that tracks which problems have been answered
    this.answerSheet = [];

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( this.property( 'soundEnabled' ) );

    // model for single game
    this.problemModel = new ProblemModel();

    // model for smile face
    this.faceModel = new FaceModel();

    // handles game state transitions that pertain to the model (does not require handling GameState.SELECTING_LEVEL)
    this.property( 'state' ).lazyLink( function( newState, oldState ) {
      if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
        // start timer
        self.currentLevelModel.gameTimer.start();

        // update display score
        self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;

        self.state = GameState.NEXT_TASK;
      }
      else if ( newState === GameState.EQUATION_FILLED ) {
        // hide smile face
        self.faceModel.hideFace();

        // correct answer
        if ( self.problemModel.multiplierLeft * self.problemModel.multiplierRight === self.problemModel.product ) {

          // increase total score
          self.currentLevelModel.currentScore += self.problemModel.possiblePoints;

          // update display score
          self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;

          // set smile face view and play sound
          self.faceModel.pointsToDisplay = self.problemModel.possiblePoints;
          self.faceModel.isSmile = true;
          self.gameAudioPlayer.correctAnswer();

          // mark answer in answer sheet
          self.answerSheet[self.problemModel.multiplierLeft - 1][self.problemModel.multiplierRight - 1] = true;

          // set next task
          self.state = GameState.NEXT_TASK;
        }
        // incorrect answer
        else {
          // player will not get points for this task
          self.problemModel.possiblePoints = 0;

          // set smile face view and play sound
          self.faceModel.pointsToDisplay = self.problemModel.possiblePoints;
          self.faceModel.isSmile = false;
          self.gameAudioPlayer.wrongAnswer();

          self.state = GameState.AWAITING_USER_INPUT;
        }

        // show smile face
        self.faceModel.showFace();

        // reset input field
        self.property( 'input' ).reset();
      }
      else if ( newState === GameState.LEVEL_FINISHED ) {
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
      else if ( newState === GameState.REFRESH_LEVEL ) {
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

      this.state = GameState.SELECTING_LEVEL;
    },

    finishLevel: function() {
      // refresh current level
      this.resetLevel();

      // clear game environment
      this.clearGameEnvironment( this.level );

      this.state = GameState.SELECTING_LEVEL;
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
        this.initAnswerSheet( this.levelModels[level].tableSize );
        this.state = GameState.AWAITING_USER_INPUT;
      }
    },

    resetLevel: function() {
      this.currentLevelModel.property( 'currentScore' ).reset();
      this.currentLevelModel.gameTimer.property( 'elapsedTime' ).reset();
      this.property( 'input' ).reset();
      this.resetAnswerSheet();
      this.problemModel.reset();
      this.faceModel.reset();
    },

    // set new answer sheet changing level
    initAnswerSheet: function( answerSheetSize ) {
      var self = this;
      this.answerSheet.length = 0; // clear the array, but keep the reference

      // add arrays with right multipliers for every left multiplier
      _.times( answerSheetSize, function() {
        self.answerSheet.push( [] );
      } );

      // fill arrays appropriate to right multipliers
      this.answerSheet.forEach( function( el ) {
        _.times( answerSheetSize, function() {
          el.push( false );
        } );
      } );
    },

    resetAnswerSheet: function() {
      this.answerSheet.forEach( function( multipliersLeft ) {
        for ( var i = 0; i < multipliersLeft.length; i++ ) {
          multipliersLeft[i] = false;
        }
      } );
    },

    // return available left and right multipliers according to answer sheet
    selectUnusedMultiplierPair: function() {
      var availableMultipliersLeft = [];
      var availableMultipliersRight = [];
      var multiplierLeft;
      var multiplierRight;

      // find available left multipliers
      this.answerSheet.forEach( function( rightMultipliers, index ) {
        if ( rightMultipliers.indexOf( false ) !== -1 ) {
          availableMultipliersLeft.push( index + 1 );
        }
      } );

      // no more available multipliers
      if ( !availableMultipliersLeft.length ) {
        return null;
      }

      // set left multiplier
      multiplierLeft = _.shuffle( availableMultipliersLeft )[0];

      // find available right multipliers
      this.answerSheet[multiplierLeft - 1].forEach( function( isRightMultiplierAnswered, index ) {
        if ( !isRightMultiplierAnswered ) {
          availableMultipliersRight.push( index + 1 );
        }
      } );

      // set right multiplier
      multiplierRight = _.sample( availableMultipliersRight );

      return {
        multiplierLeft: multiplierLeft,
        multiplierRight: multiplierRight
      };
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
      this.problemModel.multiplierLeft = environment.multiplierLeft;
      this.problemModel.multiplierRight = environment.multiplierRight;
      this.problemModel.product = environment.product;
      this.problemModel.possiblePoints = environment.possiblePoints;
      this.answerSheet.length = 0;
      this.answerSheet.push.apply( this.answerSheet, environment.answerSheet );
      this.state = environment.state;
      this.input = environment.input;

      // Elapsed time must account for any time that has gone by since the environment was saved.
      this.currentLevelModel.gameTimer.elapsedTime = environment.elapsedTime + Math.floor( ( new Date().getTime() - environment.systemTimeWhenSaveOccurred ) / 1000 );
    },

    // save game environment of current level
    saveGameEnvironment: function() {
      this.currentLevelModel.environment = {
        input: this.input,
        multiplierLeft: this.problemModel.multiplierLeft,
        multiplierRight: this.problemModel.multiplierRight,
        product: this.problemModel.product,
        state: this.state,
        currentScore: this.currentLevelModel.currentScore,
        elapsedTime: this.currentLevelModel.gameTimer.elapsedTime,
        systemTimeWhenSaveOccurred: new Date().getTime(),
        possiblePoints: this.problemModel.possiblePoints,
        answerSheet: _.cloneDeep( this.answerSheet ),
        activeInput: this.activeInput
      };
    }
  } );
} );
