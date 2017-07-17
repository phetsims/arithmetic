// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table node for the 'Multiply' screen in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
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
    this.problemModel = problemModel; // @private

    stateProperty.lazyLink( function( state ) {

      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // select the cells that correspond to the current problem
        self.setCellAppearanceForProblem( levelProperty.value );
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {

        // set all cells to default conditions when the table has been filled
        self.setCellsToDefaultColor( levelProperty.value );
      }
    } );
  }

  arithmetic.register( 'MultiplyScreenTableNode', MultiplyScreenTableNode );

  return inherit( MultiplicationTableNode, MultiplyScreenTableNode, {

    // @public, @override
    refreshLevel: function( level ) {
      MultiplicationTableNode.prototype.refreshLevel.call( this, level );
      this.setCellAppearanceForProblem( level );
    },

    // @private, set the appearance of the cells based on the currently presented problem
    setCellAppearanceForProblem: function( level ) {
      var self = this;
      this.setCellsToDefaultColor( level );

      // set the header cells for this problem to the selected state
      this.cells[ level ][ 0 ][ this.problemModel.multiplierProperty.get() ].setSelected();
      this.cells[ level ][ this.problemModel.multiplicandProperty.get() ][ 0 ].setSelected();

      // create a rectangle of selected body cells with a width defined by the multiplier and a height defined by the
      // multplicand
      this.cells[ level ].forEach( function( multiplicand, index ) {
        if ( index && index <= self.problemModel.multiplicandProperty.get() ) {
          multiplicand.forEach( function( cell, index ) {
            if ( index && index <= self.problemModel.multiplierProperty.get() ) {
              cell.setSelected();
            }
          } );
        }
      } );
    }
  } );
} );
