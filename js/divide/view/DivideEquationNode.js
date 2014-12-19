// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'divide' screen in the Arithmetic simulation.
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
   * @param {Property} productProperty - Property necessary for creating product input.
   * @param {Property} inputProperty - Input property.
   * @param {Property} activeInputProperty - Link to active input.
   *
   * @constructor
   */
  function DivideEquationNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty, activeInputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty );

    // If the input value changes, it means that the user entered something, so put it in the appropriate equation node.
    inputProperty.lazyLink( function( inputString ) {
      if ( activeInputProperty.value === 'left' ) {
        multiplierLeftProperty.value = inputString;
      }
      else if ( activeInputProperty.value === 'right' ) {
        multiplierRightProperty.value = inputString;
      }
    } );

    function updateFocus() {
      if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
        self.multiplierRightInput.setFocus( activeInputProperty.value === 'right' );
        self.multiplierLeftInput.setFocus( activeInputProperty.value === 'left' );
      }
      else {
        // Not awaiting user input, so neither input gets focus.
        self.multiplierRightInput.setFocus( false );
        self.multiplierLeftInput.setFocus( false );
      }
    }

    activeInputProperty.link( function( activeInput ) {
      if ( activeInput === 'right' ) {
        self.multiplierRightInput.clear();
      }
      else if ( activeInput === 'left' ) {
        self.multiplierLeftInput.clear();
      }
      self.multiplierLeftInput.setInteractiveAppearance( activeInput === 'left' );
      self.multiplierRightInput.setInteractiveAppearance( activeInput === 'right' );
      updateFocus();
    } );

    stateProperty.link( function( state ) {

      // Display a not equal sign if the user input and incorrect answer.
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );

      updateFocus();
    } );
  }

  return inherit( EquationNode, DivideEquationNode );
} );
