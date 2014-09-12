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
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplierLeftProperty - Property necessary for creating left multiplier input.
   * @param {Property} multiplierRightProperty - Property necessary for creating right multiplier input.
   * @param {Property} productProperty - Property necessary for creating product input.
   * @param {Property} inputCursorVisibilityProperty - Property which switch true/false with given time interval.
   *
   * @constructor
   */
  function EquationFactorNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty );

    stateProperty.link( function( state ) {
      if ( state === GameState.AWAITING_USER_INPUT ) {
        self.multiplierLeftInput.setPlaceholder();
        self.multiplierLeftInput.update();

        self.multiplierRightInput.setPlaceholder();
        self.multiplierRightInput.update();
      }
    } );
  }

  return inherit( EquationNode, EquationFactorNode );
} );
