// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'factor' screen in 'Arithmetic' simulation.
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
   * @param productProperty {Property} property necessary for creating product input
   * @param inputCursorVisibilityProperty {Property} property which switch true/false with given time interval
   *
   * @constructor
   */
  function EquationFactorNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty );

    stateProperty.link( function( state ) {
      if ( state === GAME_STATE.AWAITING_USER_INPUT ) {
        self.multiplierLeftInput.setPlaceholder();
        self.multiplierLeftInput.update();

        self.multiplierRightInput.setPlaceholder();
        self.multiplierRightInput.update();
      }
    } );
  }

  return inherit( EquationNode, EquationFactorNode );
} );
