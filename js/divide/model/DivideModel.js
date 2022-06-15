// Copyright 2014-2022, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import dotRandom from '../../../../dot/js/dotRandom.js';
import soundManager from '../../../../tambo/js/soundManager.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticModel from '../../common/model/ArithmeticModel.js';
import GameState from '../../common/model/GameState.js';

class DivideModel extends ArithmeticModel {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super( tandem, {
      fillEquation: () => {

        // Convert any strings entered by the user into numerical values.
        this.problemModel.multiplierProperty.set( Number( this.problemModel.multiplierProperty.get() ) );
        this.problemModel.multiplicandProperty.set( Number( this.problemModel.multiplicandProperty.get() ) );

        // Submit this answer so that it can be checked.
        this.submitAnswer();
      }
    } );
  }

  // @public
  setUpUnansweredProblem() {

    // get available multiplier pair
    const multipliers = this.selectUnusedMultiplierPair();

    if ( multipliers ) {

      // reset multiplierPair and score properties
      this.problemModel.multiplicandProperty.reset();
      this.problemModel.multiplierProperty.reset();
      this.problemModel.productProperty.reset();
      this.problemModel.possiblePointsProperty.reset();

      // set product
      this.problemModel.productProperty.set( multipliers.multiplicand * multipliers.multiplier );

      // set multiplicand or multiplier
      if ( dotRandom.nextBoolean() ) {
        this.problemModel.multiplicandProperty.set( multipliers.multiplicand );
        this.activeInputProperty.set( 'multiplier' );
      }
      else {
        this.problemModel.multiplierProperty.set( multipliers.multiplier );
        this.activeInputProperty.set( 'multiplicand' );
      }

      return true;
    }

    // All multiplier pairs have been used, so false is returned.
    return false;
  }

  /**
   * Automatically answer most of the questions.  This is useful for testing, since it can save time when testing
   * how the sim behaves when a user finishing answering all questions for a level.  We need to be very careful that
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
    _.times( numQuestionsToAnswer, index => {
      if ( !this.problemModel.multiplicandProperty.get() ) {
        this.problemModel.multiplicandProperty.set(
          this.problemModel.productProperty.get() / this.problemModel.multiplierProperty.get()
        );
      }
      else if ( !this.problemModel.multiplierProperty.get() ) {
        this.problemModel.multiplierProperty.set(
          this.problemModel.productProperty.get() / this.problemModel.multiplicandProperty.get()
        );
      }
      else {
        throw new Error( 'unexpected problem structure for problem', index );
      }
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

arithmetic.register( 'DivideModel', DivideModel );

export default DivideModel;