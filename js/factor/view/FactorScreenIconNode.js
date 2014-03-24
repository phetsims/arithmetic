// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Factor' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' ),
    Node = require( 'SCENERY/nodes/Node' ),
    Rectangle = require( 'SCENERY/nodes/rectangle' ),
    Line = require( 'SCENERY/nodes/Line' ),
    Text = require( 'SCENERY/nodes/Text' ),
    PhetFont = require( 'SCENERY_PHET/PhetFont' ),
    Constants = require( 'ARITHMETIC/common/model/Constants' ),

  // strings
    factorString = require( 'string!ARITHMETIC/factor' ),

  // constants
    ICON_WIDTH = Constants.SCREEN_ICON_WIDTH,
    ICON_HEIGHT = Constants.SCREEN_ICON_HEIGHT,
    LINE_LENGTH = ICON_HEIGHT / 8,
    FONT_TITLE = new PhetFont( 12 ),
    FONT_NUMBERS = new PhetFont( 10 );

  function FactorScreenIconNode() {
    var text6;
    Rectangle.call( this, 0, 0, ICON_WIDTH, ICON_HEIGHT, {fill: 'white'} );

    // add text
    this.addChild( new Text( factorString, {font: FONT_TITLE, centerX: ICON_WIDTH / 2, centerY: ICON_HEIGHT / 4} ) );

    // add factor scheme
    this.addChild( new Node( {centerX: ICON_WIDTH / 2, centerY: 2 * ICON_HEIGHT / 3, children: [
      text6 = new Text( '6', {font: FONT_NUMBERS, centerX: 0} ),
      new Line( text6.getWidth() / 2, 0, LINE_LENGTH + text6.getWidth() / 2, LINE_LENGTH, {stroke: 'black', lineWidth: 0.5} ),
      new Line( -text6.getWidth() / 2, 0, -LINE_LENGTH - text6.getWidth() / 2, LINE_LENGTH, {stroke: 'black', lineWidth: 0.5} ),
      new Text( '3', {font: FONT_NUMBERS, centerX: LINE_LENGTH + text6.getWidth(), centerY: LINE_LENGTH + text6.getHeight() / 3} ),
      new Text( '2', {font: FONT_NUMBERS, centerX: -LINE_LENGTH - text6.getWidth(), centerY: LINE_LENGTH + text6.getHeight() / 3} )
    ]} ) );
  }

  return inherit( Rectangle, FactorScreenIconNode );
} );
