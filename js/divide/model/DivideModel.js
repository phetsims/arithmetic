// Copyright 2014-2020, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Random from '../../../../dot/js/Random.js';
import inherit from '../../../../phet-core/js/inherit.js';
import soundManager from '../../../../tambo/js/soundManager.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticModel from '../../common/model/ArithmeticModel.js';
import GameState from '../../common/model/GameState.js';

/**
 * @param {Tandem} tandem
 * @constructor
 */
function DivideModel( tandem ) {
  const self = this;
  ArithmeticModel.call( this, tandem, {
    fillEquation: function() {

      // Convert any strings entered by the user into numerical values.
      self.problemModel.multiplierProperty.set( parseInt( self.problemModel.multiplierProperty.get(), 10 ) );
      self.problemModel.multiplicandProperty.set( parseInt( self.problemModel.multiplicandProperty.get(), 10 ) );

      // Submit this answer so that it can be checked.
      self.submitAnswer();
    }
  } );
  this.random = new Random( { staticSeed: true } );
}

arithmetic.register( 'DivideModel', DivideModel );

inherit( ArithmeticModel, DivideModel, {

  // @public
  setUpUnansweredProblem: function() {

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
      if ( this.random.nextBoolean() ) {
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
  },

  /**
   * Automatically answer most of the questions.  This is useful for testing, since it can save time when testing
   * how the sim behaves when a user finishing answering all questions for a level.  We need to be very careful that
   * this is never available in the published sim.
   * @override
   * @protected
   */
  autoAnswer: function() {
    const self = this;

    // make sure that sound is off, since otherwise it dings for every solved problem
    const soundState = soundManager.enabled;
    soundManager.enabled = false;

    // answer the questions
    const numQuestions = this.activeLevelModel.tableSize * this.activeLevelModel.tableSize;
    const numQuestionsToAnswer = numQuestions - 1;
    console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
    _.times( numQuestionsToAnswer, function( index ) {
      if ( !self.problemModel.multiplicandProperty.get() ) {
        self.problemModel.multiplicandProperty.set(
          self.problemModel.productProperty.get() / self.problemModel.multiplierProperty.get()
        );
      }
      else if ( !self.problemModel.multiplierProperty.get() ) {
        self.problemModel.multiplierProperty.set(
          self.problemModel.productProperty.get() / self.problemModel.multiplicandProperty.get()
        );
      }
      else {
        throw new Error( 'unexpected problem structure for problem', index );
      }
      self.activeLevelModel.currentScoreProperty.value += self.problemModel.possiblePointsProperty.get();
      self.activeLevelModel.displayScoreProperty.set( self.activeLevelModel.currentScoreProperty.get() );
      self.activeLevelModel.markCellAsUsed(
        self.problemModel.multiplicandProperty.get(),
        self.problemModel.multiplierProperty.get()
      );
      self.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );
      self.nextProblem();
    } );

    // restore the original sound state
    soundManager.enabled = soundState;
  }
} );

export default DivideModel;