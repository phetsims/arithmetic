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
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function MultiplyModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {
        self.problemModel.product = parseInt( self.input, 10 );

        self.state = GameState.EQUATION_FILLED;
      }
    } );

    // next task observer
    this.property( 'state' ).link( function( state ) {
      if ( state === GameState.NEXT_TASK ) {
        // get available multipliers
        var multipliers = self.selectUnusedMultiplierPair();

        if ( multipliers ) {
          // reset multipliers and score properties
          self.problemModel.property( 'multiplierLeft' ).reset();
          self.problemModel.property( 'multiplierRight' ).reset();
          self.problemModel.property( 'possiblePoints' ).reset();

          // set left and right multipliers
          self.problemModel.multiplierLeft = multipliers.multiplierLeft;
          self.problemModel.multiplierRight = multipliers.multiplierRight;

          // set start state
          self.state = GameState.AWAITING_USER_INPUT;
        }
        else {
          // set level finished state
          self.state = GameState.LEVEL_FINISHED;
        }
      }
    } );
  }

  return inherit( ArithmeticModel, MultiplyModel );
} );
