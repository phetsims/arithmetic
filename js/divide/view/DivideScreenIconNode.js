// Copyright 2014-2019, University of Colorado Boulder

/**
 * Icon node for 'Divide' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const Circle = require( 'SCENERY/nodes/Circle' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Line = require( 'SCENERY/nodes/Line' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  const ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
  const SYMBOL_COLOR = '#FFF31E';
  const CIRCLE_RADIUS = 30; // Empirically determined

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

  arithmetic.register( 'DivideScreenIconNode', DivideScreenIconNode );

  return inherit( Rectangle, DivideScreenIconNode );
} );
