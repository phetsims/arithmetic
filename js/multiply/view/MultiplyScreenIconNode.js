// Copyright 2014-2022, University of Colorado Boulder

/**
 * Icon node for 'Multiply' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */

import { Line, Rectangle } from '../../../../scenery/js/imports.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../../common/ArithmeticConstants.js';

// constants
const ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
const SYMBOL_COLOR = '#FFF31E';
const LINE_WIDTH = 33; // empirically determined

class MultiplyScreenIconNode extends Rectangle {

  /**
   */
  constructor() {

    // create the background
    super( 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

    // Add the multiply symbol.  Create our own rather than use the Unicode char, since this gives us more control.
    const symbolWidth = ICON_SIZE.width * 0.3;
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
}

arithmetic.register( 'MultiplyScreenIconNode', MultiplyScreenIconNode );

export default MultiplyScreenIconNode;