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
  var Timer = require( 'JOIST/Timer' );

  // constants
  var FADE_STEPS = 25;
  var SMILE_DISAPPEAR_TIME = require( 'ARITHMETIC/common/ArithmeticConstants' ).SMILE_DISAPPEAR_TIME;

  /**
   * @param smileFaceModel {Object} model for smile face.
   * Contains 'scoreFace', 'isSmile', 'isVisible' properties
   *
   * @constructor
   */

  function ArithmeticFaceWithPointsNode( smileFaceModel ) {
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
    smileFaceModel.property( 'isVisible' ).link( function( isVisible ) {
      if ( isVisible ) {
        self.opacity = 1;
      }
      else {
        var intervalId = Timer.setInterval( function() {
          self.opacity -= 1 / FADE_STEPS;
          if ( self.opacity <= 0 ) {
            self.opacity = 0;
            Timer.clearInterval( intervalId );
          }
        }, SMILE_DISAPPEAR_TIME / FADE_STEPS );
      }
    } );
  }

  return inherit( FaceWithPointsNode, ArithmeticFaceWithPointsNode );
} );