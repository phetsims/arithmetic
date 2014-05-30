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
  var PushButtonModel = require( 'SUN/buttons/PushButtonModel' );

  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableNode' );

  function MultiplicationTableFactorNode( gameModel, levelProperty, levels ) {
    var self = this;
    MultiplicationTableNode.call( this, levelProperty, levels );

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

              // add 'hover' listener
              buttonModel.property( 'over' ).onValue( true, function() {
                self.clearCells( levelProperty.value );
                self.setActiveRect( levelProperty.value, leftIndex, rightIndex );
                button.hover();
              } );

              // add 'down' listener
              buttonModel.property( 'down' ).onValue( true, function() {
                gameModel.multiplierLeft = leftIndex;
                gameModel.multiplierRight = rightIndex;
              } );
            }
          } );
        }
      } );
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
    }
  } );
} );
