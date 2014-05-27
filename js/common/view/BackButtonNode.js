// Copyright 2002-2014, University of Colorado Boulder

/**
 * Back button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  var Constants = require( 'ARITHMETIC/common/model/Constants' ).BACK_BUTTON;
  var inherit = require( 'PHET_CORE/inherit' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );

  // constants
  var ARROW_SIZE = Constants.ARROW_SIZE;

  function BackButtonNode( levelProperty ) {
    RectangularPushButton.call( this, {
      content: new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
        headWidth: 12,
        headHeight: 12,
        tailWidth: 3
      } ),
      baseColor: Constants.BASE_COLOR,
      xMargin: 10,
      yMargin: 8,
      listener: function() {
        levelProperty.value = 0;
      }
    } );
  }

  return inherit( RectangularPushButton, BackButtonNode );
} );
