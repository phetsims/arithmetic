// Copyright 2014-2015, University of Colorado Boulder

/**
 * This node shows the level completed node when the user completes a level.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var Color = require( 'SCENERY/util/Color' );
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
   * @constructor
   */
  function LevelCompletedNodeWrapper( levelModels, levelProperty, stateProperty, timerEnabledProperty, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    // Show this node only when the level has been completed.
    stateProperty.lazyLink( function( state ) {
      if ( state === GameState.SHOWING_LEVEL_COMPLETED_DIALOG ) {
        var levelModel = levelModels[ levelProperty.value ];
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          levelModel.currentScoreProperty.get(),
          levelModel.perfectScore,
          ArithmeticConstants.STAR_NUMBER,
          timerEnabledProperty.value,
          levelModel.gameTimer.elapsedTimeProperty.value,
          levelModel.bestTimeProperty.get(),
          ( levelModel.gameTimer.elapsedTimeProperty.get() < levelModel.bestTimeProperty.get() ),
          continueCallback,
          { fill: new Color( 255, 235, 205 ), centerX: layoutBounds.maxX / 2, centerY: layoutBounds.maxY / 2 }
        ) );
      }
      else if ( state === GameState.AWAITING_USER_INPUT || state === GameState.LEVEL_COMPLETED ) {
        self.removeAllChildren();
      }
    } );
  }

  arithmetic.register( 'LevelCompletedNodeWrapper', LevelCompletedNodeWrapper );

  return inherit( Node, LevelCompletedNodeWrapper );
} );