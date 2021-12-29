// Copyright 2014-2021, University of Colorado Boulder

/**
 * Multiplication table node for 'Factor' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import { Image } from '../../../../scenery/js/imports.js';
import largePointingHand_png from '../../../images/largePointingHand_png.js';
import smallPointingHand_png from '../../../images/smallPointingHand_png.js';
import arithmetic from '../../arithmetic.js';
import GameState from '../../common/model/GameState.js';
import MultiplicationTableNode from '../../common/view/table/MultiplicationTableNode.js';
import CellInteractionListener from './CellInteractionListener.js';

class FactorScreenTableNode extends MultiplicationTableNode {

  /**
   * @param {FactorModel} model - main model class for the factor screen
   */
  constructor( model ) {
    super( model.levelNumberProperty, model.stateProperty, model.levelModels, false );

    // convenience var
    const gameState = model.stateProperty;

    // Create an image of a transparent hand that will cue the user that they need to interact with the table.
    const handImage = new Image( largePointingHand_png, { pickable: false } ); // @private
    handImage.scale( ( this.width / largePointingHand_png.width ) * 0.25 );
    handImage.centerX = this.width * 0.55; // position empirically determined
    handImage.centerY = this.height / 2;

    // Create another hand that will appear over each cell to indicate that the user can click on it.  This was
    // originally handled in the individual cells, but caused startup to be long due to the large number of images
    // created, so was moved here.
    this.cellPointer = new Image( smallPointingHand_png, { pickable: false } ); // @private
    this.addChild( this.cellPointer );

    // variables used to track cell interaction
    this.cellListeners = []; // @private
    this.activeCell = null; // @private
    this.mouseDownCell = null; // @private

    // add 'hover' and 'down' listeners for each cell in table
    this.cells.forEach( ( tableForLevel, levelIndex ) => {

      this.cellListeners[ levelIndex ] = [];

      tableForLevel.forEach( ( multiplicandRow, multiplicandRowIndex ) => {

        // skip zero-index because it's the header column
        if ( multiplicandRowIndex ) {

          multiplicandRow.forEach( ( cell, multiplierIndex ) => {
            let cellListener;

            // skip zero-index because it's the header row
            if ( multiplierIndex ) {
              cellListener = new CellInteractionListener();
              cell.addInputListener( cellListener );
              cell.cursor = 'pointer';

              // store cell listeners for each level
              this.cellListeners[ levelIndex ].push( cellListener );

              const updateHover = () => {
                if ( model.stateProperty.get() === GameState.AWAITING_USER_INPUT ) {
                  this.setCellsToDefaultColor( model.levelNumberProperty.get() );
                  if ( cellListener.enabledProperty.get() ) {
                    this.setSelectedRect( model.levelNumberProperty.get(), multiplicandRowIndex, multiplierIndex );
                    cell.setHover();
                    this.cellPointer.visible = true;

                    if ( Math.abs( this.cellPointer.height - cell.height * 0.7 ) > 0.01 ) {
                      this.cellPointer.setScaleMagnitude( 1 );
                      this.cellPointer.setScaleMagnitude( cell.height * 0.7 / this.cellPointer.height );
                    }
                    this.cellPointer.centerX = cell.centerX;
                    this.cellPointer.centerY = cell.centerY;
                    this.activeCell = cell;
                  }
                  else {
                    this.activeCell = null;
                  }
                }
              };

              // add 'hover' listeners
              cellListener.mouseOverProperty.link( updateHover );
              cellListener.touchedProperty.link( touched => {
                if ( touched ) {
                  if ( model.stateProperty.get() === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
                    // The user has re-touched the grid after submitting an incorrect answer, so assume they want to retry.
                    model.retryProblem();
                  }
                  handImage.visible = false; // stop showing hand after first interaction
                  updateHover();
                }
              } );

              // When the user presses the mouse button, record it.
              cellListener.mouseDownEmitter.addListener( () => {
                this.mouseDownCell = cell;
                this.activeCell = cell;
                handImage.visible = false; // stop showing hand after first interaction
                updateHover();
              } );

              // Define a function for submitting an answer that can be used by both mouse and the touch handlers.
              const submitAnswer = () => {

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
                this.setSelectedRect( model.levelNumberProperty.get(), multiplicandRowIndex, multiplierIndex );
              };

              // When the user releases the mouse button, check that it's the same cell where the mouse down occurred,
              // and fire if so.
              cellListener.mouseUpEmitter.addListener( () => {
                if ( cellListener.enabledProperty.get() && this.mouseDownCell === cell &&
                     ( gameState.value === GameState.AWAITING_USER_INPUT ||
                       gameState.value === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) ) {
                  submitAnswer();
                }
              } );

              // Add listener for handling the event where the user was touching and lifts their finger.
              cellListener.touchUpEmitter.addListener( () => {
                // It takes two touchUp events in a row from the same cell to submit an answer.
                if ( cellListener.enabledProperty.get() ) {
                  if ( this.touchUpCell === cell && gameState.value === GameState.AWAITING_USER_INPUT ) {
                    submitAnswer();
                  }
                  else {
                    this.touchUpCell = cell;
                  }
                }
              } );

              // cancel hover for disabled cell before next task
              model.stateProperty.lazyLink( state => {
                if ( state === GameState.AWAITING_USER_INPUT && !cellListener.enabledProperty.get() ) {
                  this.setCellsToDefaultColor( model.levelNumberProperty.get() );
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
    model.stateProperty.link( ( newState, oldState ) => {

      if ( oldState === GameState.SELECTING_LEVEL && newState === GameState.AWAITING_USER_INPUT ) {
        this.setCellsToDefaultColor( model.levelNumberProperty.get() );
        this.updateCellListenerEnabledStates( model.levelNumberProperty.get(), model.activeLevelModel );
      }
      else if ( ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
                  newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) &&
                this.activeCell !== null ) {

        // Cancel hover when showing feedback
        this.activeCell.setSelected();
      }

      if ( newState === GameState.LEVEL_COMPLETED ||
           ( oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK &&
             newState === GameState.AWAITING_USER_INPUT ) ) {

        // clear previously selected region
        this.setCellsToDefaultColor( model.levelNumberProperty.get() );
      }

      // hide the pointer when showing correct or incorrect answer feedback
      if ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ||
           newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
        this.cellPointer.visible = false;
      }

      // don't allow interaction when displaying a completed board
      this.pickable = newState !== GameState.LEVEL_COMPLETED;
    } );
  }

  // @private, enable all cells for given level
  enableAllCells( levelNumber ) {
    this.cellListeners[ levelNumber ].forEach( cellListener => {
      cellListener.enabledProperty.set( true );
    } );
  }

  // @private, enabled or disable the cell listeners based on whether or not the cell has been used
  updateCellListenerEnabledStates( levelNumber, levelModel ) {
    const tableSize = levelModel.tableSize;
    for ( let multiplicand = 1; multiplicand <= tableSize; multiplicand++ ) {
      for ( let multiplier = 1; multiplier <= tableSize; multiplier++ ) {
        this.cellListeners[ levelNumber ][ ( multiplicand - 1 ) * tableSize + ( multiplier - 1 ) ].enabledProperty.set(
          !levelModel.isCellUsed( multiplicand, multiplier )
        );
      }
    }
  }

  // @private, set 'selected' state for all cells in given bounds and highlight the multipliers (i.e. header cells)
  setSelectedRect( levelNumber, leftBound, rightBound ) {
    // highlight multipliers
    this.cells[ levelNumber ][ 0 ][ rightBound ].setSelected();
    this.cells[ levelNumber ][ leftBound ][ 0 ].setSelected();

    // set 'selected' state for all cell in given bounds
    this.cells[ levelNumber ].forEach( ( multiplicands, multiplicandIndex ) => {
      if ( multiplicandIndex && multiplicandIndex <= leftBound ) {
        multiplicands.forEach( ( cell, multiplierIndex ) => {
          if ( multiplierIndex && multiplierIndex <= rightBound ) {
            cell.setSelected();
          }
        } );
      }
    } );
  }

  // @public, @override
  setCellsToDefaultColor( level ) {
    this.cellPointer.visible = false;
    super.setCellsToDefaultColor( level );
  }

  // @public, @override
  refreshLevel( level ) {
    super.refreshLevel( level );
    this.enableAllCells( level );
  }
}

arithmetic.register( 'FactorScreenTableNode', FactorScreenTableNode );

export default FactorScreenTableNode;