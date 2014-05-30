// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main model for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var GameModel = require( 'ARITHMETIC/common/model/GameModel' );
  var Property = require( 'AXON/Property' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  // constants
  var levels = [
    // level 1
    {
      icon: phetGirlIcon1Image,
      perfectScore: 6 * 6,
      tableSize: 6
    },
    // level 2
    {
      icon: phetGirlIcon2Image,
      perfectScore: 9 * 9,
      tableSize: 9
    },
    // level 3
    {
      icon: phetGirlIcon3Image,
      perfectScore: 12 * 12,
      tableSize: 12
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
      scoreTotal: 0, // total user score for current games
      time: 0, // current time
      input: '', // user's input value
      isLevelCompleted: false, // flag of level completing. If true - show statistic node
      isSound: true, // is sound active
      isTimer: false // is time mode active
    } );

    // model for single game
    this.game = new GameModel( this.property( 'level' ), levels );

    // best times and scores, equal to number of levels
    this.bestTimes = [];
    this.bestScores = [];
    this.levels.forEach( function() {
      self.bestTimes.push( null );
      self.bestScores.push( new Property( 0 ) );
    } );

    // clear time when timer off
    this.property( 'isTimer' ).link( function( isTimer ) {
      if ( !isTimer ) {
        self.time = 0;
      }
    } );

    this.property( 'level' ).lazyLink( function( levelNumber ) {
      if ( levelNumber ) {
        self.setTask();
      }
      else {
        self.game.reset();
      }
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    step: function( dt ) {
      // if timer is on and level is select - add time
      if ( this.isTimer && this.level ) {
        this.time += dt;
      }
    },
    // should be defined in child constructors
    setTask: function() {},
    checkInput: function() {},
    refreshLevel: function() {},
    reset: function() {
      PropertySet.prototype.reset.call( this );
    }
  } );
} );
