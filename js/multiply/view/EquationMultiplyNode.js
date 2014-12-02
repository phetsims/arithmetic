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
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplierLeftProperty - Property necessary for creating left multiplier input.
   * @param {Property} multiplierRightProperty - Property necessary for creating right multiplier input.
   * @param {Property} inputProperty - Input property, which is the product, and is input by the user.
   *
   * @constructor
   */
  function EquationMultiplyNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, inputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, inputProperty );

    stateProperty.link( function( state ) {
      if ( state === GameState.AWAITING_USER_INPUT ) {
        self.productInput.clear();
        self.productInput.focus();
      }
      else {
        self.productInput.unfocus();
      }
    } );
  }

  return inherit( EquationNode, EquationMultiplyNode );
} );
