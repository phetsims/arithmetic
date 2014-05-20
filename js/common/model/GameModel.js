// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for single game in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function GameModel() {
    PropertySet.call( this, {
      multiplierLeft: undefined, // left multiplier
      multiplierRight: undefined, // right multiplier
      product: undefined // product of multiplication
    } );
  }

  return inherit( PropertySet, GameModel, {
    reset: function() {
      PropertySet.prototype.reset.call( this );
    }
  } );
} );
