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
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * @param gameModel {Object} model for single task
   * @param levelProperty {Property} level difficulty property
   * @param levelModels {Array} array of descriptions for each level
   *
   * @constructor
   */
  function MultiplicationTableDivideNode( gameModel, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levelModels, gameModel );

    gameModel.property( 'state' ).lazyLink( function( state ) {
      // set view for multiplication table after choosing left and right multipliers
      if ( state === GAME_STATE.NEXT_TASK ) {

        // clear cells before game
        self.clearCells( levelProperty.value );

        // set select multipliers
        if ( gameModel.multiplierLeft ) {
          self.cells[levelProperty.value][gameModel.multiplierLeft][0].select();
        }
        else {
          self.cells[levelProperty.value][0][gameModel.multiplierRight].select();
        }
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableDivideNode );
} );
