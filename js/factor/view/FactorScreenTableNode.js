// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table node for 'Factor' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
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
  function FactorScreenTableNode( model ) {
    var self = this;
    MultiplicationTableNode.call( this, model.levelProperty, model.stateProperty, model.levelModels, false );

    // convenience var
    var gameState = model.stateProperty;

    // Create an image of a transparent hand that will cue the user that they need to interact with the table.
    var handImage = new Image( overlayPointingHandImage, { pickable: false } ); // @private
    handImage.scale( ( this.width / overlayPointingHandImage.width ) * 0.25 );
    handImage.centerX = this.width * 0.55; // position empirically determined
    handImage.centerY = this.height / 2;

    // Create another hand that will appear over each cell to indicate that the user can click on it.  This was
    // originally handled in the individual cells, but caused startup to be long due to the large number of images
    // created, so was moved here.
    this.cellPointer = new Image( cellPointerHandImage, { pickable: false } ); // @private
    this.addChild( this.cellPointer );

    // variables used to track cell interaction
    this.cellListeners = []; // @private
    this.activeCell = null; // @private
    this.mouseDownCell = null; // @private

    // add 'hover' and 'down' listeners for each cell in table
    this.cells.forEach( function( tableForLevel, levelIndex ) {

      self.cellListeners[ levelIndex ] = [];

      tableForLevel.forEach( function( multiplicandRow, multiplicandRowIndex ) {

        // skip zero-index because it's the header column
        if ( multiplicandRowIndex ) {

          multiplicandRow.forEach( function( cell, multiplierIndex ) {
            var cellListener;

            // skip zero-index because it's the header row
            if ( multiplierIndex ) {
              cellListener = new CellInteractionListener();
              cell.addInputListener( cellListener );
              cell.cursor = 'pointer';

              // store cell listeners for each level
              self.cellListeners[ levelIndex ].push( cellListener );

              var updateHover = function() {
                if ( model.stateProperty.get() === GameState.AWAITING_USER_INPUT ) {
                  self.setCellsToDefaultColor( model.levelProperty.get() );
                  if ( cellListener.enabledProperty.get() ) {
                    self.setSelectedRect( model.levelProperty.get(), multiplicandRowIndex, multiplierIndex );
                    cell.setHover();
                    self.cellPointer.visible = true;

                    if ( Math.abs( self.cellPointer.height - cell.height * 0.7 ) > 0.01 ) {
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
                if ( model.stateProperty.get() === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                  // The user has re-touched the grid after submitting an incorrect answer, so assume they want to retry.
                  model.retryProblem();
                }
                handImage.visible = false; // stop showing hand after first interaction
                updateHover();
              } );

              // When the user presses the mouse button, record it.
              cellListener.mouseDownEmitter.addListener( function() {
                self.mouseDownCell = cell;
                self.activeCell = cell;
                handImage.visible = false; // stop showing hand after first interaction
                updateHover();
              } );

              // Define a function for submitting an answer that can be used by both mouse and the touch handlers.
              var submitAnswer = function() {

                // Record the user's answer.
                model.problemModel.multiplicandProperty.set( multiplicandRowIndex );
                model.problemModel.multiplierProperty.set( multiplierIndex );

                // Disable this cell if the user's answer is correct.
                if ( multiplicandRowIndex * multiplierIndex === model.problemModel.productProperty.get() ) {
                  cellListener.enabledProperty.set( false );
                }

                // Submit the user's answer for checking.
                model.submitAnswer();

                // Update the cell highlighting to match the latest submission, which may be necessary if the user
                // submitted a new answer after first submitting one or more incorrect ones.
                self.setSelectedRect( model.levelProperty.get(), multiplicandRowIndex, multiplierIndex );
              };

              // When the user releases the mouse button, check that it's the same cell where the mouse down occurred,
              // and fire if so.
              cellListener.mouseUpEmitter.addListener( function() {
                if ( cellListener.enabledProperty.get() && self.mouseDownCell === cell &&
                     ( gameState.value === GameState.AWAITING_USER_INPUT ||
                       gameState.value === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) ) {
                  submitAnswer();
                }
              } );

              // Add listener for handling the event where the user was touching and lifts their finger.
              cellListener.touchUpEmitter.addListener( function() {
                // It takes two touchUp events in a row from the same cell to submit an answer.
                if ( cellListener.enabledProperty.get() ) {
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
                if ( state === GameState.AWAITING_USER_INPUT && !cellListener.enabledProperty.get() ) {
                  self.setCellsToDefaultColor( model.levelProperty.get() );
                }
              } );
            }
          } );
        }
      } );
    } );

    // Add the hand image here for proper layering.
    this.addChild( handImage );

    // Update the cell's appearance and state as the game state changes.
    model.stateProperty.link( function( newState, oldState ) {

      if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
        self.setCellsToDefaultColor( model.levelProperty.get() );
        self.updateCellListenerEnabledStates( model.levelProperty.get(), model.activeLevelModel );
      }
      else if ( ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
                  newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) &&
                self.activeCell !== null ) {

        // Cancel hover when showing feedback
        self.activeCell.setSelected();
      }

      if ( newState === GameState.LEVEL_COMPLETED ||
           ( oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK &&
             newState === GameState.AWAITING_USER_INPUT ) ) {

        // clear previously selected region
        self.setCellsToDefaultColor( model.levelProperty.get() );
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

  arithmetic.register( 'FactorScreenTableNode', FactorScreenTableNode );

  return inherit( MultiplicationTableNode, FactorScreenTableNode, {

    // @private, enable all cells for given level
    enableAllCells: function( levelNumber ) {
      this.cellListeners[ levelNumber ].forEach( function( cellListener ) {
        cellListener.enabledProperty.set( true );
      } );
    },

    // @private, enabled or disable the cell listeners based on whether or not the cell has been used
    updateCellListenerEnabledStates: function( levelNumber, levelModel ) {
      var self = this;
      var tableSize = levelModel.tableSize;
      for ( var multiplicand = 1; multiplicand <= tableSize; multiplicand++ ) {
        for ( var multiplier = 1; multiplier <= tableSize; multiplier++ ) {
          self.cellListeners[ levelNumber ][ ( multiplicand - 1 ) * tableSize + ( multiplier - 1 ) ].enabledProperty.set(
            !levelModel.isCellUsed( multiplicand, multiplier )
          );
        }
      }
    },

    // @private, set 'selected' state for all cells in given bounds and highlight the multipliers (i.e. header cells)
    setSelectedRect: function( levelNumber, leftBound, rightBound ) {
      // highlight multipliers
      this.cells[ levelNumber ][ 0 ][ rightBound ].setSelected();
      this.cells[ levelNumber ][ leftBound ][ 0 ].setSelected();

      // set 'selected' state for all cell in given bounds
      this.cells[ levelNumber ].forEach( function( multiplicands, multiplicandIndex ) {
        if ( multiplicandIndex && multiplicandIndex <= leftBound ) {
          multiplicands.forEach( function( cell, multiplierIndex ) {
            if ( multiplierIndex && multiplierIndex <= rightBound ) {
              cell.setSelected();
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

    // @public, @override
    refreshLevel: function( level ) {
      MultiplicationTableNode.prototype.refreshLevel.call( this, level );
      this.enableAllCells( level );
    }
  } );
} );
