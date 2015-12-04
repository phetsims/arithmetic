// Copyright 2014-2015, University of Colorado Boulder

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
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   * @constructor
   */
  function MultiplyScreenTableNode( problemModel, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, true );
    this.problemModel = problemModel;

    stateProperty.lazyLink( function( state ) {

      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // select the cells that correspond to the current problem
        self.updateCellColors( levelProperty.value );
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {

        // set all cells to default conditions when the table has been filled
        self.setCellsToDefaultColor( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplyScreenTableNode, {

    refreshLevel: function( level ) {
      this.clearCells( level );
      this.updateCellColors( level );
    },

    //TODO: Not sure about this name. Does it work for all types of these tables?
    updateCellColors: function( level ) {
      var self = this;
      this.setCellsToDefaultColor( level );

      // set view of selected multipliers
      this.cells[ level ][ 0 ][ this.problemModel.multiplier ].select();
      this.cells[ level ][ this.problemModel.multiplicand ][ 0 ].select();

      // set view of selected products
      this.cells[ level ].forEach( function( multiplicand, index ) {
        if ( index && index <= self.problemModel.multiplicand ) {
          multiplicand.forEach( function( cell, index ) {
            if ( index && index <= self.problemModel.multiplier ) {
              cell.select();
            }
          } );
        }
      } );
    }
  } );
} );
