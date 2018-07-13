// Copyright 2014-2017, University of Colorado Boulder

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

    // automatically answer most problems to enable faster testing of level completion
    autoAnswer: { type: 'flag' }
  } );

  // prevent auto answer in versions that are intended for publication
  if ( phet.chipper.isProduction && !phet.chipper.isDebugBuild ) {
    ArithmeticQueryParameters.autoAnswer = false;
  }

  arithmetic.register( 'ArithmeticQueryParameters', ArithmeticQueryParameters );

  return ArithmeticQueryParameters;
} );
