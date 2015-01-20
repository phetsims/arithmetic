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
    var CellInteractionListener = require( 'ARITHMETIC/factor/view/CellInteractionListener' );
    var GameState = require( 'ARITHMETIC/common/model/GameState' );
    var inherit = require( 'PHET_CORE/inherit' );
    var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

    /**
     * @param {FactorModel} model - main model class for the factor screen
     *
     * @constructor
     */
    function MultiplicationTableFactorNode( model ) {
      var self = this;
      MultiplicationTableNode.call( this, model.property( 'level' ), model.property( 'state' ), model.levelModels, model.answerSheet, false );

      this.cellListeners = []; // @private
      this.activeButton = null; // @private
      this.mouseDownCell = null; // @private

      // add 'hover' and 'down' listeners for each cell in table
      this.cells.forEach( function( tableForLevel, levelIndex ) {

        self.cellListeners[ levelIndex ] = [];

        tableForLevel.forEach( function( leftMultipliers, leftIndex ) {

          // skip zero-index because it's the header column
          if ( leftIndex ) {

            leftMultipliers.forEach( function( cell, rightIndex ) {
              var cellListener;

              // skip zero-index because it's the header row
              if ( rightIndex ) {
                cellListener = new CellInteractionListener();
                cell.addInputListener( cellListener );
                cell.cursor = 'pointer';

                // store cell listeners for each level
                self.cellListeners[ levelIndex ].push( cellListener );

                var updateHover = function() {
                  if ( model.state === GameState.AWAITING_USER_INPUT ) {
                    self.setCellsToDefaultColor( model.level );
                    if ( cellListener.enabled ) {
                      self.setSelectedRect( model.level, leftIndex, rightIndex );
                      cell.hover();
                      self.activeButton = cell;
                    }
                    else {
                      self.activeButton = null;
                    }
                  }
                };

                // add 'hover' listeners
                cellListener.property( 'mouseOver' ).onValue( true, updateHover );
                cellListener.property( 'touched' ).onValue( true, function() {
                  if ( model.state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                    // The user has re-touched the grid after submitting an incorrect answer, so assume they want to retry.
                    model.retryProblem();
                  }
                  updateHover();
                } );

                // When the user presses the mouse button, record it.
                cellListener.on( 'mouseDown', function() {
                  self.mouseDownCell = cell;
                  self.activeButton = cell;
                  updateHover();
                } );

                // Define a function for submitting an answer that can be used by both mouse and the touch handlers.
                var submitAnswer = function() {

                  // If this answer is being submitted after getting the problem wrong, the selected region must be
                  // set (in other cases, this region is set as the user moves the mouse over the table).
                  if ( model.state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                    self.setCellsToDefaultColor( model.level );
                    self.setSelectedRect( model.level, leftIndex, rightIndex );
                  }

                  // Record the user's answer.
                  model.problemModel.multiplierLeft = leftIndex;
                  model.problemModel.multiplierRight = rightIndex;

                  // Disable this button if the user's answer is correct.
                  if ( leftIndex * rightIndex === model.problemModel.product ) {
                    cellListener.enabled = false;
                  }

                  // Submit the user's answer for checking.
                  model.submitAnswer();
                };

                // When the user releases the mouse button, check that it's the same cell where the mouse down
                // occurred, and fire if so.
                cellListener.on( 'mouseUp', function() {
                  if ( cellListener.enabled && self.mouseDownCell === cell ) {
                    submitAnswer();
                  }
                } );

                // Add listener for handling the event where the user was touching and lifts their finger.
                cellListener.on( 'touchUp', function() {
                  // It takes two touchUp events in a row from the same cell to submit an answer.
                  if ( cellListener.enabled ) {
                    if ( self.touchUpCell === cell ) {
                      submitAnswer();
                    }
                    else {
                      self.touchUpCell = cell;
                    }
                  }
                } );

                // cancel hover for disabled button before next task
                model.stateProperty.lazyLink( function( state ) {
                  if ( state === GameState.AWAITING_USER_INPUT && !cellListener.enabled ) {
                    self.setCellsToDefaultColor( model.level );
                  }
                } );
              }
            } );
          }
        } );
      } );

      model.stateProperty.link( function( newState, oldState ) {
        if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
          // TODO: Why are the cells defaulted here?  Is this still necessary given the other changes that have been made?
          self.setCellsToDefaultColor( model.level );
          self.enableButtons( model.level );
        }
        if ( ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
               newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) &&
             self.activeButton !== null ) {
          // Cancel hover when showing feedback
          self.activeButton.select();
        }
        if ( oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK && newState === GameState.AWAITING_USER_INPUT ) {
          // clear previously selected region
          self.setCellsToDefaultColor( model.level );
        }
      } );
    }

    return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {

      // @private, enable all buttons for given level
      enableButtons: function( levelNumber ) {
        this.cellListeners[ levelNumber ].forEach( function( cellListener ) {
          cellListener.enabled = true;
        } );
      },

      // @private, set 'selected' state for all cells in given bounds and highlight the multipliers (i.e. header cells)
      setSelectedRect: function( levelNumber, leftBound, rightBound ) {
        // highlight multipliers
        this.cells[ levelNumber ][ 0 ][ rightBound ].select();
        this.cells[ levelNumber ][ leftBound ][ 0 ].select();

        // set 'selected' state for all cell in given bounds
        this.cells[ levelNumber ].forEach( function( multipliersLeft, leftIndex ) {
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
