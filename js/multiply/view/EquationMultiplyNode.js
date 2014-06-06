// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'multiply' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function EquationMultiplyNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, inputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, inputProperty );

    stateProperty.link( function( state ) {
      if ( state === GAME_STATE.START ) {
        self.productInput.clear();
        self.productInput.focus();
        inputProperty.value = '';
      }
    } );
  }

  return inherit( EquationNode, EquationMultiplyNode );
} );
