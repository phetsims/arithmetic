// Copyright 2002-2014, University of Colorado Boulder

/**
 * Back button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).BACK_BUTTON;
  var ARROW_SIZE = CONSTANTS.ARROW_SIZE;

  function BackButtonNode( backCallback ) {
    RectangularPushButton.call( this, {
      content: new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
        headWidth: 12,
        headHeight: 12,
        tailWidth: 3
      } ),
      baseColor: CONSTANTS.BASE_COLOR,
      xMargin: 10,
      yMargin: 8,
      listener: backCallback
    } );
  }

  return inherit( RectangularPushButton, BackButtonNode );
} );
