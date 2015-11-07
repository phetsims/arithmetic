// Copyright 2014, University of Colorado Boulder

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
  function MultiplyEquationNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, inputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, inputProperty );

    // The product is always the interactive part for this equation, so set up the appearance now.
    this.productInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( function( state ) {

      // Set the state of the product portion of the equation.
      if ( state === GameState.AWAITING_USER_INPUT ) {
        self.productInput.clear();
      }

      // The input should only have focus (i.e. blinking cursor) when awaiting input from the user.
      self.productInput.setFocus( state === GameState.AWAITING_USER_INPUT );

      // If the user got it wrong, the equation should depict a not equals sign.
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    } );
  }

  return inherit( EquationNode, MultiplyEquationNode );
} );
