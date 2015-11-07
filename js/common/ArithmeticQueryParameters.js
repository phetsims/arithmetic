// Copyright 2014-2015, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  var getQueryParameter = phet.chipper.getQueryParameter;

  var PREFILL_ALLOWED = true; // TODO: this should be disabled in published sims so that no one ever stumbles on to it.

  return {

    // pre-fills the multiplication table to enable faster testing of level completion.
    PREFILL_TABLE: PREFILL_ALLOWED ? !!getQueryParameter( 'prefill' ) || false : false

  };
} );
