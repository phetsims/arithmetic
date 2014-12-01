// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for factor game in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );

  /**
   * @constructor
   */
  function FactorModel() {
    var self = this;
    ArithmeticModel.call( this );

    // next task observer
    this.property( 'state' ).link( function( state ) {
      if ( state === GameState.NEXT_TASK ) {
        // get available multipliers
        var multipliers = self.selectUnusedMultiplierPair();

        if ( multipliers ) {
          // reset multipliers and score properties
          self.problemModel.property( 'possiblePoints' ).reset();
          self.problemModel.property( 'multiplierLeft' ).reset();
          self.problemModel.property( 'multiplierRight' ).reset();

          // set product
          self.problemModel.product = multipliers.multiplierLeft * multipliers.multiplierRight;

          // update state
          self.state = GameState.AWAITING_USER_INPUT;
        }
        else {
          // set level finished state
          self.state = GameState.LEVEL_FINISHED;
        }
      }
    } );
  }

  return inherit( ArithmeticModel, FactorModel );
} );
