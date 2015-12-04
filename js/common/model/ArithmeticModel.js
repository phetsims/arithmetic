// Copyright 2014-2015, University of Colorado Boulder

/**
 * Base type for models in the 'Arithmetic' simulation.  Each of the three screens - multiplication, factoring, and
 * division - has one of these models.  Each of these models tracks multiple levels.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  var ArithmeticQueryParameters = require( 'ARITHMETIC/common/ArithmeticQueryParameters' );
  var inherit = require( 'PHET_CORE/inherit' );
  var FaceModel = require( 'ARITHMETIC/common/model/FaceModel' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var ProblemModel = require( 'ARITHMETIC/common/model/ProblemModel' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var LevelModel = require( 'ARITHMETIC/common/model/LevelModel' );
  var PropertySet = require( 'AXON/PropertySet' );
  var Timer = require( 'JOIST/Timer' );

  // constants
  var FEEDBACK_TIME = 1200; // in milliseconds, time that the feedback is presented before moving to next problem

  /**
   * Constructor for ArithmeticModel
   * @constructor
   */
  function ArithmeticModel( options ) {
    var self = this;

    // set up the 'fillEquation' function, which is used to fill in the missing portion(s) based on the user's inputs
    options = _.extend( { fillEquation: null }, options );
    this.fillEquation = options.fillEquation;

    PropertySet.call( this, {
      level: -1, // game level
      input: '', // user's input value
      activeInput: null, // point to multiplicand (if activeInput === 'multiplicand') or multiplier (if activeInput === 'multiplier')
      state: GameState.SELECTING_LEVEL // current game state
    } );

    // array of levels
    this.levelModels = [
      // level 1
      new LevelModel( 6 ),
      // level 2
      new LevelModel( 9 ),
      // level 3
      new LevelModel( 12 )
    ];

    // hook up the audio player to the sound settings
    this.gameAudioPlayer = new GameAudioPlayer( ArithmeticGlobals.soundEnabledProperty );

    // model for single game
    this.problemModel = new ProblemModel();

    // model for smile face
    this.faceModel = new FaceModel();

    // handles game state transitions that pertain to the model (does not require handling GameState.SELECTING_LEVEL)
    this.stateProperty.lazyLink( function( newState, oldState ) {
      if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {

        // start (or restart) the game timer
        self.activeLevelModel.gameTimer.start();

        // update display score
        self.activeLevelModel.displayScore = self.activeLevelModel.currentScore;

        // set up the initial problem
        self.setUpUnansweredProblem();
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {

    // @protected - get the current level model, use this to make the code more readable
    get activeLevelModel() {
      return this.levelModels[ this.level ];
    },

    /**
     * Check whether the answer submitted by the user is correct.  The user's answer must have been stored in the
     * appropriate portion of the problem model before this method is invoked.  Doing it this way allows this general
     * method to be used to verify the answer.
     * @public
     */
    submitAnswer: function() {
      var self = this;
      if ( this.problemModel.multiplicand * this.problemModel.multiplier === this.problemModel.product ) {

        // add the problem value to the total score
        this.activeLevelModel.currentScore += this.problemModel.possiblePoints;

        // update the displayed score
        this.activeLevelModel.displayScore = this.activeLevelModel.currentScore;

        // set the face to smile
        this.faceModel.pointsToDisplay = this.problemModel.possiblePoints;
        this.faceModel.isSmile = true;
        this.faceModel.showFace();

        // play the correct answer sound
        this.gameAudioPlayer.correctAnswer();

        // mark this table entry as solved
        this.activeLevelModel.markCellAsUsed( this.problemModel.multiplicand, this.problemModel.multiplier );

        // show the feedback that indicates a correct answer
        this.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;

        // start a timer that will set up the next problem
        this.timerActive = true;
        Timer.setTimeout(
          function() {
            if ( self.state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
              self.nextProblem();
            }
          },
          FEEDBACK_TIME
        );
      }
      // incorrect answer
      else {
        // player will not get points for this task
        this.problemModel.possiblePoints = 0;

        // set face model state and play sound
        // TODO: Sound should be played in view, and not here, once all the state changes are sorted out.
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
        // all problems have been answered, the level is now complete
        this.state = GameState.SHOWING_LEVEL_COMPLETED_DIALOG;
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
      throw new Error( 'this function must be overridden in sub-classes' );
    },

    /**
     * Automatically answer most of the problems for this level.  This is useful for testing, since it can save time
     * when testing how the sim behaves when a user finishing answering all questions for a level.
     *
     * IMPORTANT: We need to be VERY CAREFUL that this is never available in the published sim.
     *
     * @protected
     */
    autoAnswer: function() {
      // does nothing in the base class, override in descendant classes if desired
    },

    returnToLevelSelectScreen: function() {

      // save state of current level
      this.saveGameEnvironment();

      // go back to the level selection screen
      this.state = GameState.SELECTING_LEVEL;
    },

    refreshLevel: function() {
      this.resetLevel();
      this.activeLevelModel.displayScore = 0;
      this.nextProblem();
      this.trigger( 'refreshed' );
    },

    resetLevelModels: function() {
      this.levelModels.forEach( function( levelModel ) {
        levelModel.reset();
      } );
    },

    playLevelFinishedSound: function() {
      var resultScore = this.activeLevelModel.currentScore;
      var perfectScore = this.activeLevelModel.perfectScore;

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
      if ( this.levelModels[ level ].environment ) {
        this.restoreGameEnvironment( this.levelModels[ level ].environment );
      }
      else {
        this.nextProblem();

        // enable auto answer if specified in the query params, but only if this is not a production release
        if ( ArithmeticQueryParameters.AUTO_ANSWER && window.phet.joist.sim.version.indexOf( '-' ) > 0 ) {
          this.autoAnswer();
        }
      }
    },

    resetLevel: function() {
      this.activeLevelModel.reset();
      this.inputProperty.reset();
      this.problemModel.reset();
      this.faceModel.reset();
      this.faceModel.hideFace();
    },

    // @public - select an unused multiplican-multiplier pair
    selectUnusedMultiplierPair: function() {
      return this.activeLevelModel.selectUnusedMultiplierPair();
    },

    // @public - reset the scores, clear the boards
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // reset levels model
      this.resetLevelModels();

      // clear game level states
      this.clearGameEnvironments();
    },

    clearGameEnvironment: function( levelNumber ) {
      this.levelModels[ levelNumber ].environment = null;
    },

    // clear environments of all levels
    clearGameEnvironments: function() {
      this.levelModels.forEach( function( levelModel ) {
        levelModel.environment = null;
      } );
    },

    // @private - set the 'game environment', generally used when switching to a different level
    restoreGameEnvironment: function( environment ) {
      this.activeLevelModel.currentScore = environment.currentScore;
      this.activeInput = environment.activeInput;
      this.problemModel.multiplicand = environment.multiplicand;
      this.problemModel.multiplier = environment.multiplier;
      this.problemModel.product = environment.product;
      this.problemModel.possiblePoints = environment.possiblePoints;
      this.state = environment.state;
      this.input = environment.input;

      // Elapsed time must account for any time that has gone by since the environment was saved.
      this.activeLevelModel.gameTimer.elapsedTime = environment.elapsedTime + Math.floor( ( new Date().getTime() - environment.systemTimeWhenSaveOccurred ) / 1000 );
    },

    // save game environment of current level
    saveGameEnvironment: function() {
      this.activeLevelModel.environment = {
        input: this.input,
        multiplicand: this.problemModel.multiplicand,
        multiplier: this.problemModel.multiplier,
        product: this.problemModel.product,
        state: this.state,
        currentScore: this.activeLevelModel.currentScore,
        elapsedTime: this.activeLevelModel.gameTimer.elapsedTime,
        systemTimeWhenSaveOccurred: new Date().getTime(),
        possiblePoints: this.problemModel.possiblePoints,
        activeInput: this.activeInput
      };
    }
  } );
} );
