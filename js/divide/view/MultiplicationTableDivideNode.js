// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table node for 'Divide' screen in 'Arithmetic' simulation.
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
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   *
   * @constructor
   */
  function MultiplicationTableDivideNode( problemModel, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, true );

    stateProperty.lazyLink( function( state ) {
      // set view for multiplication table after choosing multiplicand and multiplier
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cell colors prior to showing the problem
        self.setCellsToDefaultColor( levelProperty.value );

        // set select multipliers
        if ( problemModel.multiplicand ) {
          self.cells[ levelProperty.value ][ problemModel.multiplicand ][ 0 ].select();
        }
        else {
          self.cells[ levelProperty.value ][ 0 ][ problemModel.multiplier ].select();
        }
      }
      else if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
        // Make the cells that correspond to the answer change color.
        self.cells[ levelProperty.value ][ problemModel.multiplicand ][ 0 ].select();
        self.cells[ levelProperty.value ][ 0 ][ problemModel.multiplier ].select();
        for ( var multiplicand = 1; multiplicand <= problemModel.multiplicand; multiplicand++ ) {
          for ( var multiplier = 1; multiplier <= problemModel.multiplier; multiplier++ ) {
            self.cells[ levelProperty.value ][ multiplicand ][ multiplier ].select();
          }
        }
      }
      else if ( state === GameState.LEVEL_COMPLETED ) {
        // set all cells to default conditions when the table has been filled
        self.setCellsToDefaultColor( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableDivideNode );
} );
