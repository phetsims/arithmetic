// Copyright 2014-2017, University of Colorado Boulder

/**
 * Icon node for 'Multiply' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  var ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
  var SYMBOL_COLOR = '#FFF31E';
  var LINE_WIDTH = 33; // empirically determined

  /**
   * @constructor
   */
  function MultiplyScreenIconNode() {

    // create the background
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

    // Add the multiply symbol.  Create our own rather than use the Unicode char, since this gives us more control.
    var symbolWidth = ICON_SIZE.width * 0.3;
    this.addChild( new Line( 0, 0, symbolWidth, symbolWidth, {
      stroke: SYMBOL_COLOR,
      lineWidth: LINE_WIDTH,
      center: this.center
    } ) );
    this.addChild( new Line( symbolWidth, 0, 0, symbolWidth, {
      stroke: SYMBOL_COLOR,
      lineWidth: LINE_WIDTH, // empirically determined
      center: this.center
    } ) );
  }

  arithmetic.register( 'MultiplyScreenIconNode', MultiplyScreenIconNode );

  return inherit( Rectangle, MultiplyScreenIconNode );
} );
