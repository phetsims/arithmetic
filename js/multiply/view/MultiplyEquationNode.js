// Copyright 2014-2021, University of Colorado Boulder

/**
 * Equation node for 'multiply' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import EquationNode from '../../common/view/EquationNode.js';

class MultiplyEquationNode extends EquationNode {

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property} inputProperty - Input property, which is the product, and is input by the user.
   *
   */
  constructor( stateProperty, multiplicandProperty, multiplierProperty, inputProperty ) {
    super( multiplicandProperty, multiplierProperty, inputProperty );

    // The product is always the interactive part for this equation, so set up the appearance now.
    this.productInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( ( newState, oldState ) => {

      // Set the state of the product portion of the equation.
      if ( newState === GameState.AWAITING_USER_INPUT && oldState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
        this.productInput.clear();
      }

      // The input should only have focus (i.e. blinking cursor) when awaiting input from the user.
      this.productInput.setFocus( newState === GameState.AWAITING_USER_INPUT );

      // If the user got it wrong, the equation should depict a not equals sign.
      this.setShowEqual( newState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    } );
  }
}

arithmetic.register( 'MultiplyEquationNode', MultiplyEquationNode );

export default MultiplyEquationNode;