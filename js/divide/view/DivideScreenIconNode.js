// Copyright 2002-2014, University of Colorado Boulder

/**
 * Icon node for 'Divide' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Circle = require( 'SCENERY/nodes/Circle' );
  var Line = require( 'SCENERY/nodes/Line' );

  // constants
  var ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
  var SYMBOL_COLOR = '#FFF31E';
  var CIRCLE_RADIUS = 30; // Empirically determined

  /**
   * @constructor
   */
  function DivideScreenIconNode() {

    // create the background
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

    // Create and add the divide symbol.  We are doing our own, since the Unicode one doesn't look very good.
    this.addChild( new Line( 0, 0, ICON_SIZE.width * 0.4, 0, {
      stroke: SYMBOL_COLOR,
      lineWidth: 33, // empirically determined
      center: this.center
    } ) );
    this.addChild( new Circle( CIRCLE_RADIUS, {
      fill: SYMBOL_COLOR,
      centerX: ICON_SIZE.width / 2,
      centerY: ICON_SIZE.height * 0.3
    } ) );
    this.addChild( new Circle( CIRCLE_RADIUS, {
      fill: SYMBOL_COLOR,
      centerX: ICON_SIZE.width / 2,
      centerY: ICON_SIZE.height * 0.7
    } ) );
  }

  return inherit( Rectangle, DivideScreenIconNode );
} );
