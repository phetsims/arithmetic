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
    BACKGROUND_COLOR: '#95bcff',
    // constants for back button
    BACK_BUTTON: {
      BASE_COLOR: '#ffcc43', // base color of back button
      CORNER_RADIUS: 7, // corner radius of back button
      STROKE: 'none', // stroke of back button
      MARGIN: new Dimension2( 20, 10 ) // margin of background of back button
    },
    // constants for calculator
    CALCULATOR: {
      ARROW_SIZE: 28, // arrow size of enter and backspace
      BASE_COLOR: '#ADEFFF', // base color for all buttons
      BUTTON_SIZE: new Dimension2( 40, 40 ), // size of buttons
      DISABLE_BASE_COLOR: 'rgb(234,255,43)', // disable base color for all buttons
      SPACING: 10 // spacing between buttons
    },
    // constants for control panel
    CONTROL_PANEL: {
      BACKGROUND: {
        COLOR: '#95bcff', // color of control panel background
        MARGIN: new Dimension2( 20, 40 ) // size of margin from content
      },
      HSPASING: 5, // spacing between text and values in bottom of control panel
      REFRESH_BUTTON: {
        BASE_COLOR: '#ffcc43', // base color of back button
        CORNER_RADIUS: 7, // corner radius of back button
        STROKE: 'none', // stroke of back button
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
    // constants for multiplication table
    MULTIPLICATION_TABLE: {
      MULTIPLIER_BUTTON: {
        NORMAL_COLOR_BACKGROUND: 'rgb(239,0,15)', // multiplier button background normal color
        SELECT_COLOR_BACKGROUND: 'rgb(3,0,205)', // multiplier button background select color
        NORMAL_COLOR_TEXT: 'white',  // multiplier button text normal color
        SELECT_COLOR_TEXT: 'yellow'  // multiplier button text select color
      },
      PRODUCT_BUTTON: {
        ACTIVE_COLOR: 'rgb(0,0,119)', // product button active color
        HOVER_COLOR: 'rgb(234,255,43)', // product button hover color
        NORMAL_COLOR: 'rgb(3,0,255)', // product button normal color
        SELECT_COLOR: 'rgb(14,12,70)' // product button select color
      },
      SIZE: new Dimension2( 434, 320 ) // table size
    },
    SCREEN_ICON_SIZE: new Dimension2( 60, 40 ), // size of screen icons
    STAR_NUMBER: 5, // number of stars in select level buttons
    WORKSPACE_BACKGROUND_COLOR: 'rgb(16,88,253)'
  };
} );