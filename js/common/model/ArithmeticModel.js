// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main model for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );

  // constants
  var levels = [
    // level 1
    {
      icon: require( 'image!ARITHMETIC/phet-girl-icon-1.png' )
    },
    // level 2
    {
      icon: require( 'image!ARITHMETIC/phet-girl-icon-2.png' )
    },
    // level 3
    {
      icon: require( 'image!ARITHMETIC/phet-girl-icon-3.png' )
    }
  ];

  function ArithmeticModel() {
    var self = this;

    // dimensions of the model's space
    this.simBounds = ScreenView.DEFAULT_LAYOUT_BOUNDS;

    // array of levels with description
    this.levels = levels;

    PropertySet.call( this, {
      level: 0, // level difficulty, zero-based in the model, though levels appear to the user to start
      score: 0, // current score
      input: '', // user's input value
      isSound: true, // is sound active
      isTimer: false // is time mode active
    } );

    // best times and scores, equal to number of levels
    this.bestTimes = [];
    this.bestScores = [];
    this.levels.forEach( function() {
      self.bestTimes.push( null );
      self.bestScores.push( new Property( 0 ) );
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    checkInput: function() {

    },
    reset: function() {
      PropertySet.prototype.reset.call( this );
    }
  } );
} );
