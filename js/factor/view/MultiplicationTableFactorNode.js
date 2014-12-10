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
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );
  var PushButtonModel = require( 'SUN/buttons/PushButtonModel' );

  /**
   * @param {ProblemModel} problemModel - Model for single task.
   * @param {Array} answerSheet - array that tracks which problems have and have not been answered.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   * @param {Function} submitAnswer - Function called to submit an answer
   *
   * @constructor
   */
  function MultiplicationTableFactorNode( problemModel, answerSheet, stateProperty, levelProperty, levelModels, submitAnswer ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet );

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
                self.setCellsToDefaultColor( levelProperty.value );
                if ( buttonModel.enabled ) {
                  self.setActiveRect( levelProperty.value, leftIndex, rightIndex );
                  button.hover();
                }
              } );

              // add 'down' listener
              buttonModel.property( 'down' ).onValue( true, function() {
                if ( buttonModel.enabled ) {
                  // disable button if correct answer
                  if ( leftIndex * rightIndex === problemModel.product ) {
                    buttonModel.enabled = false;
                  }

                  problemModel.multiplierLeft = leftIndex;
                  problemModel.multiplierRight = rightIndex;

                  // Submit the user's answer for checking.
                  submitAnswer();
                }
              } );

              // cancel hover for disabled button before next task
              stateProperty.lazyLink( function( state ) {
                if ( state === GameState.AWAITING_USER_INPUT && !buttonModel.enabled && buttonModel.over ) {
                  self.setCellsToDefaultColor( levelProperty.value );
                }
              } );
            }
          } );
        }
      } );
    } );

    stateProperty.link( function( newState, oldState ) {
      if ( ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) ) {
        // TODO: Why are the cells cleared here?  They should be cleared in the model, shouldn't they?
        self.setCellsToDefaultColor( levelProperty.value );
        self.enableButtons( levelProperty.value );
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {
    // enable all buttons for given level
    enableButtons: function( levelNumber ) {
      this._buttonModel[levelNumber].forEach( function( buttonModel ) {
        buttonModel.enabled = true;
      } );
    },
    // set 'active' state for all cell in given bounds and highlight multipliers
    setActiveRect: function( levelNumber, leftBound, rightBound ) {
      // highlight multipliers
      this.cells[levelNumber][0][rightBound].select();
      this.cells[levelNumber][leftBound][0].select();

      // set 'active' state for all cell in given bounds
      this.cells[levelNumber].forEach( function( multipliersLeft, leftIndex ) {
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
