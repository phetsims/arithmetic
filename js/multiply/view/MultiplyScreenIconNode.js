// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Multiply' game.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var FONT_TITLE = new PhetFont( 12 );
  var FONT_X = new PhetFont( 18 );
  var ICON_SIZE = CONSTANTS.SCREEN_ICON_SIZE;

  function MultiplyScreenIconNode() {
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, {fill: 'white'} );

    // add text
    this.addChild( new Text( multiplyString, {font: FONT_TITLE, centerX: ICON_SIZE.width / 2, centerY: ICON_SIZE.height / 4} ) );

    // add multiply sign
    this.addChild( new Text( 'X', {font: FONT_X, centerX: ICON_SIZE.width / 2, centerY: 3 * ICON_SIZE.height / 4} ) );
  }

  return inherit( Rectangle, MultiplyScreenIconNode );
} );
