// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node for Factor screen in the Arithmetic simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 * TODO: I (jblanco) feel like the terms and naming in this file could use some work.  Why are the cells called
 * buttons?  Because they're interactive?  Seems odd.  Also, the cell states of active and selected seems like it
 * doesn't quite match what is going on.
 *
 */
define( function( require ) {
    'use strict';

    // modules
    var ButtonListener = require( 'SUN/buttons/ButtonListener' );
    var ButtonListenerVariant = require( 'ARITHMETIC/factor/view/ButtonListenerVariant' );
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
      MultiplicationTableNode.call( this, levelProperty, stateProperty, levelModels, answerSheet, false );

      this.buttonModels = []; // @private
      this.activeButton = null; // @private

      // add 'hover' and 'down' listeners for each cell in table
      this.cells.forEach( function( tableForLevel, levelIndex ) {

        self.buttonModels[levelIndex] = [];

        tableForLevel.forEach( function( leftMultipliers, leftIndex ) {

          // skip zero-index because it's the header column
          if ( leftIndex ) {

            leftMultipliers.forEach( function( button, rightIndex ) {
              var buttonModel;
              var buttonModel2;
              var buttonListener;
              var buttonListener2;

              // skip zero-index because it's the header row
              if ( rightIndex ) {
                buttonModel = new PushButtonModel();
                buttonModel2 = new PushButtonModel();
                buttonListener = new ButtonListener( buttonModel );
                buttonListener2 = new ButtonListenerVariant( buttonModel2 );
                button.addInputListener( buttonListener );
                button.addInputListener( buttonListener2 );
                button.cursor = 'pointer';

                // store model for next execution
//                self.buttonModel[levelIndex].push( buttonModel );
                self.buttonModels[levelIndex].push( buttonModel2 );

                // add 'hover' listener
//                buttonModel.property( 'over' ).onValue( true, function() {
//                  if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
//                    self.setCellsToDefaultColor( levelProperty.value );
//                    if ( buttonModel.enabled ) {
//                      self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
//                      button.hover();
//                      if ( self.activeButton !== button ){
//                        buttonListener2.clearArmedByTouch();
//                      }
//                      self.activeButton = button;
//                    }
//                    else {
//                      self.activeButton = null;
//                    }
//                  }
//                } );

                // add 'hover' listener
                buttonModel2.property( 'over' ).onValue( true, function() {
                  if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
                    self.setCellsToDefaultColor( levelProperty.value );
                    if ( buttonModel2.enabled ) {
                      self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
                      button.hover();
                      if ( self.activeButton !== button ) {
                        buttonListener2.clearArmedByTouch();
                      }
                      self.activeButton = button;
                    }
                    else {
                      self.activeButton = null;
                    }
                  }
                } );

                // add 'down' listener
//                buttonModel.property( 'down' ).onValue( true, function() {
//                    if ( buttonModel.enabled ) {
//
//                      self.activeButton = button;
//
//                      // If this answer is being submitted after getting the problem wrong, the selected region must be
//                      // set (in other cases, this region is set as the user moves the mouse over the table).
//                      if ( stateProperty.value === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
//                        self.setCellsToDefaultColor( levelProperty.value );
//                        self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
//                      }
//
//                      // Record the user's answer.
//                      problemModel.multiplierLeft = leftIndex;
//                      problemModel.multiplierRight = rightIndex;
//
//                      // Disable this button if the user's answer is correct.
//                      if ( leftIndex * rightIndex === problemModel.product ) {
//                        buttonModel.enabled = false;
//                      }
//
//                      // Submit the user's answer for checking.
//                      submitAnswer();
//                    }
//                  }
//                );

                // add 'down' listener
                buttonModel2.property( 'down' ).onValue( true, function() {
                    if ( buttonModel2.enabled ) {

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

                      // Disable this button if the user's answer is correct.
                      if ( leftIndex * rightIndex === problemModel.product ) {
                        buttonModel.enabled = false;
                        buttonModel2.enabled = false;
                      }

                      // Submit the user's answer for checking.
                      submitAnswer();
                    }
                  }
                );

                // cancel hover for disabled button before next task
                stateProperty.lazyLink( function( state ) {
//                  if ( state === GameState.AWAITING_USER_INPUT && !buttonModel.enabled && buttonModel.over ) {
//                    self.setCellsToDefaultColor( levelProperty.value );
//                  }
                  if ( state === GameState.AWAITING_USER_INPUT && !buttonModel2.enabled ) {
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

      // @private, enable all buttons for given level
      enableButtons: function( levelNumber ) {
        this.buttonModels[levelNumber].forEach( function( buttonModel ) {
          buttonModel.enabled = true;
        } );
      },

      // @private, set 'selected' state for all cells in given bounds and highlight the multipliers (i.e. header cells)
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
      },

      // @public
      refreshLevel: function( level ) {
        MultiplicationTableNode.prototype.refreshLevel.call( this, level );
        this.enableButtons( level );
      }
    } );
  }
);
