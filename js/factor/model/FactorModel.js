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

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  function FactorModel() {
    var self = this;
    ArithmeticModel.call( this );

    // next task observer
    this.game.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.NEXT_TASK ) {
        // get available multipliers
        var multipliers = self.game.getAvailableMultipliers();

        if ( multipliers ) {
          // reset multipliers and score properties
          self.game.property( 'scoreTask' ).reset();
          self.game.property( 'multiplierLeft' ).reset();
          self.game.property( 'multiplierRight' ).reset();

          // set product
          self.game.product = multipliers.multiplierLeft * multipliers.multiplierRight;

          // set start state
          self.game.state = GAME_STATE.START;
        }
        else {
          // set level finished state
          self.game.state = GAME_STATE.LEVEL_FINISHED;
        }
      }
    } );
  }

  return inherit( ArithmeticModel, FactorModel );
} );
