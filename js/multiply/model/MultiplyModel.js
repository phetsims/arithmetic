// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for multiply game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call( this );

    this.property( 'level' ).lazyLink( function( levelNumber ) {
      if ( levelNumber ) {
        self.setTask();
      }
    } );
  }

  return inherit( ArithmeticModel, MultiplyModel, {
    setTask: function() {
      // get available multipliers
      var multipliers = this.game.getAvailableMultipliers();

      // set left and right multipliers
      this.game.multiplierLeft = multipliers.multiplierLeft;
      this.game.multiplierRight = multipliers.multiplierRight;
    }
  } );
} );
