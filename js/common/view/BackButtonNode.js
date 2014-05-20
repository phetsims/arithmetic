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
  var inherit = require( 'PHET_CORE/inherit' );
  //var Node = require( 'SCENERY/nodes/Node' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );

  // constants
  var ARROW_SIZE = 22;

  function BackButtonNode( levelProperty ) {
    RectangularPushButton.call( this, {
      content: new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
        headWidth: 8,
        headHeight: 8,
        tailWidth: 2
      } ),
      baseColor: 'rgb(243,238,103)',
      xMargin: 5,
      yMargin: 7,
      listener: function() {
        levelProperty.value = 0;
      }
    } );
  }

  return inherit( RectangularPushButton, BackButtonNode );
} );
