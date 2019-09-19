// Copyright 2014-2017, University of Colorado Boulder

/**
 * Equation node for 'multiply' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  const GameState = require( 'ARITHMETIC/common/model/GameState' );
  const inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property} inputProperty - Input property, which is the product, and is input by the user.
   *
   * @constructor
   */
  function MultiplyEquationNode( stateProperty, multiplicandProperty, multiplierProperty, inputProperty ) {
    var self = this;
    EquationNode.call( this, multiplicandProperty, multiplierProperty, inputProperty );

    // The product is always the interactive part for this equation, so set up the appearance now.
    this.productInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( function( newState, oldState ) {

      // Set the state of the product portion of the equation.
      if ( newState === GameState.AWAITING_USER_INPUT && oldState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
        self.productInput.clear();
      }

      // The input should only have focus (i.e. blinking cursor) when awaiting input from the user.
      self.productInput.setFocus( newState === GameState.AWAITING_USER_INPUT );

      // If the user got it wrong, the equation should depict a not equals sign.
      self.setShowEqual( newState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    } );
  }

  arithmetic.register( 'MultiplyEquationNode', MultiplyEquationNode );

  return inherit( EquationNode, MultiplyEquationNode );
} );
