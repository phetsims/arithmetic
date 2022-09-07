// Copyright 2014-2022, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import merge from '../../../../phet-core/js/merge.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TimerToggleButton from '../../../../scenery-phet/js/buttons/TimerToggleButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { HBox, Image, Node, Text, VBox } from '../../../../scenery/js/imports.js';
import LevelSelectionButton from '../../../../vegas/js/LevelSelectionButton.js';
import ScoreDisplayStars from '../../../../vegas/js/ScoreDisplayStars.js';
import divideLevel1Icon_png from '../../../mipmaps/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/multiplyLevel3Icon_png.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import ArithmeticConstants from '../ArithmeticConstants.js';
import ArithmeticGlobals from '../ArithmeticGlobals.js';

// constants
const CHOOSE_LEVEL_TITLE_FONT = new PhetFont( { size: 24 } );
const TAB_TITLE_FONT = new PhetFont( { size: 54 } );
const BUTTON_LENGTH = 150;

// icon sets, used to place on the buttons
const ICON_SETS = {
  multiply: [
    multiplyLevel1Icon_png,
    multiplyLevel2Icon_png,
    multiplyLevel3Icon_png
  ],
  factor: [
    factorLevel1Icon_png,
    factorLevel2Icon_png,
    factorLevel3Icon_png
  ],
  divide: [
    divideLevel1Icon_png,
    divideLevel2Icon_png,
    divideLevel3Icon_png
  ]
};

const chooseYourLevelString = ArithmeticStrings.chooseYourLevel;

class LevelSelectionNode extends Node {

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {string} titleString - Title string for given screen.
   * @param {Function} callback - Callback function call after pressing button.
   * @param {Bounds2} layoutBounds - Bounds of screen on which this will appear, used for layout
   * @param {Object} [options]
   */
  constructor( model, titleString, callback, layoutBounds, options ) {
    super();

    // Default options
    options = merge( {
      buttonBaseColor: 'white',
      iconSet: 'multiply' // valid values are 'multiply', 'factor', and 'divide'
    }, options );

    // add title
    const tabTitle = new Text( titleString, {
      font: TAB_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: layoutBounds.height * 0.1
    } );
    this.addChild( tabTitle );

    // add choose level title
    const chooseLevelTitle = new Text( chooseYourLevelString, {
      font: CHOOSE_LEVEL_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: tabTitle.bottom + 15
    } );
    this.addChild( chooseLevelTitle );

    // add select level buttons
    assert && assert( model.levelModels.length === ICON_SETS[ options.iconSet ].length, 'Number of icons doesn\'t match number of levels' );
    const levelSelectButtons = model.levelModels.map( ( level, levelIndex ) => new LevelSelectionButton(
      new Image( ICON_SETS[ options.iconSet ][ levelIndex ] ),
      model.levelModels[ levelIndex ].displayScoreProperty,
      {
        buttonWidth: BUTTON_LENGTH,
        buttonHeight: BUTTON_LENGTH,
        baseColor: options.buttonBaseColor,
        bestTimeProperty: model.levelModels[ levelIndex ].bestTimeProperty,
        bestTimeVisibleProperty: ArithmeticGlobals.timerEnabledProperty,
        listener: () => {
          callback( levelIndex );
        },
        createScoreDisplay: scoreProperty => new ScoreDisplayStars( scoreProperty, {
          numberOfStars: ArithmeticConstants.NUM_STARS,
          perfectScore: level.perfectScore
        } ),
        soundPlayerIndex: levelIndex
      }
    ) );
    const selectLevelButtonsHBox = new HBox( { spacing: 50, children: levelSelectButtons } );
    selectLevelButtonsHBox.top = chooseLevelTitle.bottom + 15;
    selectLevelButtonsHBox.centerX = chooseLevelTitle.centerX;
    this.addChild( selectLevelButtonsHBox );

    // add timer and sound buttons
    const soundAndTimerButtons = new VBox( {
      spacing: 5,
      children: [
        new TimerToggleButton( ArithmeticGlobals.timerEnabledProperty )
      ],
      right: layoutBounds.maxX * 0.08,
      bottom: layoutBounds.maxY * 0.95
    } );
    this.addChild( soundAndTimerButtons );

    // add reset all button
    const resetAllButton = new ResetAllButton( {
      listener: () => {model.reset(); },
      right: layoutBounds.maxX * 0.98,
      bottom: layoutBounds.maxY * 0.95
    } );
    this.addChild( resetAllButton );

    // pass options through to superclass
    this.mutate( options );
  }
}

arithmetic.register( 'LevelSelectionNode', LevelSelectionNode );

export default LevelSelectionNode;