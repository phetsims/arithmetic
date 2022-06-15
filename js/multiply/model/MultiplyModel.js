// Copyright 2014-2022, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import soundManager from '../../../../tambo/js/soundManager.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticModel from '../../common/model/ArithmeticModel.js';
import GameState from '../../common/model/GameState.js';

class MultiplyModel extends ArithmeticModel {

  constructor( tandem ) {

    super( tandem, {
      fillEquation: () => {
        this.problemModel.productProperty.set( Number( this.inputProperty.get() ) );
        this.submitAnswer();
      }
    } );
  }

  // @public
  setUpUnansweredProblem() {

    // get available multiplier pair
    const multiplierPair = this.selectUnusedMultiplierPair();

    if ( multiplierPair ) {

      // reset the problem and score properties
      this.problemModel.multiplicandProperty.reset();
      this.problemModel.multiplierProperty.reset();
      this.problemModel.productProperty.reset();
      this.problemModel.possiblePointsProperty.reset();

      // set up the problem
      this.problemModel.multiplicandProperty.set( multiplierPair.multiplicand );
      this.problemModel.multiplierProperty.set( multiplierPair.multiplier );

      return true;
    }

    // All multiplier pairs have been used, so false is returned.
    return false;
  }

  /**
   * Automatically answer most of the problems.  This is useful for testing, since it can save time when evaluating
   * how the sim behaves when a user finishes answering all questions for a level.  We need to be very careful that
   * this is never available in the published sim.
   * @override
   * @protected
   */
  autoAnswer() {

    // make sure that sound is off, since otherwise it dings for every solved problem
    const soundState = soundManager.enabled;
    soundManager.enabled = false;

    // answer the questions
    const numQuestions = this.activeLevelModel.tableSize * this.activeLevelModel.tableSize;
    const numQuestionsToAnswer = numQuestions - 1;
    console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
    _.times( numQuestionsToAnswer, () => {
      this.problemModel.productProperty.set(
        this.problemModel.multiplicandProperty.get() * this.problemModel.multiplierProperty.get()
      );
      this.activeLevelModel.currentScoreProperty.value += this.problemModel.possiblePointsProperty.get();
      this.activeLevelModel.displayScoreProperty.set( this.activeLevelModel.currentScoreProperty.get() );
      this.activeLevelModel.markCellAsUsed(
        this.problemModel.multiplicandProperty.get(),
        this.problemModel.multiplierProperty.get()
      );
      this.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );
      this.nextProblem();
    } );

    // restore the original sound state
    soundManager.enabled = soundState;
  }
}

arithmetic.register( 'MultiplyModel', MultiplyModel );

export default MultiplyModel;