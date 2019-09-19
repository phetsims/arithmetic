// Copyright 2014-2018, University of Colorado Boulder

/**
 * Constants used in multiple locations within the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Screen = require( 'JOIST/Screen' );

  const ArithmeticConstants = {
    BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    CURSOR_BLINK_INTERVAL: 500, // duration of animation in milliseconds
    EQUATION_FONT_TEXT: new PhetFont( { size: 32 } ),
    ICON_BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    INPUT_LENGTH_MAX: 3, // max input length
    SCREEN_ICON_SIZE: Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, // size of screen icons
    NUM_STARS: 5, // number of stars in select level buttons
    WORKSPACE_BACKGROUND_COLOR: 'rgb(130,181,252)'
  };

  arithmetic.register( 'ArithmeticConstants', ArithmeticConstants );

  return ArithmeticConstants;
} );