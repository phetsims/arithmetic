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
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function MultiplicationTableFactorNode( gameModel, levelProperty, levels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levels, gameModel );

    this._buttonModel = [];

    // add 'hover' and 'down' listeners for each cell in table
    this.cells.forEach( function( tableForLevel ) {
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
              self._buttonModel.push( buttonModel );

              // add 'hover' listener
              buttonModel.property( 'over' ).onValue( true, function() {
                if ( buttonModel.enabled ) {
                  self.clearCells( levelProperty.value );
                  self.setActiveRect( levelProperty.value, leftIndex, rightIndex );
                  button.hover();
                }
              } );

              // add 'down' listener
              buttonModel.property( 'down' ).onValue( true, function() {
                if ( buttonModel.enabled ) {
                  gameModel.multiplierLeft = leftIndex;
                  gameModel.multiplierRight = rightIndex;

                  gameModel.state = GAME_STATE.EQUATION_FILLED;
                }
              } );
            }
          } );
        }
      } );
    } );

    gameModel.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.LEVEL_FINISHED ) {
        self.disableAll( levelProperty.value );
      }
      else if ( state === GAME_STATE.START ) {
        self.enableAll();
      }
    } );
  }

  return inherit( MultiplicationTableNode, MultiplicationTableFactorNode, {
    // set 'active' state for all cell in given bounds
    setActiveRect: function( levelNumber, leftBound, rightBound ) {
      this.cells[levelNumber - 1].forEach( function( multipliersLeft, leftIndex ) {
        if ( leftIndex && leftIndex <= leftBound ) {
          multipliersLeft.forEach( function( cell, rightIndex ) {
            if ( rightIndex && rightIndex <= rightBound ) {
              cell.active();
            }
          } );
        }
      } );
    },
    // disable all buttons
    disableAll: function( levelNumber ) {
      this.clearCells( levelNumber );

      this._buttonModel.forEach( function( buttonModel ) {
        buttonModel.enabled = false;
      } );
    },
    // enable all buttons
    enableAll: function() {
      this._buttonModel.forEach( function( buttonModel ) {
        buttonModel.enabled = true;
      } );
    }
  } );
} );
