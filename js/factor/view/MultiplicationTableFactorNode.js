// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table node for 'Factor' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 * TODO: I (jblanco) feel like the terms and naming in this file could use some work.  Why are the cells called
 * buttons?  Because they're interactive?  Seems odd.  Also, the cell states of active and selected seems like it
 * doesn't quite match what is going on. UPDATE 11/11/2015 - I changed the term 'button' to 'cell', but the cell state
 * names still need to be addressed.
 */
define( function( require ) {
    'use strict';

    // modules
    var CellInteractionListener = require( 'ARITHMETIC/factor/view/CellInteractionListener' );
    var GameState = require( 'ARITHMETIC/common/model/GameState' );
    var Image = require( 'SCENERY/nodes/Image' );
    var inherit = require( 'PHET_CORE/inherit' );
    var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

    // images
    var cellPointerHandImage = require( 'image!ARITHMETIC/small-pointing-hand.png' );
    var overlayPointingHandImage = require( 'image!ARITHMETIC/large-pointing-hand.png' );

    /**
     * @param {FactorModel} model - main model class for the factor screen
     * @constructor
     */
    function MultiplicationTableFactorNode( model ) {
      var self = this;
      MultiplicationTableNode.call( this, model.property( 'level' ), model.property( 'state' ), model.levelModels,
        model.answerSheet, false );

      // convenience var
      var gameState = model.property( 'state' );

      // Create an image of a transparent hand that will cue the user that they need to interact with the table.
      var handImage = new Image( overlayPointingHandImage, { pickable: false } );
      handImage.scale( ( this.width / overlayPointingHandImage.width ) * 0.25 );
      handImage.centerX = this.width * 0.55; // position empirically determined
      handImage.centerY = this.height / 2;

      // Create another hand that will appear over each cell to indicate that the user can click on it.  This was
      // originally handled in the individual cells, but caused startup to be long due to the large number of images
      // created, so was moved here.
      this.cellPointer = new Image( cellPointerHandImage, { pickable: false } );
      this.addChild( this.cellPointer );

      // variable used to track cell interaction
      this.cellListeners = []; // @private
      this.activeCell = null; // @private
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
                      self.cellPointer.visible = true;

                      if ( Math.abs( self.cellPointer.height - cell.height * 0.7 ) > 0.01 ) {
                        console.log( 'scaled' );

                        self.cellPointer.setScaleMagnitude( 1 );
                        self.cellPointer.setScaleMagnitude( cell.height * 0.7 / self.cellPointer.height );
                      }
                      self.cellPointer.centerX = cell.centerX;
                      self.cellPointer.centerY = cell.centerY;
                      self.activeCell = cell;
                    }
                    else {
                      self.activeCell = null;
                    }
                  }
                };

                // add 'hover' listeners
                cellListener.mouseOverProperty.link( updateHover );
                cellListener.touchedProperty.onValue( true, function() {
                  if ( model.state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                    // The user has re-touched the grid after submitting an incorrect answer, so assume they want to retry.
                    model.retryProblem();
                  }
                  handImage.visible = false; // stop showing hand after first interaction
                  updateHover();
                } );

                // When the user presses the mouse button, record it.
                cellListener.on( 'mouseDown', function() {
                  self.mouseDownCell = cell;
                  self.activeCell = cell;
                  handImage.visible = false; // stop showing hand after first interaction
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

                  // Disable this cell if the user's answer is correct.
                  if ( leftIndex * rightIndex === model.problemModel.product ) {
                    cellListener.enabled = false;
                  }

                  // Submit the user's answer for checking.
                  model.submitAnswer();
                };

                // When the user releases the mouse button, check that it's the same cell where the mouse down
                // occurred, and fire if so.
                cellListener.on( 'mouseUp', function() {
                  if ( cellListener.enabled && self.mouseDownCell === cell && gameState.value === GameState.AWAITING_USER_INPUT ) {
                    submitAnswer();
                  }
                } );

                // Add listener for handling the event where the user was touching and lifts their finger.
                cellListener.on( 'touchUp', function() {
                  // It takes two touchUp events in a row from the same cell to submit an answer.
                  if ( cellListener.enabled ) {
                    if ( self.touchUpCell === cell && gameState.value === GameState.AWAITING_USER_INPUT ) {
                      submitAnswer();
                    }
                    else {
                      self.touchUpCell = cell;
                    }
                  }
                } );

                // cancel hover for disabled cell before next task
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

      // Add the hand image here for proper layering.
      this.addChild( handImage );

      // Update the cell's appearance state as the game state changes.
      model.stateProperty.link( function( newState, oldState ) {

        if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
          self.setCellsToDefaultColor( model.level );
          self.enableCells( model.level );
        }
        else if ( ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
               newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) &&
                  self.activeCell !== null ) {

          // Cancel hover when showing feedback
          self.activeCell.select();
        }

        if ( newState === GameState.LEVEL_COMPLETED ||
             ( oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK &&
               newState === GameState.AWAITING_USER_INPUT ) ) {

          // clear previously selected region
          self.setCellsToDefaultColor( model.level );
        }

        // hide the pointer when showing correct or incorrect answer feedback
        if ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
             newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          self.cellPointer.visible = false;
        }

        // don't allow interaction when displaying a completed board
        self.pickable = newState !== GameState.LEVEL_COMPLETED;
      } );
    }

    return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {

      // @private, enable all cells for given level
      enableCells: function( levelNumber ) {
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

      // @public, @override
      setCellsToDefaultColor: function( level ) {
        this.cellPointer.visible = false;
        MultiplicationTableNode.prototype.setCellsToDefaultColor.call( this, level );
      },

      // @public
      refreshLevel: function( level ) {
        MultiplicationTableNode.prototype.refreshLevel.call( this, level );
        this.enableCells( level );
      }
    } );
  }
);
