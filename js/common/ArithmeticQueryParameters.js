// Copyright 2014-2015, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );

  var ArithmeticQueryParameters = QueryStringMachine.getAll( {

    // Automatically answer most problems to enable faster testing of level completion.
    autoAnswer: { type: 'flag' }
  } );

  arithmetic.register( 'ArithmeticQueryParameters', ArithmeticQueryParameters );

  return ArithmeticQueryParameters;
} );
