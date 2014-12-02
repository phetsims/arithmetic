// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for 'divide' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  /**
   * @param {ArithmeticModel} problemModel - model for single task.
   * @param {Array} answerSheet - array that tracks which problems have and have not been answered.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   * @constructor
   */
  function MultiplicationTableDivideNode( problemModel, answerSheet, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet );

    stateProperty.lazyLink( function( state ) {
      // set view for multiplication table after choosing left and right multipliers
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cells before game
        self.clearCells( levelProperty.value );

        // set select multipliers
        if ( problemModel.multiplierLeft ) {
          self.cells[levelProperty.value][problemModel.multiplierLeft][0].select();
        }
        else {
          self.cells[levelProperty.value][0][problemModel.multiplierRight].select();
        }
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableDivideNode );
} );
