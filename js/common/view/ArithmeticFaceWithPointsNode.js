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
  var SMILE_DISAPPEAR_TIME = 1000; // time in milliseconds
  var FADE_STEPS = 25;

  /**
   * @param {Object} faceModel model for smile face.
   * Contains 'pointsToDisplay', 'isSmile', 'isVisible' properties
   * @param {Object} options for face node.
   *
   * @constructor
   */
  function ArithmeticFaceWithPointsNode( faceModel, options ) {
    var self = this,
      isVisibleProperty = faceModel.property( 'isVisible' );

    FaceWithPointsNode.call( this, _.extend( {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } ),
      opacity: isVisibleProperty.value ? 1 : 0 // match initial visibility
    }, options ) );

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
    var intervalId = null, timeoutId = null;
    isVisibleProperty.lazyLink( function( isVisible ) {
      // stop timer timeout
      if ( timeoutId !== null ) {
        Timer.clearTimeout( timeoutId );
        timeoutId = null;
      }

      // stop timer interval
      if ( intervalId !== null ) {
        Timer.clearInterval( intervalId );
        intervalId = null;
      }

      if ( isVisible ) {
        // make face visible
        self.opacity = 1;

        // and fade out it after pause
        timeoutId = Timer.setTimeout( function() {
          intervalId = Timer.setInterval( function() {
            self.opacity -= 1 / FADE_STEPS;
            if ( self.opacity <= 0 ) {
              isVisibleProperty.value = false;
            }
          }, SMILE_DISAPPEAR_TIME / FADE_STEPS );
        }, SMILE_DISAPPEAR_TIME );
      }
      else {
        // hide face
        self.opacity = 0;
      }
    } );
  }

  return inherit( FaceWithPointsNode, ArithmeticFaceWithPointsNode );
} );