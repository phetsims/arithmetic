// Copyright 2002-2014, University of Colorado Boulder

/**
 * Model for divide game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );
  var GameState = require( 'ARITHMETIC/common/GameState' );

  /**
   * @constructor
   */
  function DivideModel() {
    var self = this;
    ArithmeticModel.call( this, {
      fillEquation: function() {
        // Convert any strings entered by the user into numerical values.
        self.problemModel.multiplierRight = parseInt( self.problemModel.multiplierRight, 10 );
        self.problemModel.multiplierLeft = parseInt( self.problemModel.multiplierLeft, 10 );

        // Advance to the next game state.
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
          self.input = '';
          self.problemModel.property( 'multiplierLeft' ).reset();
          self.problemModel.property( 'multiplierRight' ).reset();
          self.problemModel.property( 'product' ).reset();
          self.problemModel.property( 'possiblePoints' ).reset();

          // set product
          self.problemModel.product = multipliers.multiplierLeft * multipliers.multiplierRight;

          // set left or right multiplier
          if ( Math.random() < 0.5 ) {
            self.problemModel.multiplierLeft = multipliers.multiplierLeft;
            self.activeInput = 'right';
          }
          else {
            self.problemModel.multiplierRight = multipliers.multiplierRight;
            self.activeInput = 'left';
          }

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

  return inherit( ArithmeticModel, DivideModel );
} );
