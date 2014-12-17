// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
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
    }

  } );
} );
