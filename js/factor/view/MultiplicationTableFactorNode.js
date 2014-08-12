// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for "factor" screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var ButtonListener = require( 'SUN/buttons/ButtonListener' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );
  var PushButtonModel = require( 'SUN/buttons/PushButtonModel' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * @param gameModel {Object} model for single task
   * @param levelProperty {Property} level difficulty property
   * @param levelDescriptions {Array} array of descriptions for each level
   *
   * @constructor
   */
  function MultiplicationTableFactorNode( gameModel, levelProperty, levelDescriptions ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levelDescriptions, gameModel );

    this._buttonModel = [];

    // add 'hover' and 'down' listeners for each cell in table
    this.cells.forEach( function( tableForLevel, levelIndex ) {

      self._buttonModel[levelIndex] = [];

      tableForLevel.forEach( function( leftMultipliers, leftIndex ) {

        // skip zero-index because it's column with multipliers
        if ( leftIndex ) {

          leftMultipliers.forEach( function( button, rightIndex ) {
            var buttonModel;
            var buttonListener;

            // skip zero-index because it's column with multipliers
            if ( rightIndex ) {
              buttonModel = new PushButtonModel();
              buttonListener = new ButtonListener( buttonModel );
              button.addInputListener( buttonListener );
              button.cursor = 'pointer';

              // store model for next execution
              self._buttonModel[levelIndex].push( buttonModel );

              // add 'hover' listener
              buttonModel.property( 'over' ).onValue( true, function() {
                self.clearCells( levelProperty.value );
                if ( buttonModel.enabled ) {
                  self.setActiveRect( levelProperty.value, leftIndex, rightIndex );
                  button.hover();
                }
              } );

              // add 'down' listener
              buttonModel.property( 'down' ).onValue( true, function() {
                if ( buttonModel.enabled ) {
                  // disable button if correct answer
                  if ( leftIndex * rightIndex === gameModel.product ) {
                    buttonModel.enabled = false;
                  }

                  gameModel.multiplierLeft = leftIndex;
                  gameModel.multiplierRight = rightIndex;

                  gameModel.state = GAME_STATE.EQUATION_FILLED;
                }
              } );

              // cancel hover for disabled button before next task
              gameModel.property( 'state' ).lazyLink( function( state ) {
                if ( state === GAME_STATE.NEXT_TASK && !buttonModel.enabled && buttonModel.over ) {
                  self.clearCells( levelProperty.value );
                }
              } );
            }
          } );
        }
      } );
    } );

    gameModel.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.LEVEL_INIT ) {
        self.clearCells( levelProperty.value );
        self.enableButtons( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {
    // enable all buttons for given level
    enableButtons: function( levelNumber ) {
      this._buttonModel[levelNumber - 1].forEach( function( buttonModel ) {
        buttonModel.enabled = true;
      } );
    },
    // set 'active' state for all cell in given bounds and highlight multipliers
    setActiveRect: function( levelNumber, leftBound, rightBound ) {
      // highlight multipliers
      this.cells[levelNumber - 1][0][rightBound].select();
      this.cells[levelNumber - 1][leftBound][0].select();

      // set 'active' state for all cell in given bounds
      this.cells[levelNumber - 1].forEach( function( multipliersLeft, leftIndex ) {
        if ( leftIndex && leftIndex <= leftBound ) {
          multipliersLeft.forEach( function( cell, rightIndex ) {
            if ( rightIndex && rightIndex <= rightBound ) {
              cell.active();
            }
          } );
        }
      } );
    }
  } );
} );
