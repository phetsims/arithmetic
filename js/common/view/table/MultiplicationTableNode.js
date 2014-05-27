// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var MultiplicationTableButtonMultiplierNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonMultiplierNode' );
  var MultiplicationTableButtonProductNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonProductNode' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var TABLE_SIZE = new Dimension2( 434, 320 );

  function MultiplicationTableNode( levelProperty, levels ) {
    var self = this;
    Node.call( this );

    this._viewForLevel = [];

    // create view of times table for levels
    levels.forEach( function( level, levelIndex ) {
      var hBox,
        vBox = new VBox( {visible: false} ),
        tableSize = level.tableSize,
        buttonWidth = TABLE_SIZE.width / (tableSize + 1),
        buttonHeight = TABLE_SIZE.height / (tableSize + 1),
        i,
        j;

      for ( i = 0; i <= tableSize; i++ ) {
        hBox = new HBox();
        // first row
        if ( i === 0 ) {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is 'X', other - multiplier numbers
            if ( j === 0 ) {
              hBox.addChild( new MultiplicationTableButtonMultiplierNode( 'X', buttonWidth, buttonHeight ) );
            }
            else {
              hBox.addChild( new MultiplicationTableButtonMultiplierNode( j.toString(), buttonWidth, buttonHeight ) );
            }
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              hBox.addChild( new MultiplicationTableButtonMultiplierNode( i.toString(), buttonWidth, buttonHeight ) );
            }
            else {
              hBox.addChild( new MultiplicationTableButtonProductNode( (i * j).toString(), buttonWidth, buttonHeight ) );
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

    // add stroke for all times table views
    this.addChild( new Rectangle( 0, 0, this.bounds.width, this.bounds.height, {
      stroke: 'black',
      lineWidth: 1,
      strokePosition: 'outside'
    } ) );

    levelProperty.link( function( levelNumberNext, levelNumberPrev ) {
      // show current times table view for level
      if ( self._viewForLevel[levelNumberNext] ) {
        self._viewForLevel[levelNumberNext].visible = true;
      }

      // hide previous times table view
      if ( self._viewForLevel[levelNumberPrev] ) {
        self._viewForLevel[levelNumberPrev].visible = false;
      }
    } );
  }

  return inherit( Node, MultiplicationTableNode, {

  } );
} );
