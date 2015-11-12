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
   * @param {Array} answerSheet - array that tracks which problems have and have not been answered.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   * answer appear to fly into the table.
   *
   * @constructor
   */
  function MultiplicationTableDivideNode( problemModel, answerSheet, stateProperty, levelProperty, levelModels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet, true );

    stateProperty.lazyLink( function( state ) {
      // set view for multiplication table after choosing left and right multipliers
      if ( state === GameState.AWAITING_USER_INPUT ) {

        // clear cell colors prior to showing the problem
        self.setCellsToDefaultColor( levelProperty.value );

        // set select multipliers
        if ( problemModel.multiplierLeft ) {
          self.cells[ levelProperty.value ][ problemModel.multiplierLeft ][ 0 ].select();
        }
        else {
          self.cells[ levelProperty.value ][ 0 ][ problemModel.multiplierRight ].select();
        }
      }
      else if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
        // Make the cells that correspond to the answer change color.
        self.cells[ levelProperty.value ][ problemModel.multiplierLeft ][ 0 ].select();
        self.cells[ levelProperty.value ][ 0 ][ problemModel.multiplierRight ].select();
        for ( var leftMultiplier = 1; leftMultiplier <= problemModel.multiplierLeft; leftMultiplier++ ) {
          for ( var rightMultiplier = 1; rightMultiplier <= problemModel.multiplierRight; rightMultiplier++ ) {
            self.cells[ levelProperty.value ][ leftMultiplier ][ rightMultiplier ].select();
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
