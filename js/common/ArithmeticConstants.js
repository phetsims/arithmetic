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
    BACKGROUND_COLOR: 'rgb(255,245,236)',
    // constants for back button
    BACK_BUTTON: {
      ARROW_SIZE: 28, // arrow size of back button
      BASE_COLOR: 'rgb(243,238,103)' // base color of back button
    },
    // constants for calculator
    CALCULATOR: {
      ARROW_SIZE: 28, // arrow size of enter and backspace
      BASE_COLOR: 'white', // disable base color for all buttons
      BUTTON_SIZE: new Dimension2( 40, 40 ), // size of buttons
      DISABLE_BASE_COLOR: 'rgb(234,255,43)', // disable base color for all buttons
      SPACING: 10 // spacing between buttons
    },
    // constants for control panel
    CONTROL_PANEL: {
      BACKGROUND: {
        COLOR: 'rgb(254,208,153)', // color of control panel background
        MARGIN: 20 // margin from content
      },
      REFRESH_BUTTON_COLOR: 'rgb(244,133,24)', // color of refresh button
      SPACING: 18 // spacing between control panel elements
    },
    // constants for equation
    EQUATION: {
      BLINKING_INTERVAL: 0.5, // duration of animation in seconds
      INPUT_SIZE_MULTIPLIER: new Dimension2( 60, 40 ), // size of input buttons
      INPUT_SIZE_PRODUCT: new Dimension2( 80, 40 ), // size of input buttons
      SPACING: 10 // spacing between equation elements
    },
    // max input length
    INPUT_LENGTH_MAX: 3,
    // constants for multiplication table
    MULTIPLICATION_TABLE: {
      MULTIPLIER_BUTTON: {
        NORMAL_COLOR: 'rgb(218,36,5)', // multiplier button normal color
        SELECT_COLOR: 'rgb(244,133,9)' // multiplier button select color
      },
      PRODUCT_BUTTON: {
        ACTIVE_COLOR: 'rgb(145,145,254)', // product button active color
        HOVER_COLOR: 'rgb(234,255,43)', // product button hover color
        NORMAL_COLOR: 'rgb(15,0,255)', // product button normal color
        SELECT_COLOR: 'rgb(14,12,70)' // product button select color
      },
      SIZE: new Dimension2( 434, 320 ) // table size
    },
    SCREEN_ICON_SIZE: new Dimension2( 60, 40 ), // size of screen icons
    STAR_NUMBER: 5 // number of stars in select level buttons
  };
} );