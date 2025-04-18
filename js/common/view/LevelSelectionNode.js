// Copyright 2014-2025, University of Colorado Boulder

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
import AlignBox from '../../../../scenery/js/layout/nodes/AlignBox.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import LevelSelectionButtonGroup from '../../../../vegas/js/LevelSelectionButtonGroup.js';
import ScoreDisplayStars from '../../../../vegas/js/ScoreDisplayStars.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import ArithmeticConstants from '../ArithmeticConstants.js';
import ArithmeticGlobals from '../ArithmeticGlobals.js';
import ArithmeticQueryParameters from '../ArithmeticQueryParameters.js';

// constants
const CHOOSE_LEVEL_TITLE_FONT = new PhetFont( { size: 24 } );
const TAB_TITLE_FONT = new PhetFont( { size: 54 } );
const BUTTON_LENGTH = 175;
const TEXT_MAX_WIDTH = 550;

const chooseYourLevelString = ArithmeticStrings.chooseYourLevelStringProperty;

class LevelSelectionNode extends Node {

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {string} titleString - Title string for given screen.
   * @param {Function} callback - Callback function call after pressing button.
   * @param {Bounds2} layoutBounds - Bounds of screen on which this will appear, used for layout
   * @param {Array<LocalizedImageProperty>} imageProperties - localized images
   * @param {Object} [options]
   */
  constructor( model, titleString, callback, layoutBounds, imageProperties, options ) {
    super();

    // Default options
    options = merge( {
      buttonBaseColor: 'white'
    }, options );

    // add title
    const tabTitle = new Text( titleString, {
      font: TAB_TITLE_FONT,
      maxWidth: TEXT_MAX_WIDTH
    } );

    // add choose level title
    const chooseLevelTitle = new Text( chooseYourLevelString, {
      font: CHOOSE_LEVEL_TITLE_FONT,
      maxWidth: TEXT_MAX_WIDTH
    } );

    // icon sets, used to place on the buttons
    const iconSets = imageProperties.map( imageProperty => new Image( imageProperty ) );

    // add select level buttons
    assert && assert( model.levelModels.length === iconSets.length, 'Number of icons doesn\'t match number of levels' );
    const levelSelectButtons = model.levelModels.map( ( level, levelIndex ) => {
      return {
        icon: iconSets[ levelIndex ],
        scoreProperty: model.levelModels[ levelIndex ].displayScoreProperty,
        options: {
          baseColor: options.buttonBaseColor,
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
        spacing: 50
      },
      gameLevels: ArithmeticQueryParameters.gameLevels,
      levelSelectionButtonOptions: {
        iconToScoreDisplayYSpace: 5
      }
    } );

    const levelsVBox = new VBox( {
      children: [
        tabTitle,
        chooseLevelTitle,
        levelSelectionButtonGroup
      ],
      spacing: 15
    } );

    const titlesAlignBox = new AlignBox( levelsVBox, {
      alignBounds: layoutBounds,
      yAlign: 'bottom',
      xAlign: 'center',
      bottomMargin: 155 // empirically determined to match the 2015 published version
    } );

    this.addChild( titlesAlignBox );

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