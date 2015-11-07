// Copyright 2015, University of Colorado Boulder

/**
 * Variables that need to be globally accessible within the 'Arithmetic' simulation.
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var Property = require( 'AXON/Property' );

  return {
    timerEnabledProperty: new Property( false ),
    soundEnabledProperty: new Property( true )
  };
} );