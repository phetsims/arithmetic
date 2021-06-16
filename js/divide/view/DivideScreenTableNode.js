// Copyright 2014-2021, University of Colorado Boulder

/**
 * Multiplication table node for 'Divide' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import MultiplicationTableNode from '../../common/view/table/MultiplicationTableNode.js';

class DivideScreenTableNode extends MultiplicationTableNode {

  /**
   * @param {ArithmeticModel} model
   */
  constructor( model ) {
    super( model.levelNumberProperty, model.stateProperty, model.levelModels, true );
    this.problemModel = model.problemModel;
    this.levelNumberProperty = model.levelNumberProperty;

    model.stateProperty.lazyLink( state => {

      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cell colors prior to showing the problem
        this.setCellsToDefaultColor( this.levelNumberProperty.value );

        // highlight the active multiplicand or multiplier
        if ( model.activeInputProperty.get() === 'multiplier' ) {
          this.cells[ this.levelNumberProperty.value ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
        }
        else {
          assert && assert( model.activeInputProperty.get() === 'multiplicand' );
          this.cells[ this.levelNumberProperty.value ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
        }
      }
      else if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {

        // Make the cells that correspond to the answer change color.
        this.cells[ this.levelNumberProperty.value ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
        this.cells[ this.levelNumberProperty.value ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
        for ( let multiplicand = 1; multiplicand <= this.problemModel.multiplicandProperty.get(); multiplicand++ ) {
          for ( let multiplier = 1; multiplier <= this.problemModel.multiplierProperty.get(); multiplier++ ) {
            this.cells[ this.levelNumberProperty.value ][ multiplicand ][ multiplier ].setSelected();
          }
        }
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {

        // set all cells to default conditions when the table has been filled
        this.setCellsToDefaultColor( this.levelNumberProperty.value );
      }
    } );
  }

  // @public, @override
  refreshLevel() {
    super.refreshLevel( this.levelNumberProperty.value );

    // highlight the appropriate header cell
    if ( this.problemModel.multiplicandProperty.get() ) {
      this.cells[ this.levelNumberProperty.value ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
    }
    else {
      this.cells[ this.levelNumberProperty.value ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
    }
  }
}

arithmetic.register( 'DivideScreenTableNode', DivideScreenTableNode );

export default DivideScreenTableNode;