// Copyright 2002-2014, University of Colorado Boulder

/**
 * Times table node.
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
  var TimesTableButtonMultiplierNode = require( 'ARITHMETIC/common/view/table/TimesTableButtonMultiplierNode' );
  var TimesTableButtonProductNode = require( 'ARITHMETIC/common/view/table/TimesTableButtonProductNode' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var TABLE_SIZE = new Dimension2( 365, 270 );

  function TimesTableNode( levelProperty ) {
    var hBox,
      vBox,
      SIZE = 6,
      buttonWidth = TABLE_SIZE.width / (SIZE + 1),
      buttonHeight = TABLE_SIZE.height / (SIZE + 1),
      i,
      j;
    Node.call( this );

    vBox = new VBox();
    for ( i = 0; i <= SIZE; i++ ) {
      hBox = new HBox();
      // first row
      if ( i === 0 ) {
        for ( j = 0; j <= SIZE; j++ ) {
          // first cell is 'X', other - multiplier numbers
          if ( j === 0 ) {
            hBox.addChild( new TimesTableButtonMultiplierNode( 'X', buttonWidth, buttonHeight ) );
          }
          else {
            hBox.addChild( new TimesTableButtonMultiplierNode( j.toString(), buttonWidth, buttonHeight ) );
          }
        }
      }
      // other rows
      else {
        for ( j = 0; j <= SIZE; j++ ) {
          // first cell is multiplier number, other - product numbers
          if ( j === 0 ) {
            hBox.addChild( new TimesTableButtonMultiplierNode( i.toString(), buttonWidth, buttonHeight ) );
          }
          else {
            hBox.addChild( new TimesTableButtonProductNode( (i * j).toString(), buttonWidth, buttonHeight ) );
          }
        }
      }
      vBox.addChild( hBox );
    }

    this.addChild( vBox );

    this._stroke = new Rectangle( 0, 0, 0, 0, {
      stroke: 'black',
      lineWidth: 1.5,
      strokePosition: 'outside'
    } );
    this.addChild( this._stroke );
    this._stroke.setRectWidth( this.bounds.width );
    this._stroke.setRectHeight( this.bounds.height );
  }

  return inherit( Node, TimesTableNode );
} );
