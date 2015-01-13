// Copyright 2002-2013, University of Colorado Boulder

/**
 * Constants used in multiple locations within the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );

  return {
    BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    CURSOR_BLINK_INTERVAL: 500, // duration of animation in milliseconds
    EQUATION_FONT_TEXT: new PhetFont( { size: 32 } ),
    ICON_BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    INPUT_LENGTH_MAX: 3, // max input length
    SCREEN_ICON_SIZE: new Dimension2( 60, 40 ), // size of screen icons
    STAR_NUMBER: 5, // number of stars in select level buttons
    WORKSPACE_BACKGROUND_COLOR: 'rgb(130,181,252)'
  };
} );