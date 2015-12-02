// Copyright 2014-2015, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  var getQueryParameter = phet.chipper.getQueryParameter;

  return {

    // Automatically answer most problems to enable faster testing of level completion.  The test for the presence of
    // a dash in the version number is intended to prevent this feature from being present in released versions.
    AUTO_ANSWER: !!getQueryParameter( 'autoAnswer' )

  };
} );
