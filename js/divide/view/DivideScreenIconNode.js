// Copyright 2014-2022, University of Colorado Boulder

/**
 * Icon node for 'Divide' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */

import { Circle, Line, Rectangle } from '../../../../scenery/js/imports.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../../common/ArithmeticConstants.js';

// constants
const ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
const SYMBOL_COLOR = '#FFF31E';
const CIRCLE_RADIUS = 30; // Empirically determined

class DivideScreenIconNode extends Rectangle {

  /**
   */
  constructor() {

    // create the background
    super( 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

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
}

arithmetic.register( 'DivideScreenIconNode', DivideScreenIconNode );

export default DivideScreenIconNode;