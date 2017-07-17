// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
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
  function FactorModel() {
    ArithmeticModel.call( this );
  }

  arithmetic.register( 'FactorModel', FactorModel );

  return inherit( ArithmeticModel, FactorModel, {

    // @public
    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multiplierPair = this.selectUnusedMultiplierPair();

      if ( multiplierPair ) {

        // reset multiplierPair and score properties
        this.problemModel.possiblePointsProperty.reset();
        this.problemModel.multiplicandProperty.reset();
        this.problemModel.multiplierProperty.reset();

        // set product
        this.problemModel.product = multiplierPair.multiplicand * multiplierPair.multiplier;

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
        var multiplicand = this.problemModel.multiplicand;
        var multiplier = this.problemModel.multiplier;
        this.retryProblem();
        this.problemModel.multiplicand = multiplicand;
        this.problemModel.multiplier = multiplier;
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
      var soundState = ArithmeticGlobals.soundEnabledProperty.value;
      ArithmeticGlobals.soundEnabledProperty.value = false;

      // answer the questions
      var self = this;
      var tableSize = this.activeLevelModel.tableSize;
      var numQuestions = tableSize * tableSize;
      var numQuestionsToAnswer = numQuestions - 1;
      var levelModel = this.activeLevelModel; // convenience var
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function( index ) {
        // do a brute-force factoring method, since performance isn't really an issue here
        var answerFound = false;
        for ( var multiplicand = 1; multiplicand <= tableSize && !answerFound; multiplicand++ ) {
          for ( var multiplier = 1; multiplier <= tableSize && !answerFound; multiplier++ ) {
            if ( multiplicand * multiplier === self.problemModel.product && !levelModel.isCellUsed( multiplicand, multiplier ) ) {
              answerFound = true;
              levelModel.markCellAsUsed( multiplicand, multiplier );
            }
          }
        }
        levelModel.currentScore += self.problemModel.possiblePoints;
        levelModel.displayScore = self.activeLevelModel.currentScore;
        self.stateProperty.set( GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK );
        self.nextProblem();
      } );

      // restore the original sound state
      ArithmeticGlobals.soundEnabledProperty.value = soundState;
    }
  } );
} );
