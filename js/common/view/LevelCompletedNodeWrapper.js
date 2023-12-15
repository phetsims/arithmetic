// Copyright 2014-2023, University of Colorado Boulder

/**
 * This node shows the level completed node when the user completes a level.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Range from '../../../../dot/js/Range.js';
import { Color, Node } from '../../../../scenery/js/imports.js';
import LevelCompletedNode from '../../../../vegas/js/LevelCompletedNode.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../ArithmeticConstants.js';
import GameState from '../model/GameState.js';

class LevelCompletedNodeWrapper extends Node {

  /**
   * @param {Array} levelModels - Array of descriptions for each level. Necessary to get perfect and current score for
   * completed level.
   * @param {Property} levelNumberProperty - Level property.
   * @param {Property} stateProperty - Game state property.
   * @param {Property} timerEnabledProperty - Timer enabled flag.
   * @param {Function} continueCallback - Callback listener for continue button.
   * @param {VBox} controlPanelVBox - VBox that holds the ScoreBoardNode, LevelCompletedNodeWrapper, and number keypad.
   */
  constructor( levelModels, levelNumberProperty, stateProperty, timerEnabledProperty,
               continueCallback, controlPanelVBox ) {
    super();

    // Show this node only when the level has been completed.
    stateProperty.lazyLink( state => {
      if ( state === GameState.SHOWING_LEVEL_COMPLETED_DIALOG ) {
        const levelModel = levelModels[ levelNumberProperty.value ];
        const levelCompletedNode = new LevelCompletedNode(
          levelNumberProperty.value + 1,
          levelModel.currentScoreProperty.get(),
          levelModel.perfectScore,
          ArithmeticConstants.NUM_STARS,
          timerEnabledProperty.value,
          levelModel.gameTimer.elapsedTimeProperty.value,
          levelModel.bestTimeProperty.get(),
          ( levelModel.gameTimer.elapsedTimeProperty.get() < levelModel.bestTimeProperty.get() ),
          continueCallback,
          {
            fill: new Color( 255, 235, 205 ),
            halfStarScoreRange: levelModel.tableSize === ArithmeticConstants.LEVEL_3_TABLE_SIZE ? new Range( 131, levelModel.perfectScore - 1 ) : null,

            // Empirically determined values such that LevelCompletedNodeWrapper has same width and proportions as controlPanelVBox.
            starDiameter: 45,
            xMargin: 8,
            cornerRadius: 10,
            scale: 0.65
          }
        );
        this.addChild( levelCompletedNode );
        controlPanelVBox.setSpacing( 0 );
      }
      else if ( state === GameState.AWAITING_USER_INPUT || state === GameState.LEVEL_COMPLETED ) {
        this.removeAllChildren();
        controlPanelVBox.setSpacing( ArithmeticConstants.CONTROL_PANEL_VBOX_SPACING );
      }
    } );
  }
}

arithmetic.register( 'LevelCompletedNodeWrapper', LevelCompletedNodeWrapper );

export default LevelCompletedNodeWrapper;