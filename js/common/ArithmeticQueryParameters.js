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

  var getQueryParameter = phet.chipper.getQueryParameter;

  var ArithmeticQueryParameters = {

    // Automatically answer most problems to enable faster testing of level completion.
    AUTO_ANSWER: !!getQueryParameter( 'autoAnswer' )
  };

  arithmetic.register( 'ArithmeticQueryParameters', ArithmeticQueryParameters );

  return ArithmeticQueryParameters;
} );
