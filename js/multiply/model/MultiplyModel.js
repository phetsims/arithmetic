// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

  function MultiplyModel() {
    ArithmeticModel.call( this );
  }

  return inherit( ArithmeticModel, MultiplyModel, {
    checkInput: function() {
      console.log( this.input );
    },
    setTask: function() {
      // get available multipliers
      var multipliers = this.game.getAvailableMultipliers();

      if ( multipliers ) {
        // set left and right multipliers
        this.game.multiplierLeft = multipliers.multiplierLeft;
        this.game.multiplierRight = multipliers.multiplierRight;
      }
    }
  } );
} );
