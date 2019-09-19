// Copyright 2015-2019, University of Colorado Boulder

/**
 * Variables that need to be globally accessible within the 'Arithmetic' simulation.
 *
 * @author John Blanco
 */

define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const Property = require( 'AXON/Property' );

  const ArithmeticGlobals = {
    timerEnabledProperty: new Property( false )
  };

  arithmetic.register( 'ArithmeticGlobals', ArithmeticGlobals );

  return ArithmeticGlobals;
} );