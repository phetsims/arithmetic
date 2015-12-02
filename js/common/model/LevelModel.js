// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for single level in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var GameTimer = require( 'VEGAS/GameTimer' );

  /**
   * @param {number} tableSize - width and height of the multiplication table, which is assumed to be square
   * @constructor
   */
  function LevelModel( tableSize ) {
    PropertySet.call( this, {
      bestTime: null,  // @public - best time for level
      currentScore: 0, // @public - current score for level
      displayScore: 0 // @public - score for displaying in level select buttons
    } );

    this.tableSize = tableSize; // @public
    this.perfectScore = tableSize * tableSize; // @public

    // @public - timer for this level
    this.gameTimer = new GameTimer();

    // @public - 2d array that tracks the 'used' state of each of the cells for this level
    // TODO: Consider making this private and having methods to mark cell state.  This will hide the 0/1 index issue
    this.cellUsedStates = new Array( tableSize );
    for ( var i = 0; i < tableSize; i++ ) {
      this.cellUsedStates[ i ] = new Array( tableSize );
    }
    this.clearCellUsedStates();

    this.environment = null; // @public - storage area used for saving/restoring this level's state in the parent model 
  }

  return inherit( PropertySet, LevelModel, {

    // @public - reset this level
    reset: function() {
      PropertySet.prototype.reset.call( this );

      // reset the states of the cells
      this.clearCellUsedStates();

      // reset game timer
      this.gameTimer.stop();
      this.gameTimer.elapsedTime = 0;
    },

    // @private - clear the usage state for all cells
    clearCellUsedStates: function() {
      // done as c-style loops for optimum performance
      for ( var i = 0; i < this.tableSize; i++ ) {
        for ( var j = 0; j < this.tableSize; j++ ) {
          this.cellUsedStates[ i ][ j ] = false;
        }
      }
    }
  } );
} );
