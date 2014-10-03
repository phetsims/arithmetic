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
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Line = require( 'SCENERY/nodes/Line' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var ICON_SIZE = ArithmeticConstants.SCREEN_ICON_SIZE;
  var CONNECTING_LINES_COLOR = '#FFF31E';
  var CONNECTING_LINE_WIDTH = 1.5;
  var NUMBER_FONT = new PhetFont( 9 ); // Font size empirically determined
  var QUESTION_MARK_FONT = new PhetFont( { size: 14, weight: 'bold' } ); // Font size empirically determined
  var BOX_VERTICAL_INSET = 3; // Empirically determined
  var CONNECTING_LINES_OPTIONS = {
    stroke: CONNECTING_LINES_COLOR,
    lineWidth: CONNECTING_LINE_WIDTH,
    lineCap: 'round'
  };

  // utility function for creating a rectangle with text in it.
  function createRectangleWithEnclosedText( text, font, xMargin, yMargin ) {
    var textNode = new Text( text, { font: font } );
    var box = new Rectangle( 0, 0, textNode.width + 2 * xMargin, textNode.height + 2 * yMargin, 2, 2, { fill: 'white' } );
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
    var topBox = createRectangleWithEnclosedText( '12', NUMBER_FONT, 3, 0 );
    topBox.centerX = this.width / 2;
    topBox.top = BOX_VERTICAL_INSET;
    var leftBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 4, 0 );
    leftBox.centerX = ICON_SIZE.width * 0.3;
    leftBox.bottom = ICON_SIZE.height - BOX_VERTICAL_INSET;
    var rightBox = createRectangleWithEnclosedText( '?', QUESTION_MARK_FONT, 4, 0 );
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
