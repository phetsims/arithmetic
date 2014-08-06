// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen icon node for 'Multiply' game.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ICON_SIZE = CONSTANTS.SCREEN_ICON_SIZE;
  var SYMBOL_COLOR = '#FFF31E';

  /**
   * @constructor
   */
  function MultiplyScreenIconNode() {

    // create the background
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: CONSTANTS.ICON_BACKGROUND_COLOR } );

    // Add the multiply symbol.  Create our own rather than use the Unicode char, since this gives us more control.
    var symbolWidth = ICON_SIZE.width * 0.3;
    this.addChild( new Line( 0, 0, symbolWidth, symbolWidth, {
      stroke: SYMBOL_COLOR,
      lineWidth: 4, // empirically determined
      center: this.center
    } ) );
    this.addChild( new Line( symbolWidth, 0, 0, symbolWidth, {
      stroke: SYMBOL_COLOR,
      lineWidth: 4, // empirically determined
      center: this.center
    } ) );
  }

  return inherit( Rectangle, MultiplyScreenIconNode );
} );
