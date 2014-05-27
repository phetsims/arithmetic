// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

  function FactorModel() {
    var self = this;
    ArithmeticModel.call( this );

    this.property( 'level' ).lazyLink( function( levelNumber ) {
      if ( levelNumber ) {
        self.setTask();
      }
    } );
  }

  return inherit( ArithmeticModel, FactorModel, {
    setTask: function() {
      // get available multipliers
      var multipliers = this.game.getAvailableMultipliers();

      // set product
      this.game.product = multipliers.multiplierLeft * multipliers.multiplierRight;
    }
  } );
} );
