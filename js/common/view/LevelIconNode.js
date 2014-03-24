// Copyright 2002-2014, University of Colorado Boulder

/**
 * Convenience type for creating the icons used on the game level start buttons.
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' ),
    Dimension2 = require( 'DOT/Dimension2' ),
    Image = require( 'SCENERY/nodes/Image' ),
    Vector2 = require( 'DOT/Vector2' ),

  // constants
    IMAGE_SIZE = new Dimension2( 125, 125 );

  function LevelIconNode( image ) {
    Image.call( this, image );
    this.scale( new Vector2( IMAGE_SIZE.width / this.width, IMAGE_SIZE.height / this.height ) );
  }

  return inherit( Image, LevelIconNode );
} );
