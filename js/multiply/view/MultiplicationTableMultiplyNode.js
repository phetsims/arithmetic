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
   * @param {ProblemModel} problemModel - Model for single multiplication problem.
   * @param {Array} answerSheet - array that tracks which problems have and have not been answered.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   * @constructor
   */
  function MultiplicationTableMultiplyNode( problemModel, answerSheet, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet, true );
    this.problemModel = problemModel;

    stateProperty.lazyLink( function( state ) {

      // set view for multiplication table after choosing left and right multipliers
      if ( state === GameState.AWAITING_USER_INPUT ) {
        self.updateCellColors( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableMultiplyNode, {

    refreshLevel: function( level ) {
      this.clearCells( level );
      this.updateCellColors( level );
    },

    //TODO: Not sure about this name. Does it work for all types of these tables?
    updateCellColors: function( level ) {
      var self = this;
      this.setCellsToDefaultColor( level );

      // set view of selected multipliers
      this.cells[ level ][ 0 ][ this.problemModel.multiplierRight ].select();
      this.cells[ level ][ this.problemModel.multiplierLeft ][ 0 ].select();

      // set view of selected products
      this.cells[ level ].forEach( function( multiplierLeft, index ) {
        if ( index && index <= self.problemModel.multiplierLeft ) {
          multiplierLeft.forEach( function( cell, index ) {
            if ( index && index <= self.problemModel.multiplierRight ) {
              cell.select();
            }
          } );
        }
      } );
    }
  } );
} );
