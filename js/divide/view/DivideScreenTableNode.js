// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table node for 'Divide' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var inherit = require( 'PHET_CORE/inherit' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  /**
   * @param {ArithmeticModel} model
   * @constructor
   */
  function DivideScreenTableNode( model ) {
    var self = this;
    MultiplicationTableNode.call( this, model.levelProperty, model.stateProperty, model.levelModels, true );
    this.problemModel = model.problemModel;
    this.levelProperty = model.levelProperty;

    model.stateProperty.lazyLink( function( state ) {

      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cell colors prior to showing the problem
        self.setCellsToDefaultColor( self.levelProperty.value );

        // highlight the active multiplicand or multiplier
        if ( model.activeInputProperty.get() === 'multiplier' ) {
          self.cells[ self.levelProperty.value ][ self.problemModel.multiplicand ][ 0 ].setSelected();
        }
        else {
          assert && assert( model.activeInputProperty.get() === 'multiplicand' );
          self.cells[ self.levelProperty.value ][ 0 ][ self.problemModel.multiplier ].setSelected();
        }
      }
      else if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {

        // Make the cells that correspond to the answer change color.
        self.cells[ self.levelProperty.value ][ self.problemModel.multiplicand ][ 0 ].setSelected();
        self.cells[ self.levelProperty.value ][ 0 ][ self.problemModel.multiplier ].setSelected();
        for ( var multiplicand = 1; multiplicand <= self.problemModel.multiplicand; multiplicand++ ) {
          for ( var multiplier = 1; multiplier <= self.problemModel.multiplier; multiplier++ ) {
            self.cells[ self.levelProperty.value ][ multiplicand ][ multiplier ].setSelected();
          }
        }
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {

        // set all cells to default conditions when the table has been filled
        self.setCellsToDefaultColor( self.levelProperty.value );
      }
    } );
  }

  arithmetic.register( 'DivideScreenTableNode', DivideScreenTableNode );

  return inherit( MultiplicationTableNode, DivideScreenTableNode, {

    // @public, @override
    refreshLevel: function() {
      MultiplicationTableNode.prototype.refreshLevel.call( this, this.levelProperty.value );

      // highlight the appropriate header cell
      if ( this.problemModel.multiplicand ) {
        this.cells[ this.levelProperty.value ][ this.problemModel.multiplicand ][ 0 ].setSelected();
      }
      else {
        this.cells[ this.levelProperty.value ][ 0 ][ this.problemModel.multiplier ].setSelected();
      }
    }
  } );
} );
