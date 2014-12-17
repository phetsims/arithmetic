// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );
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
    }
  } );
} );
