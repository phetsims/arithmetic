// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for "multiply" screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  function MultiplicationTableDivideNode( gameModel, levelProperty, levels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levels, gameModel );

    // set left multiplier selected
    gameModel.property( 'multiplierLeft' ).lazyLink( function() {
      if ( self.cells[levelProperty.value - 1] ) {
        self.cells[levelProperty.value - 1][gameModel.multiplierLeft][0].select();
      }
    } );

    // set right multiplier selected
    gameModel.property( 'multiplierRight' ).lazyLink( function() {
      if ( self.cells[levelProperty.value - 1] ) {
        self.cells[levelProperty.value - 1][0][gameModel.multiplierRight].select();
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableDivideNode );
} );
