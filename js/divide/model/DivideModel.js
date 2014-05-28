// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for divide game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

  function DivideModel() {
    ArithmeticModel.call( this );
  }

  return inherit( ArithmeticModel, DivideModel, {
    setTask: function() {
      // get available multipliers
      var multipliers = this.game.getAvailableMultipliers();

      // set product
      this.game.product = multipliers.multiplierLeft * multipliers.multiplierRight;

      // set left or right multiplier
      if ( Math.random() < 0.5 ) {
        this.game.multiplierLeft = multipliers.multiplierLeft;
      }
      else {
        this.game.multiplierRight = multipliers.multiplierRight;
      }
    }
  } );
} );
