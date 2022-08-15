// Copyright 2014-2022, University of Colorado Boulder

/**
 * Base type for models in the 'Arithmetic' simulation.  Each of the three screens - multiplication, factoring, and
 * division - has one of these models.  Each of these models tracks multiple levels.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Emitter from '../../../../axon/js/Emitter.js';
import Property from '../../../../axon/js/Property.js';
import stepTimer from '../../../../axon/js/stepTimer.js';
import merge from '../../../../phet-core/js/merge.js';
import BooleanIO from '../../../../tandem/js/types/BooleanIO.js';
import NumberIO from '../../../../tandem/js/types/NumberIO.js';
import StringIO from '../../../../tandem/js/types/StringIO.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticGlobals from '../ArithmeticGlobals.js';
import ArithmeticQueryParameters from '../ArithmeticQueryParameters.js';
import FaceModel from './FaceModel.js';
import GameState from './GameState.js';
import LevelModel from './LevelModel.js';
import ProblemModel from './ProblemModel.js';

// constants
const FEEDBACK_TIME = 1200; // in milliseconds, time that the feedback is presented before moving to next problem

class ArithmeticModel {

  /**
   * Constructor for ArithmeticModel
   */
  constructor( tandem, options ) {

    // @private - for PhET-iO
    this.checkAnswerEmitter = new Emitter( {
      tandem: tandem.createTandem( 'checkAnswerEmitter' ),
      parameters: [
        { name: 'multiplicand', phetioType: NumberIO },
        { name: 'multiplier', phetioType: NumberIO },
        { name: 'product', phetioType: NumberIO },
        { name: 'isCorrect', phetioType: BooleanIO },
        { name: 'asString', phetioType: StringIO },
        { name: 'input', phetioType: StringIO }
      ]
    } );

    // set up the 'fillEquation' function, which is used to fill in the missing portion(s) based on the user's inputs
    options = merge( { fillEquation: null }, options );
    this.fillEquation = options.fillEquation; // @public

    // @public - active game level, null represents none
    this.levelNumberProperty = new Property( null );

    // @public - user's input value
    this.inputProperty = new Property( '' );

    // @public - reference to the portion of the equation that is awaiting input from the user
    this.activeInputProperty = new Property( null );

    // @public - current game state
    this.stateProperty = new Property( GameState.SELECTING_LEVEL );

    // @public - emitter that emits an even when a refresh occurs
    this.refreshEmitter = new Emitter();

    // @public - array of models that correspond to a given difficulty level
    this.levelModels = [
      // level 1
      new LevelModel( 6 ),
      // level 2
      new LevelModel( 9 ),
      // level 3
      new LevelModel( 12 )
    ];

    // @public - portion of the model that represents a single problem
    this.problemModel = new ProblemModel();

    // @public - model for smile face
    this.faceModel = new FaceModel();

    // handles game state transitions that pertain to the model (does not require handling GameState.SELECTING_LEVEL)
    this.stateProperty.lazyLink( ( newState, oldState ) => {
      if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {

        // start (or restart) the game timer
        this.activeLevelModel.gameTimer.start();

        // update display score
        this.activeLevelModel.displayScoreProperty.set( this.activeLevelModel.currentScoreProperty.get() );
      }
    } );
  }

  // @protected - get the current level model, use this to make the code more readable
  get activeLevelModel() {
    return this.levelModels[ this.levelNumberProperty.get() ];
  }

  /**
   * Check whether the answer submitted by the user is correct.  The user's answer must have been stored in the
   * appropriate portion of the problem model before this method is invoked.  Doing it this way allows this general
   * method to be used to verify the answer.
   * @public
   */
  submitAnswer() {
    const isCorrect = this.problemModel.multiplicandProperty.get() * this.problemModel.multiplierProperty.get() === this.problemModel.productProperty.get();
    const string = `${this.problemModel.multiplicandProperty.get()} x ${this.problemModel.multiplierProperty.get()} = ${this.problemModel.productProperty.get()}`;
    this.checkAnswerEmitter.emit(
      this.problemModel.multiplicandProperty.get(),
      this.problemModel.multiplierProperty.get(),
      this.problemModel.productProperty.get(),
      isCorrect,
      string,
      this.inputProperty.get() );
    if ( isCorrect ) {

      // add the problem value to the total score
      this.activeLevelModel.currentScoreProperty.value += this.problemModel.possiblePointsProperty.get();

      // update the displayed score
      this.activeLevelModel.displayScoreProperty.set( this.activeLevelModel.currentScoreProperty.get() );

      // set the face to smile
      this.faceModel.pointsToDisplayProperty.set( this.problemModel.possiblePointsProperty.get() );
      this.faceModel.isSmileProperty.set( true );
      this.faceModel.showFace();

      // mark this table entry as solved
      this.activeLevelModel.markCellAsUsed(
        this.problemModel.multiplicandProperty.get(),
        this.problemModel.multiplierProperty.get()
      );

      // show the feedback that indicates a correct answer
      this.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );

      // start a timer that will set up the next problem
      this.feedbackTimer = stepTimer.setTimeout(
        () => {
          this.feedbackTimer = null;
          this.nextProblem();
        },
        FEEDBACK_TIME
      );
    }
    // incorrect answer
    else {
      // player will not get points for this task
      this.problemModel.possiblePointsProperty.set( 0 );

      // set face model state
      this.faceModel.pointsToDisplayProperty.set( this.problemModel.possiblePointsProperty.get() );
      this.faceModel.isSmileProperty.set( false );
      this.faceModel.showFace();

      // set the appropriate state
      this.stateProperty.set( GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    }
  }

  /**
   * Move to the next problem or, if all problems have been answered, move to the state where results are shown.
   * @private
   */
  nextProblem() {
    if ( this.setUpUnansweredProblem() ) {
      this.inputProperty.reset();
      this.stateProperty.set( GameState.AWAITING_USER_INPUT );
    }
    else {
      // all problems have been answered, the level is now complete
      this.stateProperty.set( GameState.SHOWING_LEVEL_COMPLETED_DIALOG );
      this.activeLevelModel.gameTimer.stop();
    }
  }

  /**
   * Retry the currently presented problem.
   * @public
   */
  retryProblem() {
    this.stateProperty.set( GameState.AWAITING_USER_INPUT );
  }

  /**
   * Pick an unanswered problem and set it up in the model.  Must be overridden in sub-types, since the way problems
   * are set up varies.
   *
   * Returns true if able to set up a problem, false if not.  A return value of false generally indicates that all
   * problems have been answered.
   *
   * @protected
   */
  setUpUnansweredProblem() {
    throw new Error( 'this function must be overridden in sub-classes' );
  }

  /**
   * Automatically answer most of the problems for this level.  This is useful for testing, since it can save time
   * when testing how the sim behaves when a user finishing answering all questions for a level.
   *
   * IMPORTANT: We need to be VERY CAREFUL that this is never available in the published sim.
   *
   * @protected
   */
  autoAnswer() {
    // does nothing in the base class, override in descendant classes if desired
  }

  // @public
  returnToLevelSelectScreen() {

    if ( this.stateProperty.get() === GameState.AWAITING_USER_INPUT ) {
      // reset any partial input that the user may have entered
      this.inputProperty.reset();
    }

    // save state of current level
    this.saveGameEnvironment();

    // if there is a timer running for displaying feedback, cancel it
    if ( this.feedbackTimer ) {
      stepTimer.clearTimeout( this.feedbackTimer );
    }

    // go back to the level selection screen
    this.stateProperty.set( GameState.SELECTING_LEVEL );
  }

  // @public
  refreshLevel() {
    if ( this.feedbackTimer ) {
      stepTimer.clearTimeout( this.feedbackTimer );
    }
    this.resetLevel();
    this.activeLevelModel.displayScoreProperty.reset();
    this.nextProblem();
    this.activeLevelModel.gameTimer.start(); // may already be running, if so this is a no-op
    this.refreshEmitter.emit();

    // automatically answer most of the problems if enabled - this is for testing
    ArithmeticQueryParameters.autoAnswer && this.autoAnswer();
  }

  // @private
  resetLevelModels() {
    this.levelModels.forEach( levelModel => {
      levelModel.reset();
    } );
  }

  // @public - set the level to be played, initializing or restoring the level as appropriate
  setLevel( level ) {
    this.levelNumberProperty.set( level );

    // restore or init new environment for game
    if ( this.levelModels[ level ].environment ) {
      this.restoreGameEnvironment( this.levelModels[ level ].environment );
      if ( this.stateProperty.get() === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {

        // The user hit the back button before the feedback timer expired, so the next problem wasn't set up.  We need
        // to set it up now.  See https://github.com/phetsims/arithmetic/issues/145
        this.nextProblem();
      }
    }
    else {
      this.nextProblem();

      // automatically answer most of the problems if enabled - this is for testing
      ArithmeticQueryParameters.autoAnswer && this.autoAnswer();
    }
  }

  // @private
  resetLevel() {
    this.activeLevelModel.reset();
    this.inputProperty.reset();
    this.problemModel.reset();
    this.faceModel.reset();
    this.faceModel.hideFace();
  }

  // @public - select an unused multiplican-multiplier pair
  selectUnusedMultiplierPair() {
    return this.activeLevelModel.selectUnusedMultiplierPair();
  }

  // @public - reset the scores, clear the boards
  reset() {

    this.levelNumberProperty.reset();
    this.inputProperty.reset();
    this.activeInputProperty.reset();
    this.stateProperty.reset();

    // reset levels model
    this.resetLevelModels();

    // clear game level states
    this.clearGameEnvironments();

    // reset sound and timer on/off settings
    ArithmeticGlobals.timerEnabledProperty.reset();
  }

  /**
   * clear environments of all levels
   * @private
   */
  clearGameEnvironments() {
    this.levelModels.forEach( levelModel => {
      levelModel.environment = null;
    } );
  }

  /**
   * set the 'game environment', generally used when switching to a different level
   * @param environment
   * @private
   */
  restoreGameEnvironment( environment ) {
    this.activeLevelModel.currentScoreProperty.set( environment.currentScore );
    this.activeInputProperty.set( environment.activeInput );
    this.problemModel.multiplicandProperty.set( environment.multiplicand );
    this.problemModel.multiplierProperty.set( environment.multiplier );
    this.problemModel.productProperty.set( environment.product );
    this.problemModel.possiblePointsProperty.set( environment.possiblePoints );
    this.stateProperty.set( environment.state );
    this.inputProperty.set( environment.input );
    this.activeLevelModel.gameTimer.elapsedTimeProperty.value = environment.elapsedTime;

    // Elapsed time must account for any time that has gone by since the environment was saved.
    if ( this.stateProperty.get() !== GameState.LEVEL_COMPLETED &&
         this.stateProperty.get() !== GameState.SHOWING_LEVEL_COMPLETED_DIALOG ) {

      this.activeLevelModel.gameTimer.elapsedTimeProperty.value =
        this.activeLevelModel.gameTimer.elapsedTimeProperty.value +
        Math.floor( ( new Date().getTime() - environment.systemTimeWhenSaveOccurred ) / 1000 );
    }
  }

  /**
   * save game environment of current level
   * @private
   */
  saveGameEnvironment() {
    this.activeLevelModel.environment = {
      input: this.inputProperty.get(),
      multiplicand: this.problemModel.multiplicandProperty.get(),
      multiplier: this.problemModel.multiplierProperty.get(),
      product: this.problemModel.productProperty.get(),
      state: this.stateProperty.get(),
      currentScore: this.activeLevelModel.currentScoreProperty.get(),
      elapsedTime: this.activeLevelModel.gameTimer.elapsedTimeProperty.value,
      systemTimeWhenSaveOccurred: new Date().getTime(),
      possiblePoints: this.problemModel.possiblePointsProperty.get(),
      activeInput: this.activeInputProperty.get()
    };
  }
}

arithmetic.register( 'ArithmeticModel', ArithmeticModel );

export default ArithmeticModel;