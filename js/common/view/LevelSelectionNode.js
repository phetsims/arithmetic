// Copyright 2014-2023, University of Colorado Boulder

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
import { Node, Text, VBox } from '../../../../scenery/js/imports.js';
import LevelSelectionButtonGroup from '../../../../vegas/js/LevelSelectionButtonGroup.js';
import ScoreDisplayStars from '../../../../vegas/js/ScoreDisplayStars.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import ArithmeticConstants from '../ArithmeticConstants.js';
import ArithmeticGlobals from '../ArithmeticGlobals.js';
import BoxPlayerController from './BoxPlayerController.js';

// constants
const CHOOSE_LEVEL_TITLE_FONT = new PhetFont( { size: 24 } );
const TAB_TITLE_FONT = new PhetFont( { size: 54 } );
const BUTTON_LENGTH = 150;

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


    const boxPlayerController = new BoxPlayerController( model );

    // icon sets, used to place on the buttons
    const iconSets = boxPlayerController.boxPlayerNodes;

    // add select level buttons
    assert && assert( model.levelModels.length === iconSets[ options.iconSet ].length, 'Number of icons doesn\'t match number of levels' );
    const levelSelectButtons = model.levelModels.map( ( level, levelIndex ) => {
      return {
        icon: iconSets[ options.iconSet ][ levelIndex ],
        scoreProperty: model.levelModels[ levelIndex ].displayScoreProperty,
        options: {
          baseColor: options.buttonBaseColor,
          bestTimeVisibleProperty: ArithmeticGlobals.timerEnabledProperty,
          bestTimeProperty: model.levelModels[ levelIndex ].bestTimeProperty,
          listener: () => {
            callback( levelIndex );
          },
          createScoreDisplay: scoreProperty => new ScoreDisplayStars( scoreProperty, {
            numberOfStars: ArithmeticConstants.NUM_STARS,
            perfectScore: level.perfectScore
          } ),
          soundPlayerIndex: levelIndex
        }
      };
    } );
    const levelSelectionButtonGroup = new LevelSelectionButtonGroup( levelSelectButtons, {
      groupButtonHeight: BUTTON_LENGTH,
      groupButtonWidth: BUTTON_LENGTH,
      flowBoxOptions: {
        spacing: 50,
        top: chooseLevelTitle.bottom + 15,
        centerX: chooseLevelTitle.centerX
      }
    } );
    this.addChild( levelSelectionButtonGroup );

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