// Copyright 2014-2021, University of Colorado Boulder

/**
 * Node that represents a smiling or frowning face with the additional points gained for getting the answer correct
 * shown immediately below it.  When shown, this node appears at full opacity for a while, then fades out.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import stepTimer from '../../../../axon/js/stepTimer.js';
import Utils from '../../../../dot/js/Utils.js';
import merge from '../../../../phet-core/js/merge.js';
import FaceWithPointsNode from '../../../../scenery-phet/js/FaceWithPointsNode.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import arithmetic from '../../arithmetic.js';

// constants
const UPDATE_PERIOD = 1 / 60 * 1000; // milliseconds, intended to match the expected frame rate
const OPAQUE_TIME = 1000; // milliseconds
const FADE_TIME = 1000; // milliseconds

class ArithmeticFaceWithPointsNode extends FaceWithPointsNode {

  /**
   * @param {Object} faceModel model for smile face.
   * @param {Object} [options] for face node.
   */
  constructor( faceModel, options ) {

    options = merge( {
      pointsFont: new PhetFont( { size: 26, weight: 'bold' } ),
      visible: false // Initially invisible, must receive a showFace event to become visible.
    }, options );

    super( options );

    // set score of smile face
    faceModel.pointsToDisplayProperty.link( points => this.setPoints( points ) );

    // set the facial expression
    faceModel.isSmileProperty.link( isFaceSmile => {
      if ( isFaceSmile ) {
        this.smile();
      }
      else {
        this.frown();
      }
    } );

    // Timer for fading the face.
    let timerID = null;

    // Handle the event that indicates that the face should be shown.
    faceModel.showFaceEmitter.addListener( () => {

      // make face fully visible
      this.visible = true;
      this.opacity = 1;

      // Set the countdown to the total for the opaque time and the fade time.
      let countdown = OPAQUE_TIME + FADE_TIME;

      // cancel previous timer if it exists
      if ( timerID !== null ) {
        stepTimer.clearInterval( timerID );
      }

      // start up the new timer
      timerID = stepTimer.setInterval( () => {
        countdown -= UPDATE_PERIOD;
        this.opacity = Utils.clamp( countdown / FADE_TIME, 0, 1 );
        if ( this.opacity === 0 ) {
          stepTimer.clearInterval( timerID );
          timerID = null;
          this.visible = false;
        }
      }, UPDATE_PERIOD );
    } );

    // Handle the event that indicates that the face should be hidden.
    faceModel.hideFaceEmitter.addListener( () => {

      // Cancel the timer (if running)
      if ( timerID !== null ) {
        stepTimer.clearTimeout( timerID );
        timerID = null;
      }

      // Go completely invisible.
      this.visible = false;
    } );
  }
}

arithmetic.register( 'ArithmeticFaceWithPointsNode', ArithmeticFaceWithPointsNode );
export default ArithmeticFaceWithPointsNode;