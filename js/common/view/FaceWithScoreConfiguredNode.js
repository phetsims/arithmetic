// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that represents a smiling face with the additional points gained for
 * getting the answer correct shown immediately below it.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var FaceWithScoreNode = require( 'SCENERY_PHET/FaceWithScoreNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  function FaceWithScoreConfiguredNode( scoreGameProperty, isFaceVisibleProperty ) {
    var self = this;
    FaceWithScoreNode.call( this, {
      faceOpacity: 1,
      scoreAlignment: 'bottom',
      scoreTextSize: 26,
      scoreFill: 'black'
    } );

    // add observers
    scoreGameProperty.link( function( scoreGame ) {
      // set score and smile emotion
      self.setScore( scoreGame );
      self[scoreGame ? 'smile' : 'frown' ]();
    } );

    isFaceVisibleProperty.linkAttribute( self, 'visible' );
  }

  return inherit( FaceWithScoreNode, FaceWithScoreConfiguredNode );
} );