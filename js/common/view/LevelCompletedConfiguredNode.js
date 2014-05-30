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
  var Constants = require( 'ARITHMETIC/common/model/Constants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNode = require( 'VEGAS/LevelCompletedNode' );
  var Node = require( 'SCENERY/nodes/Node' );

  function LevelCompletedConfiguredNode( levels, levelProperty, isLevelCompletedProperty, scoreTotalProperty, isTimerProperty, timeProperty, bestTimes ) {
    var self = this;
    Node.call( this );

    isLevelCompletedProperty.lazyLink( function( isLevelCompleted ) {
      if ( isLevelCompleted ) {
        self.addChild( new LevelCompletedNode(
          levelProperty.value,
          scoreTotalProperty.value,
          levels[levelProperty.value - 1].perfectScore,
          Constants.STAR_NUMBER,
          isTimerProperty.value,
          timeProperty.value,
          bestTimes[levelProperty.value - 1],
          (timeProperty.value < bestTimes[levelProperty.value - 1])
        ) );
      }
      else {
        self.removeAllChildren();
      }
    } );
  }

  return inherit( Node, LevelCompletedConfiguredNode );
} );