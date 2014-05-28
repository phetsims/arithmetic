// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for "multiply" screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  function MultiplicationTableDivideNode( gameModel, levelProperty, levels ) {
    MultiplicationTableNode.call( this, levelProperty, levels );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableDivideNode );
} );
