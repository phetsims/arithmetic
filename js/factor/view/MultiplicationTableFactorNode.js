// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for Factor screen in the Arithmetic simulation.
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

      this.buttonModel = []; // @private
      this.activeButton = null; // @private

      // add 'hover' and 'down' listeners for each cell in table
      this.cells.forEach( function( tableForLevel, levelIndex ) {

        self.buttonModel[levelIndex] = [];

        tableForLevel.forEach( function( leftMultipliers, leftIndex ) {

          // skip zero-index because it's the header column
          if ( leftIndex ) {

            leftMultipliers.forEach( function( button, rightIndex ) {
              var buttonModel;
              var buttonListener;

              // skip zero-index because it's the header row
              if ( rightIndex ) {
                buttonModel = new PushButtonModel();
                buttonListener = new ButtonListener( buttonModel );
                button.addInputListener( buttonListener );
                button.cursor = 'pointer';

                // store model for next execution
                self.buttonModel[levelIndex].push( buttonModel );

                // add 'hover' listener
                buttonModel.property( 'over' ).onValue( true, function() {
                  if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
                    self.setCellsToDefaultColor( levelProperty.value );
                    if ( buttonModel.enabled ) {
                      self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
                      button.hover();
                      self.activeButton = button;
                    }
                    else {
                      self.activeButton = null;
                    }
                  }
                } );

                // add 'down' listener
                buttonModel.property( 'down' ).onValue( true, function() {
                    if ( buttonModel.enabled ) {

                      self.activeButton = button;

                      // If this answer is being submitted after getting the problem wrong, the selected region must be
                      // set (in other cases, this region is set as the user moves the mouse over the table).
                      if ( stateProperty.value === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                        self.setCellsToDefaultColor( levelProperty.value );
                        self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
                      }

                      // Record the user's answer.
                      problemModel.multiplierLeft = leftIndex;
                      problemModel.multiplierRight = rightIndex;
                      console.log( 'leftIndex = ' + leftIndex );
                      console.log( 'rightIndex = ' + rightIndex );

                      // Disable this button if the user's answer is correct.
                      if ( leftIndex * rightIndex === problemModel.product ) {
                        buttonModel.enabled = false;
                      }

                      // Submit the user's answer for checking.
                      submitAnswer();
                    }
                  }
                );

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
        if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
          // TODO: Why are the cells defaulted here?  Is this necessary given the other changes that have been made?
          self.setCellsToDefaultColor( levelProperty.value );
          self.enableButtons( levelProperty.value );
        }
        if ( ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
               newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) &&
             self.activeButton !== null ) {
          // Cancel hover when showing feedback
          self.activeButton.select();
        }
        if ( oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK && newState === GameState.AWAITING_USER_INPUT ) {
          // clear previously selected region
          self.setCellsToDefaultColor( levelProperty.value );
        }
      } );
    }

    return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {

      // enable all buttons for given level
      enableButtons: function( levelNumber ) {
        this.buttonModel[levelNumber].forEach( function( buttonModel ) {
          buttonModel.enabled = true;
        } );
      },

      // TODO: Replacing this with setSelectedRect on 12/15/2014, remove if the resulting change is approved.
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
      },

      // set 'selected' state for all cell in given bounds and highlight multipliers
      setSelectedRect: function( levelNumber, leftBound, rightBound ) {
        // highlight multipliers
        this.cells[levelNumber][0][rightBound].select();
        this.cells[levelNumber][leftBound][0].select();

        // set 'selected' state for all cell in given bounds
        this.cells[levelNumber].forEach( function( multipliersLeft, leftIndex ) {
          if ( leftIndex && leftIndex <= leftBound ) {
            multipliersLeft.forEach( function( cell, rightIndex ) {
              if ( rightIndex && rightIndex <= rightBound ) {
                cell.select();
              }
            } );
          }
        } );
      }
    } );
  }
)
;
