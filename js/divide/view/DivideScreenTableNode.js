// Copyright 2014-2020, University of Colorado Boulder

/**
 * Multiplication table node for 'Divide' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import inherit from '../../../../phet-core/js/inherit.js';
import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import MultiplicationTableNode from '../../common/view/table/MultiplicationTableNode.js';

/**
 * @param {ArithmeticModel} model
 * @constructor
 */
function DivideScreenTableNode( model ) {
  const self = this;
  MultiplicationTableNode.call( this, model.levelNumberProperty, model.stateProperty, model.levelModels, true );
  this.problemModel = model.problemModel;
  this.levelNumberProperty = model.levelNumberProperty;

  model.stateProperty.lazyLink( function( state ) {

    // set view for multiplication table after choosing multiplicand and multiplier
    if ( state === GameState.AWAITING_USER_INPUT ) {

      // clear cell colors prior to showing the problem
      self.setCellsToDefaultColor( self.levelNumberProperty.value );

      // highlight the active multiplicand or multiplier
      if ( model.activeInputProperty.get() === 'multiplier' ) {
        self.cells[ self.levelNumberProperty.value ][ self.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
      }
      else {
        assert && assert( model.activeInputProperty.get() === 'multiplicand' );
        self.cells[ self.levelNumberProperty.value ][ 0 ][ self.problemModel.multiplierProperty.get() ].setSelected();
      }
    }
    else if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {

      // Make the cells that correspond to the answer change color.
      self.cells[ self.levelNumberProperty.value ][ self.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
      self.cells[ self.levelNumberProperty.value ][ 0 ][ self.problemModel.multiplierProperty.get() ].setSelected();
      for ( let multiplicand = 1; multiplicand <= self.problemModel.multiplicandProperty.get(); multiplicand++ ) {
        for ( let multiplier = 1; multiplier <= self.problemModel.multiplierProperty.get(); multiplier++ ) {
          self.cells[ self.levelNumberProperty.value ][ multiplicand ][ multiplier ].setSelected();
        }
      }
    }
    else if ( state === GameState.LEVEL_COMPLETED ) {

      // set all cells to default conditions when the table has been filled
      self.setCellsToDefaultColor( self.levelNumberProperty.value );
    }
  } );
}

arithmetic.register( 'DivideScreenTableNode', DivideScreenTableNode );

export default inherit( MultiplicationTableNode, DivideScreenTableNode, {

  // @public, @override
  refreshLevel: function() {
    MultiplicationTableNode.prototype.refreshLevel.call( this, this.levelNumberProperty.value );

    // highlight the appropriate header cell
    if ( this.problemModel.multiplicandProperty.get() ) {
      this.cells[ this.levelNumberProperty.value ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();
    }
    else {
      this.cells[ this.levelNumberProperty.value ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
    }
  }
} );