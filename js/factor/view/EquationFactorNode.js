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
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function EquationFactorNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty );

    stateProperty.link( function( state ) {
      if ( state === GAME_STATE.START ) {
        self.multiplierLeftInput.reset();
        self.multiplierRightInput.reset();
      }
    } );
  }

  return inherit( EquationNode, EquationFactorNode );
} );
