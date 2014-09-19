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

  /**
   * @constructor
   */
  function GameModel() {
    PropertySet.call( this, {
      multiplierLeft: undefined, // left multiplier
      multiplierRight: undefined, // right multiplier
      product: undefined, // product of multiplication
      possiblePoints: 1 // points for correct completion of current task, can go down on incorrect answers
    } );

    this.answerSheet = [];
  }

  return inherit( PropertySet, GameModel, {
    reset: function() {
      // reset properties
      PropertySet.prototype.reset.call( this );

      // reset answer sheet
      this.answerSheet.forEach( function( multipliersLeft ) {
        for ( var i = 0; i < multipliersLeft.length; i++ ) {
          multipliersLeft[i] = false;
        }
      } );
    },
    // set new answer sheet changing level
    initAnswerSheet: function( answerSheetSize ) {
      var self = this;
      this.answerSheet = [];

      // add arrays with right multipliers for every left multiplier
      _.times( answerSheetSize, function() {
        self.answerSheet.push( [] );
      } );

      // fill arrays appropriate to right multipliers
      this.answerSheet.forEach( function( el ) {
        _.times( answerSheetSize, function() {
          el.push( false );
        } );
      } );
    },
    // return available left and right multipliers according to answer sheet
    selectUnusedMultiplierPair: function() {
      var availableMultipliersLeft = [];
      var availableMultipliersRight = [];
      var multiplierLeft;
      var multiplierRight;

      // find available left multipliers
      this.answerSheet.forEach( function( rightMultipliers, index ) {
        if ( rightMultipliers.indexOf( false ) !== -1 ) {
          availableMultipliersLeft.push( index + 1 );
        }
      } );

      // no more available multipliers
      if ( !availableMultipliersLeft.length ) {
        return null;
      }

      // set left multiplier
      multiplierLeft = _.shuffle( availableMultipliersLeft )[0];

      // find available right multipliers
      this.answerSheet[multiplierLeft - 1].forEach( function( isRightMultiplierAnswered, index ) {
        if ( !isRightMultiplierAnswered ) {
          availableMultipliersRight.push( index + 1 );
        }
      } );

      // set right multiplier
      multiplierRight = _.shuffle( availableMultipliersRight )[0];

      return {
        multiplierLeft: multiplierLeft,
        multiplierRight: multiplierRight
      };
    }
  } );
} );
