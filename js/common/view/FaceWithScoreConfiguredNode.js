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
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );

  /**
   * @param smileFaceModel {Object} model for smile face.
   * Contains 'scoreFace', 'isSmile', 'isVisible' properties
   *
   * @constructor
   */

  function FaceWithScoreConfiguredNode( smileFaceModel ) {
    var self = this;
    FaceWithScoreNode.call( this, {
      pointsAlignment: 'centerBottom',
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } )
    } );

    // add observers

    // set score of smile face
    smileFaceModel.property( 'scoreFace' ).link( function( points ) {
      self.setPoints( points );
    } );

    // set smile face emotion
    smileFaceModel.property( 'isSmile' ).link( function( isFaceSmile ) {
      self[isFaceSmile ? 'smile' : 'frown' ]();
    } );

    // set visibility of smile face
    smileFaceModel.property( 'isVisible' ).linkAttribute( self, 'visible' );
  }

  return inherit( FaceWithScoreNode, FaceWithScoreConfiguredNode );
} );