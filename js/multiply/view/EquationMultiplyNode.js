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

  function EquationMultiplyNode( multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty ) {
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty );

    this.productInput.clear();
    this.productInput.enable();
    this.productInput.focus();
  }

  return inherit( EquationNode, EquationMultiplyNode );
} );
