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
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
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

    this.tableSize = tableSize; // @public, read only
    this.perfectScore = tableSize * tableSize; // @public, read only
    this.gameTimer = new GameTimer(); // @public - timer for this level

    // @private - 2d array that tracks the 'used' state of each of the cells in the multiplication table for this level,
    // accessed through methods defined in the inherit block
    this.cellUsedStates = new Array( tableSize );
    for ( var i = 0; i < tableSize; i++ ) {
      this.cellUsedStates[ i ] = new Array( tableSize );
    }
    this.clearCellUsedStates();

    this.environment = null; // @public - storage area used for saving/restoring this level's state in the parent model 
  }

  arithmetic.register( 'LevelModel', LevelModel );

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
    },

    // @public - mark the cell associated with the provided multiplicand and multiplier as used
    markCellAsUsed: function( multiplicand, multiplier ) {
      this.cellUsedStates[ multiplicand - 1 ][ multiplier - 1 ] = true;
    },

    // @public - get the usage state for the requested cell
    isCellUsed: function( multiplicand, multiplier ) {
      return this.cellUsedStates[ multiplicand - 1 ][ multiplier - 1 ];
    },

    // @public - chose a multiplicand-multiplier pair randomly from those that are available
    selectUnusedMultiplierPair: function() {
      var availableMultiplicands = [];
      var availableMultipliers = [];
      var multiplicand;
      var multiplier;

      // find available multiplicand rows with at least one unused cell
      this.cellUsedStates.forEach( function( multipliers, index ) {
        if ( multipliers.indexOf( false ) !== -1 ) {
          availableMultiplicands.push( index + 1 );
        }
      } );

      // no more available multipliers
      if ( !availableMultiplicands.length ) {
        return null;
      }

      // set multiplicand
      multiplicand = phet.joist.random.shuffle( availableMultiplicands )[ 0 ];

      // find available multipliers
      this.cellUsedStates[ multiplicand - 1 ].forEach( function( isProblemAnswered, index ) {
        if ( !isProblemAnswered ) {
          availableMultipliers.push( index + 1 );
        }
      } );

      // set multiplier
      multiplier = phet.joist.random.sample( availableMultipliers );

      return {
        multiplicand: multiplicand,
        multiplier: multiplier
      };
    }
  } );
} );
