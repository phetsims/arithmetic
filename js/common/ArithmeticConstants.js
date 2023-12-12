// Copyright 2014-2023, University of Colorado Boulder

/**
 * Constants used in multiple locations within the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Screen from '../../../joist/js/Screen.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import arithmetic from '../arithmetic.js';

const ArithmeticConstants = {
  BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
  CURSOR_BLINK_INTERVAL: 500, // duration of animation in milliseconds
  EQUATION_FONT_TEXT: new PhetFont( { size: 32 } ),
  ICON_BACKGROUND_COLOR: 'rgb( 173, 202, 255 )',
  INPUT_LENGTH_MAX: 3, // max input length
  SCREEN_ICON_SIZE: Screen.MINIMUM_HOME_SCREEN_ICON_SIZE, // size of screen icons
  NUM_STARS: 5, // number of stars in select level buttons
  WORKSPACE_BACKGROUND_COLOR: 'rgb(130,181,252)',
  LEVEL_1_TABLE_SIZE: 6,
  LEVEL_2_TABLE_SIZE: 9,
  LEVEL_3_TABLE_SIZE: 12,
  CONTROL_PANEL_VBOX_SPACING: 22 // empirically determined to match 2015 published version
};

arithmetic.register( 'ArithmeticConstants', ArithmeticConstants );

export default ArithmeticConstants;