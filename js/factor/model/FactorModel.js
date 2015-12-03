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
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function FactorModel() {
    ArithmeticModel.call( this );
  }

  return inherit( ArithmeticModel, FactorModel, {

    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multiplierPair = this.selectUnusedMultiplierPair();

      if ( multiplierPair ) {

        // reset multiplierPair and score properties
        this.problemModel.property( 'possiblePoints' ).reset();
        this.problemModel.property( 'multiplicand' ).reset();
        this.problemModel.property( 'multiplier' ).reset();

        // set product
        this.problemModel.product = multiplierPair.multiplicand * multiplierPair.multiplier;

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
        self.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;
        self.nextProblem();
      } );
    }

  } );
} );
