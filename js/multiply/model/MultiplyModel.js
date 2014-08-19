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

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {
        self.gameModel.product = parseInt( self.input, 10 );

        self.gameModel.state = GAME_STATE.EQUATION_FILLED;
      }
    } );

    // next task observer
    this.gameModel.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.NEXT_TASK ) {
        // get available multipliers
        var multipliers = self.gameModel.getAvailableMultipliers();

        if ( multipliers ) {
          // reset multipliers and score properties
          self.gameModel.property( 'multiplierLeft' ).reset();
          self.gameModel.property( 'multiplierRight' ).reset();
          self.gameModel.property( 'possiblePoints' ).reset();

          // set left and right multipliers
          self.gameModel.multiplierLeft = multipliers.multiplierLeft;
          self.gameModel.multiplierRight = multipliers.multiplierRight;

          // set start state
          self.gameModel.state = GAME_STATE.AWAITING_USER_INPUT;
        }
        else {
          // set level finished state
          self.gameModel.state = GAME_STATE.LEVEL_FINISHED;
        }
      }
    } );
  }

  return inherit( ArithmeticModel, MultiplyModel );
} );
