// Copyright 2014-2022, University of Colorado Boulder

/**
 * Icon node for 'Factor' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */

import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Line, Rectangle, Text } from '../../../../scenery/js/imports.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../../common/ArithmeticConstants.js';

// constants
const ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
const CONNECTING_LINES_COLOR = '#FFF31E';
const CONNECTING_LINE_WIDTH = 15;
const NUMBER_FONT = new PhetFont( 90 ); // Font size empirically determined
const QUESTION_MARK_FONT = new PhetFont( { size: 120, weight: 'bold' } ); // Font size empirically determined
const BOX_VERTICAL_INSET = 25; // Empirically determined
const CONNECTING_LINES_OPTIONS = {
  stroke: CONNECTING_LINES_COLOR,
  lineWidth: CONNECTING_LINE_WIDTH,
  lineCap: 'round'
};

// utility function for creating a rectangle with text in it.
function createRectangleWithEnclosedText( text, font, xMargin, yMargin ) {
  const textNode = new Text( text, { font: font } );
  const box = new Rectangle( 0, 0, textNode.width + 2 * xMargin, textNode.height + 2 * yMargin, 20, 20, { fill: 'white' } );
  textNode.center = box.center;
  box.addChild( textNode );
  return box;
}

class FactorScreenIconNode extends Rectangle {

  /**
   */
  constructor() {

    // create the background
    super( 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

    // Create and position the boxes, but don't add them yet so that we can get the layering right.
    const topBox = createRectangleWithEnclosedText( '12', NUMBER_FONT, 15, 5 );
    topBox.centerX = this.width / 2;
    topBox.top = BOX_VERTICAL_INSET;
    const multiplicandBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 20, 5 );
    multiplicandBox.centerX = ICON_SIZE.width * 0.3;
    multiplicandBox.bottom = ICON_SIZE.height - BOX_VERTICAL_INSET;
    const multiplierBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 20, 5 );
    multiplierBox.centerX = ICON_SIZE.width * 0.7;
    multiplierBox.bottom = multiplicandBox.bottom;

    // Add the connecting lines
    this.addChild( new Line( topBox.centerX, topBox.bottom, multiplicandBox.centerX, multiplicandBox.top, CONNECTING_LINES_OPTIONS ) );
    this.addChild( new Line( topBox.centerX, topBox.bottom, multiplierBox.centerX, multiplierBox.top, CONNECTING_LINES_OPTIONS ) );

    // Add the text boxes
    this.addChild( topBox );
    this.addChild( multiplicandBox );
    this.addChild( multiplierBox );
  }
}

arithmetic.register( 'FactorScreenIconNode', FactorScreenIconNode );

export default FactorScreenIconNode;