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
   * @param levelModels {Array} array of descriptions for each level.
   * Necessary to get perfect score for completed level
   * @param levelProperty {Property} level difficulty property
   * @param stateProperty {Property} state of game property
   * @param timerEnabledProperty {Property} time enabling flag
   * @param timeProperty {Property} time spend for level completing
   * @param continueCallback {Function} callback listener for continue button
   * @param layoutBounds {Bounds2} bounds of main screen. Necessary for placing component
   *
   * @constructor
   */
  function LevelCompletedNodeWrapper( levelModels, levelProperty, stateProperty, timerEnabledProperty, timeProperty, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    stateProperty.lazyLink( function( state ) {
      if ( state === GAME_STATE.SHOW_STATISTICS ) {
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          levelModels[levelProperty.value - 1].currentScore,
          levelModels[levelProperty.value - 1].perfectScore,
          CONSTANTS.STAR_NUMBER,
          timerEnabledProperty.value,
          timeProperty.value,
          levelModels[levelProperty.value - 1].bestTime,
          (timeProperty.value < levelModels[levelProperty.value - 1].bestTime),
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