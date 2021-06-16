// Copyright 2014-2021, University of Colorado Boulder

/**
 * Multiplication table node for the 'Multiply' screen in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import MultiplicationTableNode from '../../common/view/table/MultiplicationTableNode.js';

class MultiplyScreenTableNode extends MultiplicationTableNode {

  /**
   * @param {ProblemModel} problemModel - Model for single multiplication problem.
   * @param {Property} levelNumberProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   */
  constructor( problemModel, stateProperty, levelNumberProperty, levelModels ) {
    super( levelNumberProperty, stateProperty, levelModels, true );
    this.problemModel = problemModel; // @private

    stateProperty.lazyLink( state => {

      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // select the cells that correspond to the current problem
        this.setCellAppearanceForProblem( levelNumberProperty.value );
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {

        // set all cells to default conditions when the table has been filled
        this.setCellsToDefaultColor( levelNumberProperty.value );
      }
    } );
  }

  // @public, @override
  refreshLevel( level ) {
    super.refreshLevel( level );
    this.setCellAppearanceForProblem( level );
  }

  // @private, set the appearance of the cells based on the currently presented problem
  setCellAppearanceForProblem( level ) {
    this.setCellsToDefaultColor( level );

    // set the header cells for this problem to the selected state
    this.cells[ level ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
    this.cells[ level ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();

    // create a rectangle of selected body cells with a width defined by the multiplier and a height defined by the
    // multplicand
    this.cells[ level ].forEach( ( multiplicand, index ) => {
      if ( index && index <= this.problemModel.multiplicandProperty.get() ) {
        multiplicand.forEach( ( cell, index ) => {
          if ( index && index <= this.problemModel.multiplierProperty.get() ) {
            cell.setSelected();
          }
        } );
      }
    } );
  }
}

arithmetic.register( 'MultiplyScreenTableNode', MultiplyScreenTableNode );

export default MultiplyScreenTableNode;