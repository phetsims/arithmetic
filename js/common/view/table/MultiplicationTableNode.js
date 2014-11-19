// Copyright 2002-2014, University of Colorado Boulder

/**
 * A Scenery node that represents the multiplication table.  It consists of a set of individual cells that comprise the
 * headers and the body.
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
  var ScreenView = require( 'JOIST/ScreenView' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var TABLE_SIZE = new Dimension2( 434, 320 ); // table size, empirically determined

  /**
   * @param {Array} levelModels - Array of descriptions for each level.
   * For each level will be created multiplication table node.
   * Necessary for representing best scores for each level.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - Current state property.
   * @param {GameModel} gameModel - Model for single task.
   *
   * @constructor
   */
  function MultiplicationTableNode( levelProperty, stateProperty, levelModels, gameModel ) {
    var self = this;
    Node.call( this );

    // array with views for each level
    this._viewForLevel = [];

    // links to table cells. Indexes: [levelNumber][leftMultiplier][rightMultiplier]
    this.cells = [];

    // add stroke for all multiplication table views
    var backgroundRect = new Rectangle( 0, 0, 0, 0, {
      fill: 'white',
      stroke: 'white',
      strokePosition: 'outside'
    } );
    this.addChild( backgroundRect );

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
              self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( '\u00D7', buttonOptions, {
                font: new PhetFont( { size: Math.round( buttonOptions.height * 0.85 ) } ) // Equation empirically determined, makes font smaller for larger tables.
              } );
            }
            else {
              self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( j.toString(), buttonOptions );
            }
            hBox.addChild( self.cells[levelIndex][i][j] );
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              self.cells[levelIndex][i][j] = new MultiplierTableHeaderCell( i.toString(), buttonOptions );
            }
            else {
              self.cells[levelIndex][i][j] = new MultiplierTableBodyCell( ( i * j ).toString(), buttonOptions );
            }
            hBox.addChild( self.cells[levelIndex][i][j] );
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

    stateProperty.link( function( state ) {
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
    },

    /**
     * Get the position, in global coordinates, of the specified cell.
     *
     * @param level
     * @param column
     * @param row
     * @public
     */
    whereIsCellCenter: function( level, column, row ) {

      // Find the parent screen by moving up the scene graph.
      // TODO: If kept, the parent screen can be identified during construction, which would be more efficient.
      var cell = this.cells[ level ][ row ][ column ];
      var testNode = cell;
      var parentScreen = null;
      while ( testNode !== null ) {
        if ( testNode instanceof ScreenView ) {
          parentScreen = testNode;
          break;
        }
        testNode = testNode.parents[0]; // Move up the scene graph by one level
      }

      return parentScreen.globalToLocalPoint( cell.parentToGlobalPoint( cell.center ) );
    },

    /**
     * Set the 'delayedText' attribute for all cells, which means the text delays for a while before appearing.  This
     * is used in conjunction with animation to make the answers appear to fly up to the cells.
     * @param delayedText
     */
    setDelayedText: function( delayedText ) {
      this.cells.forEach( function( level ) {
        level.forEach( function( cellArray ) {
          cellArray.forEach( function( cell ) {
            cell.delayedText = delayedText;
          } )
        } )
      } );
    }
  } );
} );
