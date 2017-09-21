// Copyright 2014-2016, University of Colorado Boulder

/**
 * Equation node for 'factor' screen in 'Arithmetic' simulation.
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
   * @constructor
   */
  function FactorEquationNode( stateProperty, multiplicandProperty, multiplierProperty, productProperty ) {
    var self = this;
    EquationNode.call( this, multiplicandProperty, multiplierProperty, productProperty );

    // The two multipliers are always interactive in the factor equation, so set this up now.
    this.multiplicandInput.setInteractiveAppearance( true );
    this.multiplierInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( function( state ) {
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // Reset any previous answers from the user.
        multiplicandProperty.reset();
        multiplierProperty.reset();

        // Show the placeholders
        self.multiplicandInput.setPlaceholder();
        self.multiplierInput.setPlaceholder();
      }
    } );
  }

  arithmetic.register( 'FactorEquationNode', FactorEquationNode );

  return inherit( EquationNode, FactorEquationNode );
} );
