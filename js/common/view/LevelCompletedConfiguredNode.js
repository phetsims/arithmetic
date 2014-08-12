// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node with statistic shows after completing level.
 * It's represent score and time of current game and best game.
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
   * @param levelDescriptions {Array} array of descriptions for each level.
   * Necessary to get perfect score for completed level
   * @param levelProperty {Property} level difficulty property
   * @param stateProperty {Property} state of game property
   * @param scoreProperties {Array} array of total scores for this completed level
   * @param timerEnabledProperty {Property} time enabling flag
   * @param timeProperty {Property} time spend for level completing
   * @param bestTimes {Array} best times spend for level completing
   * @param continueCallback {Function} callback listener for continue button
   * @param layoutBounds {Bounds2} bounds of main screen. Necessary for placing component
   *
   * @constructor
   */
  function LevelCompletedConfiguredNode( levelDescriptions, levelProperty, stateProperty, scoreProperties, timerEnabledProperty, timeProperty, bestTimes, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    stateProperty.lazyLink( function( state ) {
      if ( state === GAME_STATE.SHOW_STATISTICS ) {
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          scoreProperties[levelProperty.value - 1].value,
          levelDescriptions[levelProperty.value - 1].perfectScore,
          CONSTANTS.STAR_NUMBER,
          timerEnabledProperty.value,
          timeProperty.value,
          bestTimes[levelProperty.value - 1].value,
          (timeProperty.value < bestTimes[levelProperty.value - 1]),
          continueCallback
        ).mutate( {centerX: layoutBounds.maxX / 2, centerY: layoutBounds.maxY / 2} ) );
      }
      else if ( state === GAME_STATE.START ) {
        self.removeAllChildren();
      }
    } );
  }

  return inherit( Node, LevelCompletedConfiguredNode );
} );