// Copyright 2015-2017, University of Colorado Boulder

/**
 * Variables that need to be globally accessible within the 'Arithmetic' simulation.
 *
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var Property = require( 'AXON/Property' );

  var ArithmeticGlobals = {
    timerEnabledProperty: new Property( false ),
    soundEnabledProperty: new Property( true )
  };

  arithmetic.register( 'ArithmeticGlobals', ArithmeticGlobals );

  return ArithmeticGlobals;
} );