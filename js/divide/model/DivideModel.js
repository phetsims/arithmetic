// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
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
  var Random = require( 'DOT/Random' );

  /**
   * @constructor
   */
  function DivideModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {

        // Convert any strings entered by the user into numerical values.
        self.problemModel.multiplier = parseInt( self.problemModel.multiplier, 10 );
        self.problemModel.multiplicand = parseInt( self.problemModel.multiplicand, 10 );

        // Submit this answer so that it can be checked.
        self.submitAnswer();
      }
    } );
    this.random = new Random( { staticSeed: true } );
  }

  arithmetic.register( 'DivideModel', DivideModel );

  return inherit( ArithmeticModel, DivideModel, {

    // @public
    setUpUnansweredProblem: function() {

      // get available multiplier pair
      var multipliers = this.selectUnusedMultiplierPair();

      if ( multipliers ) {

        // reset multiplierPair and score properties
        this.problemModel.multiplicandProperty.reset();
        this.problemModel.multiplierProperty.reset();
        this.problemModel.productProperty.reset();
        this.problemModel.possiblePointsProperty.reset();

        // set product
        this.problemModel.product = multipliers.multiplicand * multipliers.multiplier;

        // set multiplicand or multiplier
        if ( this.random.nextBoolean() ) {
          this.problemModel.multiplicand = multipliers.multiplicand;
          this.activeInputProperty.set( 'multiplier' );
        }
        else {
          this.problemModel.multiplier = multipliers.multiplier;
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
      var self = this;

      // make sure that sound is off, since otherwise it dings for every solved problem
      var soundState = ArithmeticGlobals.soundEnabledProperty.value;
      ArithmeticGlobals.soundEnabledProperty.value = false;

      // answer the questions
      var numQuestions = this.activeLevelModel.tableSize * this.activeLevelModel.tableSize;
      var numQuestionsToAnswer = numQuestions - 1;
      console.log( 'Automatically answering', numQuestionsToAnswer, 'of', numQuestions, 'questions.' );
      _.times( numQuestionsToAnswer, function( index ) {
        if ( !self.problemModel.multiplicand ) {
          self.problemModel.multiplicand = self.problemModel.product / self.problemModel.multiplier;
        }
        else if ( !self.problemModel.multiplier ) {
          self.problemModel.multiplier = self.problemModel.product / self.problemModel.multiplicand;
        }
        else {
          throw new Error( 'unexpected problem structure for problem', index );
        }
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
