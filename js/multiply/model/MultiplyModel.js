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
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call( this );

    // next task observer
    this.game.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.NEXT_TASK ) {
        // get available multipliers
        var multipliers = self.game.getAvailableMultipliers();

        if ( multipliers ) {
          // reset multipliers and score properties
          self.game.property( 'multiplierLeft' ).reset();
          self.game.property( 'multiplierRight' ).reset();
          self.game.property( 'scoreTask' ).reset();

          // set left and right multipliers
          self.game.multiplierLeft = multipliers.multiplierLeft;
          self.game.multiplierRight = multipliers.multiplierRight;

          // set start state
          self.game.state = GAME_STATE.START;
        }
        else {
          // set level finished state
          self.game.state = GAME_STATE.LEVEL_FINISHED;
        }
      }
      else if ( state === 'equationFilled' ) {
        self.inputProperty.reset();
      }
    } );
  }

  return inherit( ArithmeticModel, MultiplyModel, {
    checkAnswer: function() {
      this.game.product = parseInt( this.input, 10 );
      this.game.state = GAME_STATE.EQUATION_FILLED;
    }
  } );
} );
