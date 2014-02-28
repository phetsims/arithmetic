// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for screens used in the 'Arithmetic' simulation.
 */
define( function( require ) {
  'use strict';

  // Imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );

  /**
   * @param model
   * @constructor
   */
  function ArithmeticScreen( model ) {
    ScreenView.call( this );
    var thisScreen = this;

  }

  return inherit( ScreenView, ArithmeticScreen, {
    //TODO prototypes
  } );
} );
