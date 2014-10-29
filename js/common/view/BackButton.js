// Copyright 2002-2014, University of Colorado Boulder

/**
 * Button for returning to the level selection screen.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var Color = require( 'SCENERY/util/Color' );
  var inherit = require( 'PHET_CORE/inherit' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var ArrowShape = require( 'SCENERY_PHET/ArrowShape' );
  var Path = require( 'SCENERY/nodes/Path' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function BackButton( options ) {

    options = _.extend( {
      xMargin: 8, //Match the size of the star button to the refresh buttons, since they often appear together.  see https://github.com/phetsims/scenery-phet/issues/44
      yMargin: 10.9, //Match the size of the star button to the refresh buttons, since they often appear together.  see https://github.com/phetsims/scenery-phet/issues/44
      baseColor: new Color( 242, 233, 22 )//Color match with the yellow in the PhET logo
    }, options );

    RectangularPushButton.call( this, _.extend( { content: new Path( new ArrowShape( 0, 0, -28.5, 0, {
      tailWidth: 8,
      headWidth: 18,
      headHeight: 15
    } ), { fill: 'black' } ) }, options ) );
  }

  return inherit( RectangularPushButton, BackButton );
} );