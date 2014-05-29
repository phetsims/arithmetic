// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for "factor" screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  function MultiplicationTableFactorNode( gameModel, levelProperty, levels ) {
    MultiplicationTableNode.call( this, levelProperty, levels );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableFactorNode );
} );
