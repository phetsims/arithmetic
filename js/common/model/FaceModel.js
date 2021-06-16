// Copyright 2014-2021, University of Colorado Boulder

/**
 * Model for cartoon face that is used to provide feedback in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Emitter from '../../../../axon/js/Emitter.js';
import Property from '../../../../axon/js/Property.js';
import arithmetic from '../../arithmetic.js';

class FaceModel {

  constructor() {

    // @public - Points to be displayed near the face.  In this simulation, the user gets 1 point when they get a
    // challenge correct on the first try, zero otherwise.
    this.pointsToDisplayProperty = new Property( 1 );

    // @public - flag that controls the expression that the face should depict
    this.isSmileProperty = new Property( true );

    // @public - emitters for showing and hiding the face
    this.showFaceEmitter = new Emitter();
    this.hideFaceEmitter = new Emitter();
  }

  // @public
  showFace() {
    // Use an emitter to indicate that the face should be shown rather than a property, since by design it is shown
    // and then fades.
    this.showFaceEmitter.emit();
  }

  // @public
  hideFace() {
    // Emit an event that indicates that the face should be hidden, should be ignored if the face is not currently
    // shown.
    this.hideFaceEmitter.emit();
  }

  // @public
  reset() {
    this.pointsToDisplayProperty.reset();
    this.isSmileProperty.reset();
  }
}

arithmetic.register( 'FaceModel', FaceModel );

export default FaceModel;