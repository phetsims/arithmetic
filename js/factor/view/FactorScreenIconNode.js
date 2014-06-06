// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Factor' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var factorString = require( 'string!ARITHMETIC/factor' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ICON_SIZE = CONSTANTS.SCREEN_ICON_SIZE;
  var FONT_NUMBERS = new PhetFont( 10 );
  var FONT_TITLE = new PhetFont( 12 );
  var LINE_LENGTH = ICON_SIZE.height / 8;

  function FactorScreenIconNode() {
    var text6 = new Text( '6', {font: FONT_NUMBERS, centerX: 0} );
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, {fill: 'white'} );

    // add text
    this.addChild( new Text( factorString, {font: FONT_TITLE, centerX: ICON_SIZE.width / 2, centerY: ICON_SIZE.height / 4} ) );

    // add factor scheme
    this.addChild( new Node( {centerX: ICON_SIZE.width / 2, centerY: 2 * ICON_SIZE.height / 3, children: [
      text6,
      new Line( text6.getWidth() / 2, 0, LINE_LENGTH + text6.getWidth() / 2, LINE_LENGTH, {stroke: 'black', lineWidth: 0.5} ),
      new Line( -text6.getWidth() / 2, 0, -LINE_LENGTH - text6.getWidth() / 2, LINE_LENGTH, {stroke: 'black', lineWidth: 0.5} ),
      new Text( '3', {font: FONT_NUMBERS, centerX: LINE_LENGTH + text6.getWidth(), centerY: LINE_LENGTH + text6.getHeight() / 3} ),
      new Text( '2', {font: FONT_NUMBERS, centerX: -LINE_LENGTH - text6.getWidth(), centerY: LINE_LENGTH + text6.getHeight() / 3} )
    ]} ) );
  }

  return inherit( Rectangle, FactorScreenIconNode );
} );
