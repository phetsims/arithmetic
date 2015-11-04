// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
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
  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {
        self.problemModel.product = parseInt( self.input, 10 );
        self.submitAnswer();
      }
    } );
  }

  return inherit( ArithmeticModel, MultiplyModel, {

    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multiplierPair = this.selectUnusedMultiplierPair();

      if ( multiplierPair ) {

        // reset multiplierPair and score properties
        this.problemModel.property( 'multiplierLeft' ).reset();
        this.problemModel.property( 'multiplierRight' ).reset();
        this.problemModel.property( 'product' ).reset();
        this.problemModel.property( 'possiblePoints' ).reset();

        // set left and right multiplierPair
        this.problemModel.multiplierLeft = multiplierPair.multiplierLeft;
        this.problemModel.multiplierRight = multiplierPair.multiplierRight;

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
      _.times( numQuestionsToAnswer, function() {
        self.problemModel.product = self.problemModel.multiplierLeft * self.problemModel.multiplierRight;
        self.currentLevelModel.currentScore += self.problemModel.possiblePoints;
        self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;
        self.answerSheet[ self.problemModel.multiplierLeft - 1 ][ self.problemModel.multiplierRight - 1 ] = true;
        self.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;
        self.nextProblem();
      } );
    }
  } );
} );
