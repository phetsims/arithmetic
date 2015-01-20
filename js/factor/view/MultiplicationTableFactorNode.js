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
    var CellInteractionListener = require( 'ARITHMETIC/factor/view/CellInteractionListener' );
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
                  if ( stateProperty.value === GameState.AWAITING_USER_INPUT ) {
                    self.setCellsToDefaultColor( levelProperty.value );
                    if ( cellListener.enabled ) {
                      self.setSelectedRect( levelProperty.value, leftIndex, rightIndex );
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
                cellListener.property( 'touched' ).onValue( true, updateHover );

                // When the user presses the mouse button, record it.
                cellListener.on( 'mouseDown', function() {
                  console.log( 'Mouse Down event received.' );
                  self.mouseDownCell = cell;
                  self.activeButton = cell;
                  updateHover();
                } );

                // Define a function for submitting an answer that can be used by both mouse and the touch handlers.
                var createAndSubmitAnswer = function() {

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
                    cellListener.enabled = false;
                  }

                  // Submit the user's answer for checking.
                  submitAnswer();
                };

                // When the user releases the mouse button, check that it's the same cell where the mouse down
                // occurred, and fire if so.
                cellListener.on( 'mouseUp', function() {
                  console.log( 'Mouse up event received.' );
                  if ( cellListener.enabled && self.mouseDownCell === cell ) {
                    createAndSubmitAnswer();
                  }
                } );

                // Add listener for handling the event where the user was touching and lifts their finger.
                cellListener.on( 'touchUp', function() {
                  console.log( 'Touch up event received.' );
                  // It takes two touch up events in a row from the same cell to submit an answer.
                  if ( self.touchUpCell === cell ) {
                    createAndSubmitAnswer();
                  }
                  else {
                    self.touchUpCell = cell;
                  }
                } );

                // cancel hover for disabled button before next task
                stateProperty.lazyLink( function( state ) {
                  if ( state === GameState.AWAITING_USER_INPUT && !cellListener.enabled ) {
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
          // TODO: Why are the cells defaulted here?  Is this still necessary given the other changes that have been made?
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

      // TODO: For debug, remove when factor touch behavior is debugged.
      var Text = require( 'SCENERY/nodes/Text' );
      var PhetFont = require( 'SCENERY_PHET/PhetFont' );
      window.phet.debugText = new Text( 'blah blah', { font: new PhetFont( 20 ), top: 320 } );
      this.addChild( window.phet.debugText );
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
