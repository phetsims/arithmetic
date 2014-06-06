// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Divide' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Circle = require( 'SCENERY/nodes/Circle' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var DIVIDE_SIGN_CENTRAL_RECT_HEIGHT = 1;
  var DIVIDE_SIGN_CENTRAL_RECT_WIDTH = 10;
  var DIVIDE_SIGN_POINT_RADIUS = 1;
  var ICON_SIZE = CONSTANTS.SCREEN_ICON_SIZE;
  var FONT = new PhetFont( 12 );

  function DivideScreenIconNode() {
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, {fill: 'white'} );

    // add text
    this.addChild( new Text( divideString, {font: FONT, centerX: ICON_SIZE.width / 2, centerY: ICON_SIZE.height / 4} ) );

    // add divide sign
    this.addChild( new VBox( {centerX: ICON_SIZE.width / 2, centerY: 3 * ICON_SIZE.height / 4, spacing: 2, children: [
      new Circle( DIVIDE_SIGN_POINT_RADIUS, {fill: 'black'} ),
      new Rectangle( 0, 0, DIVIDE_SIGN_CENTRAL_RECT_WIDTH, DIVIDE_SIGN_CENTRAL_RECT_HEIGHT, {fill: 'black'} ),
      new Circle( DIVIDE_SIGN_POINT_RADIUS, {fill: 'black'} )
    ]} ) );
  }

  return inherit( Rectangle, DivideScreenIconNode );
} );
