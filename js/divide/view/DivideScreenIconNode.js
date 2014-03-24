// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Divide' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' ),
    VBox = require( 'SCENERY/nodes/VBox' ),
    Circle = require( 'SCENERY/nodes/Circle' ),
    Rectangle = require( 'SCENERY/nodes/rectangle' ),
    Text = require( 'SCENERY/nodes/Text' ),
    PhetFont = require( 'SCENERY_PHET/PhetFont' ),
    Constants = require( 'ARITHMETIC/common/model/Constants' ),

  // strings
    divideString = require( 'string!ARITHMETIC/divide' ),

  // constants
    ICON_WIDTH = Constants.SCREEN_ICON_WIDTH,
    ICON_HEIGHT = Constants.SCREEN_ICON_HEIGHT,
    DIVIDE_SIGN_POINT_RADIUS = 1,
    DIVIDE_SIGN_CENTRAL_RECT_WIDTH = 10,
    DIVIDE_SIGN_CENTRAL_RECT_HEIGHT = 1,
    FONT = new PhetFont( 12 );

  function DivideScreenIconNode() {
    Rectangle.call( this, 0, 0, ICON_WIDTH, ICON_HEIGHT, {fill: 'white'} );

    // add text
    this.addChild( new Text( divideString, {font: FONT, centerX: ICON_WIDTH / 2, centerY: ICON_HEIGHT / 4} ) );

    // add divide sign
    this.addChild( new VBox( {centerX: ICON_WIDTH / 2, centerY: 3 * ICON_HEIGHT / 4, spacing: 2, children: [
      new Circle( DIVIDE_SIGN_POINT_RADIUS, {fill: 'black'} ),
      new Rectangle( 0, 0, DIVIDE_SIGN_CENTRAL_RECT_WIDTH, DIVIDE_SIGN_CENTRAL_RECT_HEIGHT, {fill: 'black'} ),
      new Circle( DIVIDE_SIGN_POINT_RADIUS, {fill: 'black'} )
    ]} ) );
  }

  return inherit( Rectangle, DivideScreenIconNode );
} );
