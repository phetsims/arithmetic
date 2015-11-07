// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
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
  function DivideModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {

        // Convert any strings entered by the user into numerical values.
        self.problemModel.multiplierRight = parseInt( self.problemModel.multiplierRight, 10 );
        self.problemModel.multiplierLeft = parseInt( self.problemModel.multiplierLeft, 10 );

        // Submit this answer so that it can be checked.
        self.submitAnswer();
      }
    } );
  }

  return inherit( ArithmeticModel, DivideModel, {

    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multipliers = this.selectUnusedMultiplierPair();

      if ( multipliers ) {

        // reset multiplierPair and score properties
        this.problemModel.property( 'multiplierLeft' ).reset();
        this.problemModel.property( 'multiplierRight' ).reset();
        this.problemModel.property( 'product' ).reset();
        this.problemModel.property( 'possiblePoints' ).reset();

        // set product
        this.problemModel.product = multipliers.multiplierLeft * multipliers.multiplierRight;

        // set left or right multiplier
        if ( Math.random() < 0.5 ) {
          this.problemModel.multiplierLeft = multipliers.multiplierLeft;
          this.activeInput = 'right';
        }
        else {
          this.problemModel.multiplierRight = multipliers.multiplierRight;
          this.activeInput = 'left';
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
      var self = this;
      var numQuestions = this.answerSheet.length * this.answerSheet[ 0 ].length;
      var numQuestionsToAnswer = numQuestions - 1;
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function() {
        if ( self.problemModel.multiplierLeft === undefined ) {
          self.problemModel.multiplierLeft = self.problemModel.product / self.problemModel.multiplierRight;
        }
        else if ( self.problemModel.multiplierRight === undefined ) {
          self.problemModel.multiplierRight = self.problemModel.product / self.problemModel.multiplierLeft;
        }
        else {
          throw new Error( 'unexpected problem structure' );
        }
        self.currentLevelModel.currentScore += self.problemModel.possiblePoints;
        self.currentLevelModel.displayScore = self.currentLevelModel.currentScore;
        self.answerSheet[ self.problemModel.multiplierLeft - 1 ][ self.problemModel.multiplierRight - 1 ] = true;
        self.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;
        self.nextProblem();
      } );
    }
  } );

} );
