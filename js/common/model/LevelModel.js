// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for single level in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var GameTimer = require( 'VEGAS/GameTimer' );

  function LevelModel( tableSize, iconImage ) {
    PropertySet.call( this, {
      bestTime: null,  // best time for level
      currentScore: 0, // current score for level
      displayScore: 0 // score displaying in level select buttons
    } );

    this.tableSize = tableSize;
    this.perfectScore = tableSize * tableSize;
    this.icon = iconImage;

    // model for game timer
    this.gameTimer = new GameTimer();

    this.state = null;
  }

  return inherit( PropertySet, LevelModel, {
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // reset timer
      this.gameTimer.stop();
      this.gameTimer.elapsedTime = 0;
    }
  } );
} );
