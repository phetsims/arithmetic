// Copyright 2014-2019, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import soundManager from '../../../../tambo/js/soundManager.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticModel from '../../common/model/ArithmeticModel.js';
import GameState from '../../common/model/GameState.js';

/**
 * @param {Tandem} tandem
 * @constructor
 */
function FactorModel( tandem ) {
  ArithmeticModel.call( this, tandem );
}

arithmetic.register( 'FactorModel', FactorModel );

export default inherit( ArithmeticModel, FactorModel, {

  // @public
  setUpUnansweredProblem: function() {

    // get available multiplier pair
    const multiplierPair = this.selectUnusedMultiplierPair();

    if ( multiplierPair ) {

      // reset multiplierPair and score properties
      this.problemModel.possiblePointsProperty.reset();
      this.problemModel.multiplicandProperty.reset();
      this.problemModel.multiplierProperty.reset();

      // set product
      this.problemModel.productProperty.set(
        multiplierPair.multiplicand * multiplierPair.multiplier
      );

      return true;
    }

    // All multiplier pairs have been used, so false is returned.
    return false;
  },

  /**
   * Submit an answer for the currently active problem.  This override exists to handle one very special case on the
   * Factor screen: the situation where the user submits two or more incorrect answers in a row without pressing the
   * "Try Again" button in between.  In this case, there is no natural state transition, so the feedback sound is
   * never played.  This override forces the state transition.
   *
   * See https://github.com/phetsims/arithmetic/issues/160#issuecomment-164507798 for more.
   *
   * @override
   * @public
   */
  submitAnswer: function() {
    if ( this.stateProperty.get() === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {

      // force a change to the AWAITING_USER_INPUT state before checking the answer
      const multiplicand = this.problemModel.multiplicandProperty.get();
      const multiplier = this.problemModel.multiplierProperty.get();
      this.retryProblem();
      this.problemModel.multiplicandProperty.set( multiplicand );
      this.problemModel.multiplierProperty.set( multiplier );
    }
    ArithmeticModel.prototype.submitAnswer.call( this );
  },

  /**
   * Automatically answer most of the questions.  This is useful for testing, since it can save time when testing
   * how the sim behaves when a user finishing answering all questions for a level.  We need to be very careful that
   * this is never available in the published sim.
   * @override
   * @protected
   */
  autoAnswer: function() {

    // make sure that sound is off, since otherwise it dings for every solved problem
    const soundState = soundManager.enabled;
    soundManager.enabled = false;

    // answer the questions
    const self = this;
    const tableSize = this.activeLevelModel.tableSize;
    const numQuestions = tableSize * tableSize;
    const numQuestionsToAnswer = numQuestions - 1;
    const levelModel = this.activeLevelModel; // convenience var
    console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
    _.times( numQuestionsToAnswer, function( index ) {
      // do a brute-force factoring method, since performance isn't really an issue here
      let answerFound = false;
      for ( let multiplicand = 1; multiplicand <= tableSize && !answerFound; multiplicand++ ) {
        for ( let multiplier = 1; multiplier <= tableSize && !answerFound; multiplier++ ) {
          if ( multiplicand * multiplier === self.problemModel.productProperty.get() && !levelModel.isCellUsed( multiplicand, multiplier ) ) {

            answerFound = true;
            levelModel.markCellAsUsed( multiplicand, multiplier );
          }
        }
      }
      levelModel.currentScoreProperty.value += self.problemModel.possiblePointsProperty.get();
      levelModel.displayScoreProperty.set( self.activeLevelModel.currentScoreProperty.get() );
      self.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );
      self.nextProblem();
    } );

    // restore the original sound state
    soundManager.enabled = soundState;
  }
} );