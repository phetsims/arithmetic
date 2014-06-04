// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for single game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function GameModel( levelProperty, levels ) {
    var self = this;

    PropertySet.call( this, {
      multiplierLeft: undefined, // left multiplier
      multiplierRight: undefined, // right multiplier
      product: undefined, // product of multiplication
      state: GAME_STATE.START, // current game state
      //REVIEW: You might want to consider other values for the face node, like 'hidden', 'smiling', and 'grimacing'.
      isFaceVisible: false, // flag of smile face visibility
      //REVIEW: Just wondering why the game starts off with a score of 1 and not zero.  Seems odd.
      scoreGame: 1 // score for current game
    } );

    this.answerSheet = [];

    // set new answer sheet changing level
    levelProperty.lazyLink( function( levelNumber ) {
      var answerSheetSize;
      if ( levelNumber ) {
        self.answerSheet = [];
        answerSheetSize = levels[levelNumber - 1].tableSize;

        // add arrays with right multipliers for every left multiplier
        _.times( answerSheetSize, function() {
          self.answerSheet.push( [] );
        } );

        // fill arrays appropriate to right multipliers
        self.answerSheet.forEach( function( el ) {
          _.times( answerSheetSize, function() {
            el.push( false );
          } );
        } );
      }
    } );
  }

  return inherit( PropertySet, GameModel, {
    reset: function() {
      PropertySet.prototype.reset.call( this );
    },
    // return available left and right multipliers according to answer sheet
    getAvailableMultipliers: function() {
      var availableLeftMultipliers = [];
      var availableRightMultipliers = [];
      var multiplierLeft;
      var multiplierRight;

      // find available left multipliers
      this.answerSheet.forEach( function( rightMultipliers, index ) {
        if ( rightMultipliers.indexOf( false ) !== -1 ) {
          availableLeftMultipliers.push( index + 1 );
        }
      } );

      // set left multiplier
      multiplierLeft = _.shuffle( availableLeftMultipliers )[0];

      // find available right multipliers
      this.answerSheet[multiplierLeft - 1].forEach( function( isRightMultiplierAnswered, index ) {
        if ( !isRightMultiplierAnswered ) {
          availableRightMultipliers.push( index + 1 );
        }
      } );

      // set right multiplier
      multiplierRight = _.shuffle( availableRightMultipliers )[0];

      return {
        multiplierLeft: multiplierLeft,
        multiplierRight: multiplierRight
      };
    }
  } );
} );
