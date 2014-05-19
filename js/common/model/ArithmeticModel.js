// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main model for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var ScreenView = require( 'JOIST/ScreenView' );

  function ArithmeticModel() {
    // dimensions of the model's space
    this.simBounds = ScreenView.DEFAULT_LAYOUT_BOUNDS;

    PropertySet.call( this, {
      level: 0, // level difficulty, zero-based in the model, though levels appear to the user to start
      score: 0, // current score
      isSound: true, // is sound active
      isTimer: false // is time mode active
    } );
  }

  return inherit( PropertySet, ArithmeticModel, {
    reset: function() {
      PropertySet.prototype.reset.call( this );
    }
  } );
} );
