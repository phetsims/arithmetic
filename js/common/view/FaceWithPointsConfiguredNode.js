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
  var FaceWithPointsNode = require( 'SCENERY_PHET/FaceWithPointsNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );

  /**
   * @param smileFaceModel {Object} model for smile face.
   * Contains 'scoreFace', 'isSmile', 'isVisible' properties
   *
   * @constructor
   */

  function FaceWithPointsConfiguredNode( smileFaceModel ) {
    var self = this;
    FaceWithPointsNode.call( this, {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } )
    } );

    // add observers

    // set score of smile face
    smileFaceModel.property( 'scoreFace' ).link( function( points ) {
      self.setPoints( points );
    } );

    // set smile face emotion
    smileFaceModel.property( 'isSmile' ).link( function( isFaceSmile ) {
      self[ isFaceSmile ? 'smile' : 'grimace' ]();
    } );

    // set visibility of smile face
    smileFaceModel.property( 'isVisible' ).linkAttribute( self, 'visible' );
  }

  return inherit( FaceWithPointsNode, FaceWithPointsConfiguredNode );
} );