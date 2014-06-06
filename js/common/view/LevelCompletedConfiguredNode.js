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
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function LevelCompletedConfiguredNode( levels, levelProperty, stateProperty, scoreTotalProperty, timerEnabledProperty, timeProperty, bestTimes, continueCallback, layoutBounds ) {
    var self = this;
    Node.call( this );

    stateProperty.lazyLink( function( state ) {
      if ( state === GAME_STATE.LEVEL_FINISHED ) {
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          scoreTotalProperty.value,
          levels[levelProperty.value - 1].perfectScore,
          CONSTANTS.STAR_NUMBER,
          timerEnabledProperty.value,
          timeProperty.value,
          bestTimes[levelProperty.value - 1],
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