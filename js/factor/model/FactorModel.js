// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
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
        this.problemModel.property( 'multiplierLeft' ).reset();
        this.problemModel.property( 'multiplierRight' ).reset();

        // set product
        this.problemModel.product = multiplierPair.multiplierLeft * multiplierPair.multiplierRight;

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
      var numQuestions = this.answerSheet.length * this.answerSheet[ 0 ].length;
      var numQuestionsToAnswer = numQuestions - 1;
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function( index ) {
        // do a brute-force factoring method, since performance isn't really an issue here
        var answerFound = false;
        for ( var i = 0; i < self.answerSheet.length && !answerFound; i++ ) {
          for ( var j = 0; j < self.answerSheet[ 0 ].length && !answerFound; j++ ) {
            if ( ( i + 1 ) * ( j + 1 ) === self.problemModel.product && self.answerSheet[ i ][ j ] === false ) {
              answerFound = true;
              self.answerSheet[ i ][ j ] = true;
            }
          }
        }
        self.activeLevelModel.currentScore += self.problemModel.possiblePoints;
        self.activeLevelModel.displayScore = self.activeLevelModel.currentScore;
        self.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;
        self.nextProblem();
      } );
    }

  } );
} );
