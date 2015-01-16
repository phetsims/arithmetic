// Copyright 2002-2014, University of Colorado Boulder

/**
 * A Scenery node that represents the multiplication table.  It contains a table for each of the levels in the provided
 * levelModels parameter, and handles the hiding and showing of the appropriate table based on the currently active
 * level.
 *
 * Each table is made up of a set of cells that define the headers for and the body of the table.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
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
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var TABLE_SIZE = new Dimension2( 434, 320 ); // table size in screen coordinates, empirically determined
  var ANSWER_ANIMATION_TIME = 800; // in milliseconds

  // Starting point for the animation of the answer.  It is not ideal that this is a constant, because it means that if
  // the layout changes, this will need to be manually updated, but it's tricky to get it coordinated with the layout
  // in some other way.
  var ANSWER_ANIMATION_ORIGIN = new Vector2( 370, 380 );

  /**
   * For each level will be created multiplication table node.
   * Necessary for representing best scores for each level.
   * @param {Property.<number>} levelProperty - Level difficulty property.
   * @param {Property.<GameState>} stateProperty - Current state property.
   * @param {Array} levelModels - Array of descriptions for each level.
   * @param {Array} answerSheet - 2D array that tracks problems that have and haven't been answered
   * @param {boolean} animateAnswer - flag that controls whether answer appears to fly into the cell or just appears
   *
   * @constructor
   */
  function MultiplicationTableNode( levelProperty, stateProperty, levelModels, answerSheet, animateAnswer ) {
    var self = this;
    Node.call( this );

    // level property needs to be available to sub-classes
    this.levelProperty = levelProperty; // @protected

    // array with views for each level
    this.viewForLevel = []; // @private

    // three-dimensional array of the cells, indexed by [levelNumber][leftMultiplier][rightMultiplier]
    this.cells = []; // @private

    // add stroke for all multiplication table views
    var backgroundRect = new Rectangle( 0, 0, 0, 0, {
      fill: 'white',
      stroke: 'white',
      strokePosition: 'outside'
    } );
    this.addChild( backgroundRect );

    // create view of times table for each of the levels
    levelModels.forEach( function( level, levelIndex ) {
      var tableSize = level.tableSize;
      var buttonOptions = {
        lineWidth: 1,
        width: TABLE_SIZE.width / (tableSize + 1),
        height: TABLE_SIZE.height / (tableSize + 1)
      };
      var i;
      var j;
      var hBoxChildren;
      var vBoxChildren = [];

      // set equal line width for background rectangle
      backgroundRect.lineWidth = buttonOptions.lineWidth;  // TODO: Why is this set here multiple times?  Why not outside of loop?

      // init store for cells
      self.cells[ levelIndex ] = [];

      for ( i = 0; i <= tableSize; i++ ) {
        hBoxChildren = [];
        self.cells[ levelIndex ][ i ] = [];
        // first row
        if ( i === 0 ) {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is 'X', other - multiplier numbers
            if ( j === 0 ) {
              self.cells[ levelIndex ][ i ][ j ] = new MultiplierTableHeaderCell( '\u00D7', buttonOptions, {
                font: new PhetFont( { size: Math.round( buttonOptions.height * 0.85 ) } ) // Equation empirically determined, makes font smaller for larger tables.
              } );
            }
            else {
              self.cells[ levelIndex ][ i ][ j ] = new MultiplierTableHeaderCell( j.toString(), buttonOptions );
            }
            hBoxChildren.push( self.cells[ levelIndex ][ i ][ j ] );
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              self.cells[ levelIndex ][ i ][ j ] = new MultiplierTableHeaderCell( i.toString(), buttonOptions );
            }
            else {
              self.cells[ levelIndex ][ i ][ j ] = new MultiplierTableBodyCell( ( i * j ).toString(), buttonOptions );
            }
            hBoxChildren.push( self.cells[ levelIndex ][ i ][ j ] );
          }
        }
        vBoxChildren.push( new HBox( { children: hBoxChildren, resize: false } ) );
      }

      var vBox = new VBox( { children: vBoxChildren, visible: false, resize: false } );

      // add view to node
      self.addChild( vBox );

      // scale for appropriate size
      vBox.scale( TABLE_SIZE.width / vBox.bounds.width, TABLE_SIZE.height / vBox.bounds.height );

      // save view
      self.viewForLevel[ levelIndex ] = vBox;
    } );

    // set background size
    backgroundRect.setRectWidth( this.bounds.width );
    backgroundRect.setRectHeight( this.bounds.height );

    levelProperty.link( function( levelNumberCurrent, levelNumberPrev ) {
      // show current multiplication table view for level
      if ( self.viewForLevel[ levelNumberCurrent ] ) {
        self.viewForLevel[ levelNumberCurrent ].visible = true;
      }

      // hide previous multiplication table view
      if ( self.viewForLevel[ levelNumberPrev ] ) {
        self.viewForLevel[ levelNumberPrev ].visible = false;
      }
    } );

    // add the node that will be used to animate the answer moving from the equation to the location of the cell.
    var flyingProduct = new Text( 'X', {
      font: ArithmeticConstants.EQUATION_FONT_TEXT,
      fill: 'white',
      visible: false
    } );
    this.addChild( flyingProduct );

    // Update the visible answers each time the user gets a correct answer
    // TODO: This seems odd.  Why not just have each cell have a 'solved' property, and have that reflected in the view?
    stateProperty.link( function( state ) {
      if ( state === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
        // Update the answers that are displayed.
        answerSheet.forEach( function( multipliersLeft, multipliersLeftIndex ) {
          multipliersLeft.forEach( function( isVisible, multipliersRightIndex ) {
            var cell = self.cells[ levelProperty.value ][ multipliersLeftIndex + 1 ][ multipliersRightIndex + 1 ];
            if ( isVisible ) {
              if ( animateAnswer && !cell.isTextVisible() ) {

                // Animate the product moving from the equation to the appropriate cell within the table.  We had to
                // get a little tricky with this since the scale of each node is controlled by a function rather than
                // a parameter.
                flyingProduct.text = cell.getTextString();
                flyingProduct.setScaleMagnitude( 1 );
                var flyingProductDestination = self.globalToLocalPoint( cell.parentToGlobalPoint( cell.center ) );
                var flyingProducePositionAndScale = {
                  centerX: ANSWER_ANIMATION_ORIGIN.x,
                  centerY: ANSWER_ANIMATION_ORIGIN.y,
                  scale: 1
                };
                var animationTween = new TWEEN.Tween( flyingProducePositionAndScale ).
                  to( {
                    centerX: flyingProductDestination.x,
                    centerY: flyingProductDestination.y,
                    scale: cell.getTextWidth() / flyingProduct.width
                  }, ANSWER_ANIMATION_TIME ).
                  easing( TWEEN.Easing.Cubic.InOut ).
                  onUpdate( function() {
                    flyingProduct.centerX = flyingProducePositionAndScale.centerX;
                    flyingProduct.centerY = flyingProducePositionAndScale.centerY;
                    flyingProduct.setScaleMagnitude( flyingProducePositionAndScale.scale );
                  } ).
                  onComplete( function() {
                    cell.showText();
                    flyingProduct.visible = false
                  } );
                flyingProduct.visible = true;
                animationTween.start();
              }
              else {
                // So animation, so just show the text.
                cell.showText();
              }
            }
            else {
              cell.hideText();
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
      this.cells[ level ].forEach( function( multipliersLeft ) {
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
      this.cells[ level ].forEach( function( cellRow, cellRowIndex ) {
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
        testNode = testNode.parents[ 0 ]; // Move up the scene graph by one level
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
