// Copyright 2002-2013, University of Colorado Boulder

/**
 * Main model for the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  var PropertySet = require( 'AXON/PropertySet' ),
    inherit = require( 'PHET_CORE/inherit' ),
    ScreenView = require( 'JOIST/ScreenView' );


  function ArithmeticModel() {
    // dimensions of the model's space
    this.width = ScreenView.DEFAULT_LAYOUT_BOUNDS.width;
    this.height = ScreenView.DEFAULT_LAYOUT_BOUNDS.height;

    PropertySet.call( this, {
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
