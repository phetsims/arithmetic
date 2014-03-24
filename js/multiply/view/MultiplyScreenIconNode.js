// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Multiply' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' ),
    Rectangle = require( 'SCENERY/nodes/rectangle' ),
    Text = require( 'SCENERY/nodes/Text' ),
    PhetFont = require( 'SCENERY_PHET/PhetFont' ),
    Constants = require( 'ARITHMETIC/common/model/Constants' ),

  // strings
    multiplyString = require( 'string!ARITHMETIC/multiply' ),

  // constants
    ICON_WIDTH = Constants.SCREEN_ICON_WIDTH,
    ICON_HEIGHT = Constants.SCREEN_ICON_HEIGHT,
    FONT_TITLE = new PhetFont( 12 ),
    FONT_X = new PhetFont( 18 );

  function MultiplyScreenIconNode() {
    Rectangle.call( this, 0, 0, ICON_WIDTH, ICON_HEIGHT, {fill: 'white'} );

    // add text
    this.addChild( new Text( multiplyString, {font: FONT_TITLE, centerX: ICON_WIDTH / 2, centerY: ICON_HEIGHT / 4} ) );

    // add multiply sign
    this.addChild( new Text( 'X', {font: FONT_X, centerX: ICON_WIDTH / 2, centerY: 3 * ICON_HEIGHT / 4} ) );
  }

  return inherit( Rectangle, MultiplyScreenIconNode );
} );
