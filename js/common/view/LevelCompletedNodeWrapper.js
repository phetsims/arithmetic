// Copyright 2002-2014, University of Colorado Boulder

/**
 * This node shows the level completed node when the user completes a level.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNode = require( 'VEGAS/LevelCompletedNode' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {Array} levelModels - Array of descriptions for each level. Necessary to get perfect and current score for
   * completed level.
   * @param {Property} levelProperty - Level property.
   * @param {Property} stateProperty - Game state property.
   * @param {Property} timerEnabledProperty - Timer enabled flag.
   * @param {Function} continueCallback - Callback listener for continue button.
   * @param {Bounds2} layoutBounds - Bounds of main screen. Necessary for placing components.
   *
   * @constructor
   */
  function LevelCompletedNodeWrapper( levelModels, levelProperty, stateProperty, timerEnabledProperty, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    stateProperty.lazyLink( function( state ) {
      if ( state === GameState.SHOWING_LEVEL_RESULTS ) {
        var levelModel = levelModels[levelProperty.value];
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          levelModel.currentScore,
          levelModel.perfectScore,
          ArithmeticConstants.STAR_NUMBER,
          timerEnabledProperty.value,
          levelModel.gameTimer.elapsedTime,
          levelModel.bestTime,
          (levelModel.gameTimer.elapsedTime < levelModel.bestTime),
          continueCallback,
          {centerX: layoutBounds.maxX / 2, centerY: layoutBounds.maxY / 2}
        ) );
      }
      else if ( state === GameState.AWAITING_USER_INPUT ) {
        self.removeAllChildren();
      }
    } );
  }

  return inherit( Node, LevelCompletedNodeWrapper );
} );