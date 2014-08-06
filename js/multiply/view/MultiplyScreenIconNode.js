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
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ICON_SIZE = CONSTANTS.SCREEN_ICON_SIZE;

  function MultiplyScreenIconNode() {

    // create the background
    Rectangle.call( this, 0, 0, ICON_SIZE.width, ICON_SIZE.height, { fill: CONSTANTS.ICON_BACKGROUND_COLOR } );

    // add the multiply symbol
    var multiplySymbol = new Text( '\u2715', { font: new PhetFont( { size: 20, weight: 'bold' } ), fill: '#FFF31E' } );
    multiplySymbol.scale( ICON_SIZE.height / multiplySymbol.height );
    multiplySymbol.centerX = ICON_SIZE.width / 2;
    multiplySymbol.centerY = ICON_SIZE.height / 2;
    this.addChild( multiplySymbol );
  }

  return inherit( Rectangle, MultiplyScreenIconNode );
} );
