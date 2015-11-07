// Copyright 2014-2015, University of Colorado Boulder

/**
 * Icon node for 'Factor' screen.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
  var CONNECTING_LINES_COLOR = '#FFF31E';
  var CONNECTING_LINE_WIDTH = 15;
  var NUMBER_FONT = new PhetFont( 90 ); // Font size empirically determined
  var QUESTION_MARK_FONT = new PhetFont( { size: 120, weight: 'bold' } ); // Font size empirically determined
  var BOX_VERTICAL_INSET = 25; // Empirically determined
  var CONNECTING_LINES_OPTIONS = {
    stroke: CONNECTING_LINES_COLOR,
    lineWidth: CONNECTING_LINE_WIDTH,
    lineCap: 'round'
  };

  // utility function for creating a rectangle with text in it.
  function createRectangleWithEnclosedText( text, font, xMargin, yMargin ) {
    var textNode = new Text( text, { font: font } );
    var box = new Rectangle( 0, 0, textNode.width + 2 * xMargin, textNode.height + 2 * yMargin, 20, 20, { fill: 'white' } );
    textNode.center = box.center;
    box.addChild( textNode );
    return box;
  }

  /**
   * @constructor
   */
  function FactorScreenIconNode() {

    // create the background
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: ArithmeticConstants.ICON_BACKGROUND_COLOR } );

    // Create and position the boxes, but don't add them yet so that we can get the layering right.
    var topBox = createRectangleWithEnclosedText( '12', NUMBER_FONT, 15, 5 );
    topBox.centerX = this.width / 2;
    topBox.top = BOX_VERTICAL_INSET;
    var leftBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 20, 5 );
    leftBox.centerX = ICON_SIZE.width * 0.3;
    leftBox.bottom = ICON_SIZE.height - BOX_VERTICAL_INSET;
    var rightBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 20, 5 );
    rightBox.centerX = ICON_SIZE.width * 0.7;
    rightBox.bottom = leftBox.bottom;

    // Add the connecting lines
    this.addChild( new Line( topBox.centerX, topBox.bottom, leftBox.centerX, leftBox.top, CONNECTING_LINES_OPTIONS ) );
    this.addChild( new Line( topBox.centerX, topBox.bottom, rightBox.centerX, rightBox.top, CONNECTING_LINES_OPTIONS ) );

    // Add the text boxes
    this.addChild( topBox );
    this.addChild( leftBox );
    this.addChild( rightBox );
  }

  return inherit( Rectangle, FactorScreenIconNode );
} );
