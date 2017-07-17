// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call(
      this,
      {
        fillEquation: function() {
          self.problemModel.product = parseInt( self.inputProperty.get(), 10 );
          self.submitAnswer();
        }
      }
    );
  }

  arithmetic.register( 'MultiplyModel', MultiplyModel );

  return inherit( ArithmeticModel, MultiplyModel, {

    // @public
    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multiplierPair = this.selectUnusedMultiplierPair();

      if ( multiplierPair ) {

        // reset the problem and score properties
        this.problemModel.multiplicandProperty.reset();
        this.problemModel.multiplierProperty.reset();
        this.problemModel.productProperty.reset();
        this.problemModel.possiblePointsProperty.reset();

        // set up the problem
        this.problemModel.multiplicand = multiplierPair.multiplicand;
        this.problemModel.multiplier = multiplierPair.multiplier;

        return true;
      }

      // All multiplier pairs have been used, so false is returned.
      return false;
    },

    /**
     * Automatically answer most of the problems.  This is useful for testing, since it can save time when evaluating
     * how the sim behaves when a user finishes answering all questions for a level.  We need to be very careful that
     * this is never available in the published sim.
     * @override
     * @protected
     */
    autoAnswer: function() {

      // make sure that sound is off, since otherwise it dings for every solved problem
      var soundState = ArithmeticGlobals.soundEnabledProperty.value;
      ArithmeticGlobals.soundEnabledProperty.value = false;

      // answer the questions
      var self = this;
      var numQuestions = this.activeLevelModel.tableSize * this.activeLevelModel.tableSize;
      var numQuestionsToAnswer = numQuestions - 1;
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function() {
        self.problemModel.product = self.problemModel.multiplicand * self.problemModel.multiplier;
        self.activeLevelModel.currentScore += self.problemModel.possiblePoints;
        self.activeLevelModel.displayScore = self.activeLevelModel.currentScore;
        self.activeLevelModel.markCellAsUsed( self.problemModel.multiplicand, self.problemModel.multiplier );
        self.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );
        self.nextProblem();
      } );

      // restore the original sound state
      ArithmeticGlobals.soundEnabledProperty.value = soundState;
    }
  } );
} );
