// Copyright 2002-2014, University of Colorado Boulder

/**
 * This node shows the level completed node when the level complete state is reached.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNode = require( 'VEGAS/LevelCompletedNode' );
  var Node = require( 'SCENERY/nodes/Node' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * @param {Array} levelModels - Array of descriptions for each level.
   * Necessary to get perfect and current score for completed level.
   * @param {Property} levelProperty - Level difficulty property.
   * @param {Property} stateProperty - State of game property.
   * @param {Property} timerEnabledProperty - Time enabling flag.
   * @param {Function} continueCallback - Callback listener for continue button.
   * @param {Bounds2} layoutBounds - Bounds of main screen. Necessary for placing component.
   *
   * @constructor
   */
  function LevelCompletedNodeWrapper( levelModels, levelProperty, stateProperty, timerEnabledProperty, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    stateProperty.lazyLink( function( state ) {
      if ( state === GAME_STATE.SHOW_STATISTICS ) {
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          levelModels[levelProperty.value].currentScore,
          levelModels[levelProperty.value].perfectScore,
          CONSTANTS.STAR_NUMBER,
          timerEnabledProperty.value,
          levelModels[levelProperty.value].gameTimer.elapsedTime,
          levelModels[levelProperty.value].bestTime,
          (levelModels[levelProperty.value].gameTimer.elapsedTime < levelModels[levelProperty.value].bestTime),
          continueCallback
        ).mutate( {centerX: layoutBounds.maxX / 2, centerY: layoutBounds.maxY / 2} ) );
      }
      else if ( state === GAME_STATE.AWAITING_USER_INPUT ) {
        self.removeAllChildren();
      }
    } );
  }

  return inherit( Node, LevelCompletedNodeWrapper );
} );