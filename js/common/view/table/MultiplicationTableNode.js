// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplierTableHeaderCell = require( 'ARITHMETIC/common/view/table/MultiplierTableHeaderCell' );
  var MultiplierTableBodyCell = require( 'ARITHMETIC/common/view/table/MultiplierTableBodyCell' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var TABLE_SIZE = new Dimension2( 434, 320 ); // table size

  /**
   * @param {Array} levelModels - Array of descriptions for each level.
   * For each level will be created multiplication table node.
   * Necessary for representing best scores for each level.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {GameModel} gameModel - Model for single task.
   *
   * @constructor
   */
  function MultiplicationTableNode( levelProperty, levelModels, gameModel ) {
    var self = this;
    var backgroundRect;
    Node.call( this );

    // array with views for each level
    this._viewForLevel = [];

    // links to table cells. Indexes: [levelNumber][leftMultiplier][rightMultiplier]
    this.cells = [];

    // add stroke for all multiplication table views
    this.addChild( backgroundRect = new Rectangle( 0, 0, 0, 0, {
      fill: 'white',
      stroke: 'white',
      strokePosition: 'outside'
    } ) );

    // create view of times table for levels
    levelModels.forEach( function( level, levelIndex ) {
      var tableSize = level.tableSize;
      var buttonOptions = {
        lineWidth: 1,
        width: TABLE_SIZE.width / (tableSize + 1),
        height: TABLE_SIZE.height / (tableSize + 1)
      };
      var i;
      var j;
      var hBox;
      var vBox = new VBox( {visible: false} );

      // set equal line width for background rectangle
      backgroundRect.setLineWidth( buttonOptions.lineWidth );

      // init store for cells
      self.cells[levelIndex] = [];

      for ( i = 0; i <= tableSize; i++ ) {
        hBox = new HBox();
        self.cells[levelIndex][i] = [];
        // first row
        if ( i === 0 ) {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is 'X', other - multiplier numbers
            if ( j === 0 ) {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( '\u00D7', buttonOptions, {
                font: new PhetFont( { size: Math.round( buttonOptions.height * 0.85 ) } ) // Equation empirically determined, makes font smaller for larger tables.
              } ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( j.toString(), buttonOptions ) );
            }
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( i.toString(), buttonOptions ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplierTableBodyCell( (i * j).toString(), buttonOptions ) );
            }
          }
        }
        vBox.addChild( hBox );
      }

      // add view to node
      self.addChild( vBox );

      // scale for appropriate size
      vBox.scale( TABLE_SIZE.width / vBox.bounds.width, TABLE_SIZE.height / vBox.bounds.height );

      // save view
      self._viewForLevel[levelIndex] = vBox;
    } );

    // set background size
    backgroundRect.setRectWidth( this.bounds.width );
    backgroundRect.setRectHeight( this.bounds.height );

    levelProperty.link( function( levelNumberCurrent, levelNumberPrev ) {
      // show current multiplication table view for level
      if ( self._viewForLevel[levelNumberCurrent] ) {
        self._viewForLevel[levelNumberCurrent].visible = true;
      }

      // hide previous multiplication table view
      if ( self._viewForLevel[levelNumberPrev] ) {
        self._viewForLevel[levelNumberPrev].visible = false;
      }
    } );

    gameModel.property( 'state' ).link( function( state ) {
      if ( state === GameState.NEXT_TASK ) {
        gameModel.answerSheet.forEach( function( multipliersLeft, multipliersLeftIndex ) {
          multipliersLeft.forEach( function( isVisible, multipliersRightIndex ) {
            if ( isVisible ) {
              self.cells[levelProperty.value][multipliersLeftIndex + 1][multipliersRightIndex + 1].showText();
            }
            else {
              self.cells[levelProperty.value][multipliersLeftIndex + 1][multipliersRightIndex + 1].hideText();
            }
          } );
        } );
      }
    } );
  }

  return inherit( Node, MultiplicationTableNode, {
    // clear all cells for given level
    clearCells: function( level ) {
      this.cells[level].forEach( function( multipliersLeft ) {
        multipliersLeft.forEach( function( cell ) {
          cell.normal();
        } );
      } );
    }
  } );
} );
