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

        // reset the problem and score properties
        this.problemModel.property( 'multiplicand' ).reset();
        this.problemModel.property( 'multiplier' ).reset();
        this.problemModel.property( 'product' ).reset();
        this.problemModel.property( 'possiblePoints' ).reset();

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
      var self = this;
      var cellUsedStates = this.activeLevelModel.cellUsedStates;
      var numQuestions = cellUsedStates.length * cellUsedStates[ 0 ].length;
      var numQuestionsToAnswer = numQuestions - 1;
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function() {
        self.problemModel.product = self.problemModel.multiplicand * self.problemModel.multiplier;
        self.activeLevelModel.currentScore += self.problemModel.possiblePoints;
        self.activeLevelModel.displayScore = self.activeLevelModel.currentScore;
        cellUsedStates[ self.problemModel.multiplicand - 1 ][ self.problemModel.multiplier - 1 ] = true;
        self.activeLevelModel.cellUsedStates[ self.problemModel.multiplicand - 1 ][ self.problemModel.multiplier - 1 ] = true;
        self.state = GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK;
        self.nextProblem();
      } );
    }
  } );
} );
