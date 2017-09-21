// Copyright 2014-2016, University of Colorado Boulder

/**
 * Equation node for 'divide' screen in the Arithmetic simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {Property} stateProperty - State of game property.
   * @param {Property} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property} productProperty - Property necessary for creating product input.
   * @param {Property} inputProperty - Input property.
   * @param {Property} activeInputProperty - Link to active input.
   *
   * @constructor
   */
  function DivideEquationNode( stateProperty, multiplicandProperty, multiplierProperty, productProperty, inputProperty, activeInputProperty ) {
    var self = this;
    EquationNode.call( this, multiplicandProperty, multiplierProperty, productProperty );

    // If the input value changes, it means that the user entered something, so put it in the appropriate equation node.
    inputProperty.lazyLink( function( inputString ) {
      if ( activeInputProperty.get() === 'multiplicand' ) {
        multiplicandProperty.set( parseInt( inputString, 10 ) );
      }
      else if ( activeInputProperty.get() === 'multiplier' ) {
        multiplierProperty.set( parseInt( inputString, 10 ) );
      }
    } );

    function updateFocus() {
      if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
        self.multiplierInput.setFocus( activeInputProperty.value === 'multiplier' );
        self.multiplicandInput.setFocus( activeInputProperty.value === 'multiplicand' );
      }
      else {
        // Not awaiting user input, so neither input gets focus.
        self.multiplierInput.setFocus( false );
        self.multiplicandInput.setFocus( false );
      }
    }

    activeInputProperty.link( function( activeInput ) {
      if ( activeInput === 'multiplier' ) {
        self.multiplierInput.clear();
      }
      else if ( activeInput === 'multiplicand' ) {
        self.multiplicandInput.clear();
      }
      self.multiplicandInput.setInteractiveAppearance( activeInput === 'multiplicand' );
      self.multiplierInput.setInteractiveAppearance( activeInput === 'multiplier' );
      updateFocus();
    } );

    stateProperty.link( function( state ) {

      // Display a not equal sign if the user input and incorrect answer.
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );

      updateFocus();
    } );
  }

  arithmetic.register( 'DivideEquationNode', DivideEquationNode );

  return inherit( EquationNode, DivideEquationNode );
} );
