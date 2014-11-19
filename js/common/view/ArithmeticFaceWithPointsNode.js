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
  var SMILE_OPAQUE_TIME = 1000; // time in milliseconds
  var SMILE_FADE_TIME = 1000; // time in milliseconds
  var FADE_STEPS = 25;

  /**
   * @param {Object} faceModel model for smile face.
   * @param {Object} options for face node.
   *
   * @constructor
   */
  function ArithmeticFaceWithPointsNode( faceModel, options ) {
    var self = this;

    FaceWithPointsNode.call( this, _.extend( {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } ),
      visible: false // Initially invisible, must receive an showFace event to become visible.
    }, options ) );

    // add observers

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
        self.grimace();
      }
    } );

    // Timer IDs for pre-fade and fade timers.
    var opaqueTimeID = null, fadeTimeID = null;

    faceModel.on( 'showFace', function() {

      // make face fully visible
      self.visible = true;
      self.opacity = 1;

      // set up timers to leave the face as fully opaque for a bit, then fade out
      opaqueTimeID = Timer.setTimeout( function() {
        opaqueTimeID = null;
        fadeTimeID = Timer.setInterval( function() {
          self.opacity -= 1 / FADE_STEPS;
          if ( self.opacity <= 0 ) {
            Timer.clearInterval( fadeTimeID );
            fadeTimeID = null;
            self.visible = false;
          }
        }, SMILE_FADE_TIME / FADE_STEPS );
      }, SMILE_OPAQUE_TIME );
    } );

    faceModel.on( 'hideFace', function() {

      // Cancel the timers used to fade out the face.
      if ( opaqueTimeID !== null ) {
        Timer.clearTimeout( opaqueTimeID );
        opaqueTimeID = null;
      }
      if ( fadeTimeID !== null ) {
        Timer.clearInterval( fadeTimeID );
        fadeTimeID = null;
      }

      // Go completely invisible.
      self.visible = false;
    } );
  }

  return inherit( FaceWithPointsNode, ArithmeticFaceWithPointsNode );
} );