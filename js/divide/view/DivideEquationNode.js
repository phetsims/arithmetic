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

    activeInputProperty.link( function( activeInput ) {
      if ( activeInput === 'right' ) {
        self.multiplierRightInput.clear();
      }
      else if ( activeInput === 'left' ) {
        self.multiplierLeftInput.clear();
      }
    } );

    inputProperty.lazyLink( function( inputString ) {
      if ( activeInputProperty.value === 'left' ) {
        multiplierLeftProperty.value = inputString;
      }
      else if ( activeInputProperty.value === 'right' ) {
        multiplierRightProperty.value = inputString;
      }
    } );

    stateProperty.link( function( state ) {
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
      if ( state === GameState.AWAITING_USER_INPUT ) {
        if ( activeInputProperty.value === 'left' ) {
          self.multiplierLeftInput.focus();
        }
        else {
          self.multiplierRightInput.focus();
        }
      }
      else {
        self.multiplierLeftInput.unfocus();
        self.multiplierRightInput.unfocus();
      }
    } );
  }

  return inherit( EquationNode, DivideEquationNode );
} );
