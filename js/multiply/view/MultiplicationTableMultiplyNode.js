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

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function MultiplicationTableMultiplyNode( gameModel, levelProperty, levels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levels, gameModel );

    gameModel.property( 'state' ).lazyLink( function( state ) {
      // set view for multiplication table after choosing left and right multipliers
      if ( state === GAME_STATE.NEXT_TASK ) {

        // set select multipliers
        self.cells[levelProperty.value - 1][0][gameModel.multiplierRight].select();
        self.cells[levelProperty.value - 1][gameModel.multiplierLeft][0].select();

        // set select products
        self.cells[levelProperty.value - 1].forEach( function( multiplierLeft, index ) {
          if ( index && index <= gameModel.multiplierLeft ) {
            multiplierLeft.forEach( function( cell, index ) {
              if ( index && index <= gameModel.multiplierRight ) {
                cell.select();
              }
            } );
          }
        } );
      }
      // clear cells before game state
      else if ( state === GAME_STATE.START ) {
        self.clearCells( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableMultiplyNode );
} );
