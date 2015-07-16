// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that represents a smiling or frowning face with the additional points gained for getting the answer correct
 * shown immediately below it.  When shown, this node appears at full opacity for a while, then fades out.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var FaceWithPointsNode = require( 'SCENERY_PHET/FaceWithPointsNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Util = require( 'DOT/Util' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Timer = require( 'JOIST/Timer' );

  // constants
  var UPDATE_PERIOD = 1 / 60 * 1000; // milliseconds, intended to match the expected frame rate
  var OPAQUE_TIME = 1000; // milliseconds
  var FADE_TIME = 1000; // milliseconds

  /**
   * @param {Object} faceModel model for smile face.
   * @param {Object} [options] for face node.
   *
   * @constructor
   */
  function ArithmeticFaceWithPointsNode( faceModel, options ) {
    var self = this;

    FaceWithPointsNode.call( this, _.extend( {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } ),
      visible: false // Initially invisible, must receive a showFace event to become visible.
    }, options ) );

    // set score of smile face
    faceModel.property( 'pointsToDisplay' ).link( function( points ) {
      self.setPoints( points );
    } );

    // set the facial expression
    faceModel.property( 'isSmile' ).link( function( isFaceSmile ) {
      if ( isFaceSmile ) {
        self.smile();
      }
      else {
        self.frown();
      }
    } );

    // Timer for fading the face.
    var timerID = null;

    // Handle the event that indicates that the face should be shown.
    faceModel.on( 'showFace', function() {

      // make face fully visible
      self.visible = true;
      self.opacity = 1;

      // Set the countdown to the total for the opaque time and the fade time.
      var countdown = OPAQUE_TIME + FADE_TIME;

      // If the timer isn't already running, start it up.
      if ( timerID === null ) {
        timerID = Timer.setInterval( function() {
          countdown -= UPDATE_PERIOD;
          self.opacity = Util.clamp( countdown / FADE_TIME, 0, 1 );
          if ( self.opacity === 0 ) {
            Timer.clearInterval( timerID );
            timerID = null;
            self.visible = false;
          }
        }, UPDATE_PERIOD );
      }
    } );

    // Handle the event that indicates that the face should be hidden.
    faceModel.on( 'hideFace', function() {

      // Cancel the timer (if running)
      if ( timerID !== null ) {
        Timer.clearTimeout( timerID );
        timerID = null;
      }

      // Go completely invisible.
      self.visible = false;
    } );
  }

  return inherit( FaceWithPointsNode, ArithmeticFaceWithPointsNode );
} );