// Copyright 2002-2013, University of Colorado Boulder

/**
 * Constants for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );

  return {
    BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    CURSOR_BLINK_INTERVAL: 500, // duration of animation in milliseconds
    INPUT_LENGTH_MAX: 3, // max input length
    SCREEN_ICON_SIZE: new Dimension2( 60, 40 ), // size of screen icons
    ICON_BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    SMILE_DISAPPEAR_TIME: 1000, // time in milliseconds
    STAR_NUMBER: 5, // number of stars in select level buttons
    WORKSPACE_BACKGROUND_COLOR: 'rgb(130,181,252)'
  };
} );