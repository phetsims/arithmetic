// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'factor' screen in 'Arithmetic' simulation.
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
   *
   * @constructor
   */
  function FactorEquationNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty );

    // The two multipliers are always interactive in the factor equation, so set this up now.
    this.multiplierLeftInput.setInteractiveAppearance( true );
    this.multiplierRightInput.setInteractiveAppearance( true );

    // Update contents and focus at the state changes.
    stateProperty.link( function( state ) {
      self.setShowEqual( state !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // Reset any previous answers from the user.
        multiplierLeftProperty.reset();
        multiplierRightProperty.reset();

        // Show the placeholders
        self.multiplierLeftInput.setPlaceholder();
        self.multiplierRightInput.setPlaceholder();
      }
    } );
  }

  return inherit( EquationNode, FactorEquationNode );
} );
