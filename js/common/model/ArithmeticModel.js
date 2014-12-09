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
  var Timer = require( 'JOIST/Timer' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // constants
  var FEEDBACK_TIME = 1000; // length of time that feedback is shown before moving on, in milliseconds

  /**
   * Constructor for ArithmeticModel
   * @constructor
   */
  function ArithmeticModel( options ) {
    var self = this;

    // TODO: Fill equation shouldn't be optional.  Also, should be documented.  It's the equation that is used to
    // take the user's input and fill in the unanswered parts of the problem.
    options = _.extend( { fillEquation: null }, options );
    this.fillEquation = options.fillEquation;

    PropertySet.call( this, {
      level: -1, // game level
      input: '', // user's input value
      activeInput: null, // point to multiplierLeft (if activeInput === 'left') or multiplierRight (if activeInput === 'right')
      state: GameState.SELECTING_LEVEL, // current game state
      soundEnabled: true, // is sound active
      timerEnabled: false // is timer active
    } );

    // timer used for depicting positive and negative feedback, tracked so that it can be canceled if necessary
    this.positiveFeedbackTimer = null;

    // array of levels with description
    this.levelModels = [
      // level 1
      new LevelModel( 6, phetGirlIcon1Image ),
      // level 2
      new LevelModel( 9, phetGirlIcon2Image ),
      // level 3
      new LevelModel( 12, phetGirlIcon3Image )
    ];

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

        // start (or restart) the game timer
        self.currentLevelModel.gameTimer.start();

        // update display score
        self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;

        // set up the initial problem
        self.setUpUnansweredProblem();
      }

      /* TODO: Following code is deprecated, remove once finalized.

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

       // show the feedback that indicates a correct answer
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

       self.state = GameState.SHOWING_LEVEL_RESULTS;
       }
       */
      else if ( newState === GameState.REFRESH_LEVEL ) {
        // TODO: Shouldn't be a state transition, handle this better as state machine evolves.
        self.resetLevel();
        self.currentLevelModel.displayScore = 0;
        self.refreshLevel();
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {

    //Get the current level model, to make some of the code slightly more readable
    get currentLevelModel() {
      return this.levelModels[this.level];
    },

    /**
     * Check whether the answer submitted by the user is correct.  The user's answer must have been stored in the
     * appropriate portion of the problem model before this method is invoked.  Doing it this way allows this general
     * method to be used to verify the answer.
     */
    submitAnswer: function() {
      var self = this;
      if ( this.problemModel.multiplierLeft * this.problemModel.multiplierRight === this.problemModel.product ) {

        // add the problem value to the total score
        this.currentLevelModel.currentScore += this.problemModel.possiblePoints;

        // update the displayed score
        this.currentLevelModel.displayScore = this.currentLevelModel.currentScore;

        // set the face to smile
        this.faceModel.pointsToDisplay = this.problemModel.possiblePoints;
        this.faceModel.isSmile = true;
        this.faceModel.showFace();

        // play the correct answer sound
        this.gameAudioPlayer.correctAnswer();

        // mark this table entry as solved
        this.answerSheet[this.problemModel.multiplierLeft - 1][this.problemModel.multiplierRight - 1] = true;

        // show the feedback that indicates a correct answer
        this.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;

        // start a timer that will set up the next problem
        this.positiveFeedbackTimer = Timer.setTimeout( function() { self.nextProblem() }, FEEDBACK_TIME );
      }
      // incorrect answer
      else {
        // player will not get points for this task
        this.problemModel.possiblePoints = 0;

        // set face model state and play sound
        // TODO: Sound should be played in view once all the state changes are sorted out.
        this.faceModel.pointsToDisplay = this.problemModel.possiblePoints;
        this.faceModel.isSmile = false;
        this.faceModel.showFace();
        this.gameAudioPlayer.wrongAnswer();

        // set the appropriate state
        this.state = GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK;
      }
    },

    /**
     * Move to the next problem or, if all problems have been answered, move to the state where results are shown.
     * @private
     */
    nextProblem: function() {
      if ( this.setUpUnansweredProblem() ) {
        this.inputProperty.reset();
        this.state = GameState.AWAITING_USER_INPUT;
      }
      else {
        // board must be full
        this.state = GameState.SHOWING_LEVEL_RESULTS;
      }
    },

    /**
     * Retry the currently presented problem.
     * @public
     */
    retryProblem: function() {
      //TODO: Is this clause necessary?  In other words, does resetting it after a reset cause another event or not? Try both ways to find out.
      if ( this.inputProperty.value.length > 0 ) {
        this.inputProperty.reset();
      }
      this.state = GameState.AWAITING_USER_INPUT;
    },

    /**
     * Pick an unanswered problem and set it up in the model.  Must be overridden in sub-types, since the way problems
     * are set up varies.
     *
     * Returns true if able to set up a problem, false if not.  A return value of false generally indicates that all
     * problems have been answered.
     *
     * @protected
     */
    setUpUnansweredProblem: function() {
      // TODO: Implement in subclasses.
      // TODO: Uncomment this line when subclasses are doing their thing.
      //throw new Error( 'this function must be overridden in sub-classes' );
      return true;
    },

    returnToLevelSelectScreen: function() {
      // save state of current level
      this.saveGameEnvironment();

      // refresh current level
      this.resetLevel();

      this.state = GameState.SELECTING_LEVEL;
    },

    refreshLevel: function() {
      throw new Error( 'Method not implemented' );
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
        this.nextProblem();
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
