// Copyright 2014-2019, University of Colorado Boulder

/**
 * A Scenery node that represents a set of multiplication tables.  It contains a table for each of the levels in the
 * provided levelModels parameter, and handles the hiding and showing of the appropriate table based on the currently
 * active level.  Each table is made up of a set of cells that define the headers and the body of the table.
 *
 * This is generally used as a base class, and more specialized behavior is added in the descendent classes.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const Animation = require( 'TWIXT/Animation' );
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const Dimension2 = require( 'DOT/Dimension2' );
  const Easing = require( 'TWIXT/Easing' );
  const GameState = require( 'ARITHMETIC/common/model/GameState' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MathSymbols = require( 'SCENERY_PHET/MathSymbols' );
  const MultiplicationTableBodyCell = require( 'ARITHMETIC/common/view/table/MultiplicationTableBodyCell' );
  const MultiplicationTableHeaderCell = require( 'ARITHMETIC/common/view/table/MultiplicationTableHeaderCell' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const Text = require( 'SCENERY/nodes/Text' );
  const Util = require( 'DOT/Util' );
  const Vector2 = require( 'DOT/Vector2' );

  // constants
  const TABLE_SIZE = new Dimension2( 434, 320 ); // table size in screen coordinates, empirically determined
  const ANSWER_ANIMATION_TIME = 0.8; // in seconds

  // Starting point for the animation of the answer.  It is not ideal that this is a constant, because it means that if
  // the layout changes, this will need to be manually updated, but it's tricky to get it coordinated with the layout
  // in some other way.
  const ANSWER_ANIMATION_ORIGIN = new Vector2( 370, 380 );

  /**
   * @param {Property.<number>} levelNumberProperty - level property.
   * @param {Property.<GameState>} stateProperty - current state property
   * @param {Array.<LevelModel>} levelModels - array of models for each level
   * @param {boolean} animateAnswer - flag that controls whether answer appears to fly into the cell or just appears
   * @constructor
   */
  function MultiplicationTableNode( levelNumberProperty, stateProperty, levelModels, animateAnswer ) {
    const self = this;
    Node.call( this );

    this.levelNumberProperty = levelNumberProperty; // @protected - needs to be available to sub-classes
    this.viewForLevel = new Array( levelModels.length ); // @private - array with views for each level

    // @private - three-dimensional array of the cells, indexed by [levelNumber][multiplicand][multiplier]
    this.cells = new Array( levelModels.length );

    // add stroke for all multiplication table views
    const backgroundRect = new Rectangle( 0, 0, 0, 0, {
      fill: 'white',
      cursor: 'pointer' // this is done so that the cursor doesn't change when moving between cells
    } );
    this.addChild( backgroundRect );

    // create view of multiplication table for each of the levels
    levelModels.forEach( function( level, levelIndex ) {
      const tableSize = level.tableSize;
      const cellOptions = {
        lineWidth: Math.max( Math.ceil( ( TABLE_SIZE.width / ( tableSize + 1 ) ) / 40 ), 2 ),
        width: TABLE_SIZE.width / ( tableSize + 1 ),
        height: TABLE_SIZE.height / ( tableSize + 1 )
      };
      const levelRootNode = new Node( { visible: false } ); // root node for a single level
      let row;
      let column;

      // init store for cells
      self.cells[ levelIndex ] = new Array( tableSize + 1 );

      let cell;
      let cellTop = 0;
      let cellLeft = 0;

      // create the table row by row
      for ( row = 0; row <= tableSize; row++ ) {
        self.cells[ levelIndex ][ row ] = new Array( tableSize + 1 );

        // first row
        if ( row === 0 ) {
          for ( column = 0; column <= tableSize; column++ ) {

            // first cell is the multiplier operator, others are multipliers
            if ( column === 0 ) {
              cell = new MultiplicationTableHeaderCell( MathSymbols.TIMES, cellOptions, {

                // specify font and size, equation empirically determined, makes font smaller for larger tables
                font: new PhetFont( { size: Util.roundSymmetric( cellOptions.height * 0.85 ) } )
              } );
            }
            else {
              cell = new MultiplicationTableHeaderCell( column.toString(), cellOptions );
            }
            cell.top = cellTop;
            cell.left = cellLeft;
            cellLeft += cellOptions.width;
            levelRootNode.addChild( cell );
            self.cells[ levelIndex ][ row ][ column ] = cell;
          }
        }

        // other rows
        else {
          for ( column = 0; column <= tableSize; column++ ) {

            // first cell in each row is a multiplier, others are products
            if ( column === 0 ) {
              cell = new MultiplicationTableHeaderCell( row.toString(), cellOptions );
            }
            else {
              cell = new MultiplicationTableBodyCell(
                ( row * column ).toString(),
                cellOptions
              );
            }
            cell.top = cellTop;
            cell.left = cellLeft;
            cellLeft += cellOptions.width;
            levelRootNode.addChild( cell );
            self.cells[ levelIndex ][ row ][ column ] = cell;
          }
        }
        cellTop += cellOptions.height;
        cellLeft = 0;
      }


      // add view to node
      self.addChild( levelRootNode );

      // save view
      self.viewForLevel[ levelIndex ] = levelRootNode;
    } );

    // set background size
    backgroundRect.setRectWidth( this.bounds.width );
    backgroundRect.setRectHeight( this.bounds.height );

    levelNumberProperty.link( function( levelNumberCurrent, levelNumberPrev ) {

      // show multiplication table view for the current level
      if ( self.viewForLevel[ levelNumberCurrent ] ) {
        self.viewForLevel[ levelNumberCurrent ].visible = true;
      }

      // hide previous multiplication table view
      if ( self.viewForLevel[ levelNumberPrev ] ) {
        self.viewForLevel[ levelNumberPrev ].visible = false;
      }
    } );

    // @private - node that will be used to animate the answer moving from the equation to the location of the cell.
    this.flyingProduct = new Text( 'X', {
      font: ArithmeticConstants.EQUATION_FONT_TEXT,
      fill: 'white',
      visible: false
    } );
    this.addChild( this.flyingProduct );

    // @private - define the animation that will move the flying product
    this.flyingProductAnimation = null;

    // update the visible answers each time the user gets a correct answer
    stateProperty.link( function( newState, oldState ) {
      if ( newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK || oldState === GameState.SELECTING_LEVEL ) {

        const level = levelNumberProperty.value; // convenience var
        const levelModel = levelModels[ level ]; // convenience var

        // make sure the appropriate cells are displaying their numerical values
        for ( let multiplicand = 1; multiplicand <= levelModel.tableSize; multiplicand++ ) {
          for ( let multiplier = 1; multiplier <= levelModel.tableSize; multiplier++ ) {
            var cell = self.cells[ levelNumberProperty.value ][ multiplicand ][ multiplier ];
            if ( levelModel.isCellUsed( multiplicand, multiplier ) ) {

              // If the cell is marked as used but the text is not yet visible, animate the product to the cell.
              if ( animateAnswer && !cell.isTextVisible() ) {

                // Animate the product moving from the equation to the appropriate cell within the table.
                ( function() {
                  const destinationCell = cell;
                  self.flyingProduct.text = destinationCell.getTextString();
                  self.flyingProduct.setScaleMagnitude( 1 );
                  const flyingProductDestination = self.globalToLocalPoint( destinationCell.parentToGlobalPoint( destinationCell.center ) );

                  // create the animation
                  self.flyingProductAnimation = new Animation( {
                    duration: ANSWER_ANIMATION_TIME,
                    targets: [

                      // position
                      {
                        object: self.flyingProduct,
                        attribute: 'center',
                        from: ANSWER_ANIMATION_ORIGIN,
                        to: flyingProductDestination,
                        easing: Easing.CUBIC_IN_OUT
                      },

                      // scale
                      {
                        from: 1,
                        to: destinationCell.getTextHeight() / self.flyingProduct.height,
                        setValue: function( newScale ) {
                          self.flyingProduct.setScaleMagnitude( newScale );
                        },
                        easing: Easing.CUBIC_IN_OUT
                      }
                    ]
                  } );
                  self.flyingProductAnimation.beginEmitter.addListener( function() {
                    self.flyingProduct.visible = true;
                  } );
                  self.flyingProductAnimation.finishEmitter.addListener( function() {
                    destinationCell.showText();
                    self.flyingProduct.visible = false;
                    self.flyingProductAnimation = null;
                  } );

                  // start the animation
                  self.flyingProductAnimation.start();
                } )();
              }
              else {
                // No animation, so just show the text.
                cell.showText();
              }
            }
            else {
              cell.hideText();
            }
          }
        }
      }
    } );
  }

  arithmetic.register( 'MultiplicationTableNode', MultiplicationTableNode );

  return inherit( Node, MultiplicationTableNode, {

    /**
     * Set all cells for given level to the default background color
     * @param {number} level
     * @public
     */
    setCellsToDefaultColor: function( level ) {
      this.cells[ level ].forEach( function( multiplicands ) {
        multiplicands.forEach( function( cell ) {
          cell.setNormal();
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

    // @public - refresh the level, may need additional behavior added by subclasses
    refreshLevel: function( level ) {
      if ( this.flyingProductAnimation ) {

        // A refresh was initiated while the animation was in progress.  This is a race condition, and details about
        // it can be seen in https://github.com/phetsims/arithmetic/issues/148.  The animation should be cancelled.
        this.flyingProductAnimation.stop();
        self.flyingProductAnimation = null;
        this.flyingProduct.visible = false;
      }
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
      const cell = this.cells[ level ][ row ][ column ];
      let testNode = cell;
      let parentScreen = null;
      while ( testNode !== null ) {
        if ( testNode instanceof ScreenView ) {
          parentScreen = testNode;
          break;
        }
        testNode = testNode.parents[ 0 ]; // Move up the scene graph by one level
      }
      return parentScreen.globalToLocalPoint( cell.parentToGlobalPoint( cell.center ) );
    }

  } );
} );
