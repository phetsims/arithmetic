// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

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
    }
  } );
} );
