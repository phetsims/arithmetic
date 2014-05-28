// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var Constants = require( 'ARITHMETIC/common/model/Constants' ).MULTIPLICATION_TABLE;
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var MultiplicationTableButtonMultiplierNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonMultiplierNode' );
  var MultiplicationTableButtonProductNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonProductNode' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var TABLE_SIZE = Constants.SIZE;

  function MultiplicationTableNode( levelProperty, levels ) {
    var self = this;
    Node.call( this );

    // array with views for each level
    this._viewForLevel = [];

    // links to table cells. Indexes: [levelNumber][leftMultiplier][rightMultiplier]
    this.cells = [];

    // create view of times table for levels
    levels.forEach( function( level, levelIndex ) {
      var hBox,
        vBox = new VBox( {visible: false} ),
        tableSize = level.tableSize,
        buttonWidth = TABLE_SIZE.width / (tableSize + 1),
        buttonHeight = TABLE_SIZE.height / (tableSize + 1),
        i,
        j;

      self.cells[levelIndex] = [];

      for ( i = 0; i <= tableSize; i++ ) {
        hBox = new HBox();
        self.cells[levelIndex][i] = [];
        // first row
        if ( i === 0 ) {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is 'X', other - multiplier numbers
            if ( j === 0 ) {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( 'X', buttonWidth, buttonHeight ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( j.toString(), buttonWidth, buttonHeight ) );
            }
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( i.toString(), buttonWidth, buttonHeight ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonProductNode( (i * j).toString(), buttonWidth, buttonHeight ) );
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
      self._viewForLevel[levelIndex + 1] = vBox;
    } );

    // add stroke for all multiplication table views
    this.addChild( new Rectangle( 0, 0, this.bounds.width, this.bounds.height, {
      stroke: 'black',
      lineWidth: 1,
      strokePosition: 'outside'
    } ) );

    levelProperty.link( function( levelNumberCurrent, levelNumberPrev ) {
      // show current multiplication table view for level
      if ( self._viewForLevel[levelNumberCurrent] ) {
        self._viewForLevel[levelNumberCurrent].visible = true;
      }

      // hide previous multiplication table view
      if ( self._viewForLevel[levelNumberPrev] ) {
        self._viewForLevel[levelNumberPrev].visible = false;
        self.clearCells( levelNumberPrev );
      }
    } );
  }

  return inherit( Node, MultiplicationTableNode, {
    // clear all cells for given level
    clearCells: function( levelNumber ) {
      this.cells[levelNumber - 1].forEach( function( multipliersLeft ) {
        multipliersLeft.forEach( function( cell ) {
          cell.normal();
        } );
      } );
    }
  } );
} );
