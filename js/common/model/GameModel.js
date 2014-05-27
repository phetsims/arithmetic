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
    var self = this;

    PropertySet.call( this, {
      multiplierLeft: undefined, // left multiplier
      multiplierRight: undefined, // right multiplier
      product: undefined, // product of multiplication
      state: undefined, // current game state
      multiplierRange: undefined, // range of possible multipliers
      isFaceVisible: false, // flag of smile face visibility
      scoreGame: 1 // score for current game
    } );

    // show smile face when properties multiplierLeft, multiplierRight and product are define
    this.property( 'multiplierLeft' )
      .and( this.property( 'multiplierRight' ) )
      .and( this.property( 'product' ) )
      .link( function() {
        self.isFaceVisible = (!!self.multiplierLeft && !!self.multiplierRight && !!self.product);
      } );
  }

  return inherit( PropertySet, GameModel, {
    reset: function() {
      PropertySet.prototype.reset.call( this );
    },
    update: function() {

    }
  } );
} );
