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
   * @param stateProperty {Property} state of game property
   * @param multiplierLeftProperty {Property} property necessary for creating left multiplier input
   * @param multiplierRightProperty {Property} property necessary for creating right multiplier input
   * @param inputProperty {Property} input property
   * @param inputCursorVisibilityProperty {Property} property which switch true/false with given time interval
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
