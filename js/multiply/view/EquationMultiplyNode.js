// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'multiply' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplierLeftProperty - Property necessary for creating left multiplier input.
   * @param {Property} multiplierRightProperty - Property necessary for creating right multiplier input.
   * @param {Property} inputProperty - Input property.
   * @param {Property} inputCursorVisibilityProperty - Property which switch true/false with given time interval.
   *
   * @constructor
   */
  function EquationMultiplyNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, inputProperty, inputCursorVisibilityProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, inputProperty, inputCursorVisibilityProperty );

    stateProperty.link( function( state ) {
      if ( state === GAME_STATE.AWAITING_USER_INPUT ) {
        self.productInput.clear();
        self.productInput.focus();
      }
    } );
  }

  return inherit( EquationNode, EquationMultiplyNode );
} );
