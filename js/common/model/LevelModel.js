// Copyright 2014-2024, University of Colorado Boulder

/**
 * Model for single level in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Property from '../../../../axon/js/Property.js';
import dotRandom from '../../../../dot/js/dotRandom.js';
import GameTimer from '../../../../vegas/js/GameTimer.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../ArithmeticConstants.js';

class LevelModel {

  /**
   * @param {number} tableSize - width and height of the multiplication table, which is assumed to be square
   * @param {Array<number>} halfStarScores - array of scores required when filling in the ScoreDisplayStars in half-star increments.
   */
  constructor( tableSize, halfStarScores ) {

    // Only fill in all stars completely when the perfect score is reached, so the last score must be the perfect score.
    // See https://github.com/phetsims/arithmetic/issues/174 for more details.
    const perfectScore = tableSize * tableSize;
    halfStarScores.push( perfectScore );

    // Assert to ensure stars are filled in half-star increments. See https://github.com/phetsims/arithmetic/issues/174.
    assert && assert( halfStarScores.length === ArithmeticConstants.NUM_STARS * 2,
      'There must twice as many scores as the number of stars. Number of scores: ', halfStarScores.length,
      ' Number of stars: ', ArithmeticConstants.NUM_STARS );

    // observable model properties
    this.bestTimeProperty = new Property( null );  // @public - best time for level
    this.currentScoreProperty = new Property( 0 ); // @public - current score for level
    this.displayScoreProperty = new Property( 0 ); // @public - score for displaying in level select buttons

    // non-Property model values
    this.tableSize = tableSize; // @public, read only
    this.perfectScore = perfectScore; // @public, read only
    this.gameTimer = new GameTimer(); // @public - timer for this level
    this.halfStarScores = halfStarScores; // @public, read only

    // @private - 2d array that tracks the 'used' state of each of the cells in the multiplication table for this level,
    // accessed through methods
    this.cellUsedStates = new Array( tableSize );
    for ( let i = 0; i < tableSize; i++ ) {
      this.cellUsedStates[ i ] = new Array( tableSize );
    }
    this.clearCellUsedStates();

    this.environment = null; // @public - storage area used for saving/restoring this level's state in the parent model 
  }

  // @public - reset this level
  reset() {

    // reset this level model's explicitly defined properties
    this.bestTimeProperty.reset();
    this.currentScoreProperty.reset();
    this.displayScoreProperty.reset();

    // reset the states of the cells
    this.clearCellUsedStates();

    // reset game timer
    this.gameTimer.stop();
    this.gameTimer.elapsedTimeProperty.value = 0;
  }

  // @private - clear the usage state for all cells
  clearCellUsedStates() {
    // done as c-style loops for optimum performance
    for ( let i = 0; i < this.tableSize; i++ ) {
      for ( let j = 0; j < this.tableSize; j++ ) {
        this.cellUsedStates[ i ][ j ] = false;
      }
    }
  }

  // @public - mark the cell associated with the provided multiplicand and multiplier as used
  markCellAsUsed( multiplicand, multiplier ) {
    this.cellUsedStates[ multiplicand - 1 ][ multiplier - 1 ] = true;
  }

  // @public - get the usage state for the requested cell
  isCellUsed( multiplicand, multiplier ) {
    return this.cellUsedStates[ multiplicand - 1 ][ multiplier - 1 ];
  }

  // @public - chose a multiplicand-multiplier pair randomly from those that are available
  selectUnusedMultiplierPair() {
    const availableMultiplicands = [];
    const availableMultipliers = [];

    // find available multiplicand rows with at least one unused cell
    this.cellUsedStates.forEach( ( multipliers, index ) => {
      if ( multipliers.indexOf( false ) !== -1 ) {
        availableMultiplicands.push( index + 1 );
      }
    } );

    // no more available multipliers
    if ( !availableMultiplicands.length ) {
      return null;
    }

    // set multiplicand
    const multiplicand = dotRandom.shuffle( availableMultiplicands )[ 0 ];

    // find available multipliers
    this.cellUsedStates[ multiplicand - 1 ].forEach( ( isProblemAnswered, index ) => {
      if ( !isProblemAnswered ) {
        availableMultipliers.push( index + 1 );
      }
    } );

    // set multiplier
    const multiplier = dotRandom.sample( availableMultipliers );

    return {
      multiplicand: multiplicand,
      multiplier: multiplier
    };
  }
}

arithmetic.register( 'LevelModel', LevelModel );

export default LevelModel;