// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for the 'Multiply' screen in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  /**
   * @param {ProblemModel} problemModel - Model for single task.
   * @param {Array} answerSheet - array that tracks which problems have and have not been answered.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   * @constructor
   */
  function MultiplicationTableMultiplyNode( problemModel, answerSheet, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet );

    stateProperty.lazyLink( function( state ) {
      // set view for multiplication table after choosing left and right multipliers
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cells before game
        self.clearCells( levelProperty.value );

        // set view of selected multipliers
        self.cells[levelProperty.value][0][problemModel.multiplierRight].select();
        self.cells[levelProperty.value][problemModel.multiplierLeft][0].select();

        // set view of selected products
        self.cells[levelProperty.value].forEach( function( multiplierLeft, index ) {
          if ( index && index <= problemModel.multiplierLeft ) {
            multiplierLeft.forEach( function( cell, index ) {
              if ( index && index <= problemModel.multiplierRight ) {
                cell.select();
              }
            } );
          }
        } );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableMultiplyNode );
} );
