// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that represents a smiling face with the additional points gained for getting the answer correct shown
 * immediately below it.
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
   * @param {Object} faceModel model for smile face.
   * Contains 'pointsToDisplay', 'isSmile', 'isVisible' properties
   *
   * @constructor
   */
  function ArithmeticFaceWithPointsNode( faceModel ) {
    var self = this;
    FaceWithPointsNode.call( this, {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } ),
      opacity: faceModel.isVisible ? 1 : 0 // match initial visibility
    } );

    // add observers

    // set score of smile face
    faceModel.property( 'pointsToDisplay' ).link( function( points ) {
      self.setPoints( points );
    } );

    // set smile face emotion
    faceModel.property( 'isSmile' ).link( function( isFaceSmile ) {
      if ( isFaceSmile ) {
        self.smile();
      }
      else {
        self.grimace();
      }
    } );

    // set visibility of smile face
    var intervalId = null;
    faceModel.property( 'isVisible' ).lazyLink( function( isVisible ) {

      // stop previous fade timer (if present)
      if ( intervalId !== null ) {
        Timer.clearInterval( intervalId );
        intervalId = null;
      }

      if ( isVisible ) {
        self.opacity = 1;
      }
      else {
        // Fade out rather than going immediately invisible.
        intervalId = Timer.setInterval( function() {
          self.opacity -= 1 / FADE_STEPS;
          if ( self.opacity <= 0 ) {
            self.opacity = 0;
            Timer.clearInterval( intervalId );
            intervalId = null;
          }
        }, SMILE_DISAPPEAR_TIME / FADE_STEPS );
      }
    } );
  }

  return inherit( FaceWithPointsNode, ArithmeticFaceWithPointsNode );
} );