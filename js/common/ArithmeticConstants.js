// Copyright 2002-2013, University of Colorado Boulder

/**
 * Constants for simulation 'Arithmetic'.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );

  return {
    BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    // constants for back button
    BACK_BUTTON: {
      BASE_COLOR: 'rgb( 255, 204, 67 )', // base color of back button
      CORNER_RADIUS: 7, // corner radius of back button
      MARGIN: new Dimension2( 20, 10 ) // margin of background of back button
    },
    // constants for calculator
    CALCULATOR: {
      ARROW_SIZE: 20, // arrow size of enter and backspace
      BASE_COLOR: 'white', // base color for all buttons
      BUTTON_SIZE: new Dimension2( 40, 40 ), // size of buttons
      DISABLE_BASE_COLOR: 'rgb(238,253,77)', // disable base color for all buttons
      SPACING: 10 // spacing between buttons
    },
    // constants for control panel
    CONTROL_PANEL: {
      BACKGROUND: {
        COLOR: 'rgb( 173, 239, 255 )', // color of control panel background
        MARGIN: new Dimension2( 20, 40 ) // size of margin from content
      },
      HSPACING: 5, // spacing between text and values in bottom of control panel
      REFRESH_BUTTON: {
        BASE_COLOR: 'rgb( 255, 204, 67 )', // base color of refresh button
        CORNER_RADIUS: 7, // corner radius of back button
        MARGIN: new Dimension2( 20, 10 ) // margin of background of back button
      },
      SPACING: 18 // spacing between control panel elements
    },
    // constants for equation
    EQUATION: {
      BLINKING_INTERVAL: 0.5, // duration of animation in seconds
      INPUT_SIZE_MULTIPLIER: new Dimension2( 70, 45 ), // size of input buttons
      INPUT_SIZE_PRODUCT: new Dimension2( 80, 45 ), // size of input buttons
      SPACING: 20 // spacing between equation elements
    },
    // max input length
    INPUT_LENGTH_MAX: 3,
    // home screen index
    HOME_SCREEN: -1,
    // constants for multiplication table
    MULTIPLICATION_TABLE: {
      MULTIPLIER_BUTTON: {
        NORMAL_COLOR_BACKGROUND: 'rgb(220,60,33)', // multiplier button background normal color
        SELECT_COLOR_BACKGROUND: 'rgb(0,0,128)', // multiplier button background select color
        NORMAL_COLOR_TEXT: 'white',  // multiplier button text normal color
        SELECT_COLOR_TEXT: 'rgb(255,253,56)'  // multiplier button text select color
      },
      PRODUCT_BUTTON: {
        ACTIVE_COLOR: 'rgb(3,18,136)', // product button active color
        HOVER_COLOR: 'rgb(238,253,77)', // product button hover color
        NORMAL_COLOR: 'rgb(50,70,255)', // product button normal color
        SELECT_COLOR: 'rgb(77,0,153)' // product button select color
      },
      SIZE: new Dimension2( 434, 320 ) // table size
    },
    SCREEN_ICON_SIZE: new Dimension2( 60, 40 ), // size of screen icons
    ICON_BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
    SMILE_DISAPPEAR_TIME: 1000, // time in milliseconds
    STAR_NUMBER: 5, // number of stars in select level buttons
    WORKSPACE_BACKGROUND_COLOR: 'rgb(130,181,252)'
  };
} );