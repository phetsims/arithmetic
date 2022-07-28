// Copyright 2014-2022, University of Colorado Boulder

/**
 * Equation node for 'divide' screen in the Arithmetic simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import EquationNode from '../../common/view/EquationNode.js';

class DivideEquationNode extends EquationNode {

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property} productProperty - Property necessary for creating product input.
   * @param {Property} inputProperty - Input property.
   * @param {Property} activeInputProperty - Link to active input.
   *
   */
  constructor( stateProperty, multiplicandProperty, multiplierProperty, productProperty, inputProperty, activeInputProperty ) {
    super( multiplicandProperty, multiplierProperty, productProperty );

    // If the input value changes, it means that the user entered something, so put it in the appropriate equation node.
    inputProperty.lazyLink( inputString => {
      const inputStringToNumber = inputString ? Number( inputString ) : '';
      if ( activeInputProperty.get() === 'multiplicand' ) {
        multiplicandProperty.set( inputStringToNumber );
      }
      else if ( activeInputProperty.get() === 'multiplier' ) {
        multiplierProperty.set( inputStringToNumber );
      }
    } );

    const updateFocus = () => {
      if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
        this.multiplierInput.setFocus( activeInputProperty.value === 'multiplier' );
        this.multiplicandInput.setFocus( activeInputProperty.value === 'multiplicand' );
      }
      else {

        // Not awaiting user input, so neither input gets focus.
        this.multiplierInput.setFocus( false );
        this.multiplicandInput.setFocus( false );
      }
    };

    activeInputProperty.link( activeInput => {
      if ( activeInput === 'multiplier' ) {
        this.multiplierInput.clear();
      }
      else if ( activeInput === 'multiplicand' ) {
        this.multiplicandInput.clear();
      }
      this.multiplicandInput.setInteractiveAppearance( activeInput === 'multiplicand' );
      this.multiplierInput.setInteractiveAppearance( activeInput === 'multiplier' );
      updateFocus();
    } );

    stateProperty.link( state => {

      // Display a not equal sign if the user input and incorrect answer.
      this.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );

      updateFocus();
    } );
  }
}

arithmetic.register( 'DivideEquationNode', DivideEquationNode );

export default DivideEquationNode;