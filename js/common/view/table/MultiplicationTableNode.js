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
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplierTableHeaderCell = require( 'ARITHMETIC/common/view/table/MultiplierTableHeaderCell' );
  var MultiplierTableBodyCell = require( 'ARITHMETIC/common/view/table/MultiplierTableBodyCell' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var TABLE_SIZE = new Dimension2( 434, 320 ); // table size in screen coordinates, empirically determined

  /**
   * For each level will be created multiplication table node.
   * Necessary for representing best scores for each level.
   * @param {Property.<number>} levelProperty - Level difficulty property.
   * @param {Property.<GameState>} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   * @param {Array} answerSheet - 2D array that tracks problems that have and haven't been answered
   * @constructor
   */
  function MultiplicationTableNode( levelProperty, stateProperty, levelModels, answerSheet ) {
    var self = this;
    Node.call( this );

    // level property needs to be available to sub-classes
    this.levelProperty = levelProperty; // @protected

    // array with views for each level
    this.viewForLevel = []; // @private

    // three-dimensional array of the cells, indexed by [levelNumber][leftMultiplier][rightMultiplier]
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
      backgroundRect.lineWidth = buttonOptions.lineWidth;

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
      self.viewForLevel[levelIndex] = vBox;
    } );

    // set background size
    backgroundRect.setRectWidth( this.bounds.width );
    backgroundRect.setRectHeight( this.bounds.height );

    levelProperty.link( function( levelNumberCurrent, levelNumberPrev ) {
      // show current multiplication table view for level
      if ( self.viewForLevel[levelNumberCurrent] ) {
        self.viewForLevel[levelNumberCurrent].visible = true;
      }

      // hide previous multiplication table view
      if ( self.viewForLevel[levelNumberPrev] ) {
        self.viewForLevel[levelNumberPrev].visible = false;
      }
    } );

    // Update the visible answers each time the user gets a correct answer
    // TODO: This seems odd.  Why not just have each cell have a 'solved' property, and have that reflected in the view?
    stateProperty.link( function( state ) {
      if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
        // Update the answers that are displayed.
        answerSheet.forEach( function( multipliersLeft, multipliersLeftIndex ) {
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

    /**
     * Set all cells for given level to the default background color
     * @param {number} level
     * @public
     */
    setCellsToDefaultColor: function( level ) {
      this.cells[level].forEach( function( multipliersLeft ) {
        multipliersLeft.forEach( function( cell ) {
          cell.normal();
        } );
      } );
    },

    /**
     * Clear all cells for the given level, meaning that the text is hidden and the background color is set to default.
     * @param {number} level
     * @public
     */
    clearCells: function( level ) {
      this.setCellsToDefaultColor( level );
      this.cells[level].forEach( function( cellRow, cellRowIndex ) {
        if ( cellRowIndex > 0 ) {
          cellRow.forEach( function( cell, index ) {
            if ( index > 0 ) {
              cell.hideText();
            }
          } );
        }
      } );
    },

    //TODO: May need to move down into sub-classes.
    refreshLevel: function( level ) {
      this.clearCells( level );
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
     * Get the size of the text used for the provided level.
     *
     * @param level
     * @param column
     * @param row
     * @public
     */
    getTextWidth: function( level, column, row ) {
      return this.cells[ level ][ row ][ column ]._text.width;
    }
  } );
} );
