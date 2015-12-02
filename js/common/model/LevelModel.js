// Copyright 2014-2015, University of Colorado Boulder

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

  /**
   * @param {Number} tableSize - Size of table. Supposed that the table is square.
   * @constructor
   */
  function LevelModel( tableSize ) {
    PropertySet.call( this, {
      bestTime: null,  // best time for level

      // currentScore is property using for storing earned points in level.
      // displayScore is using for displaying correct star number in LevelSelectionButton.
      // When level is finished currentScore is set to 0, but stars in LevelSelectionButton should be displayed so both properties are necessary.
      currentScore: 0, // current score for level
      displayScore: 0 // score displaying in level select buttons
    } );

    this.tableSize = tableSize;
    this.perfectScore = tableSize * tableSize;

    // model for game timer
    this.gameTimer = new GameTimer();

    this.environment = null; // @public - storage area used for saving and restoring this level
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
