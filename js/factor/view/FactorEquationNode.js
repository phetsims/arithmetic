// Copyright 2014-2021, University of Colorado Boulder

/**
 * Equation node for 'factor' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import EquationNode from '../../common/view/EquationNode.js';

class FactorEquationNode extends EquationNode {

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property} productProperty - Property necessary for creating product input.
   */
  constructor( stateProperty, multiplicandProperty, multiplierProperty, productProperty ) {
    super( multiplicandProperty, multiplierProperty, productProperty );

    // The two multipliers are always interactive in the factor equation, so set this up now.
    this.multiplicandInput.setInteractiveAppearance( true );
    this.multiplierInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( state => {
      this.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // Reset any previous answers from the user.
        multiplicandProperty.reset();
        multiplierProperty.reset();

        // Show the placeholders
        this.multiplicandInput.setPlaceholder();
        this.multiplierInput.setPlaceholder();
      }
    } );
  }
}

arithmetic.register( 'FactorEquationNode', FactorEquationNode );

export default FactorEquationNode;