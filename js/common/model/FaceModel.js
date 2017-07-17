// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for cartoon face that is used to provide feedback in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var Emitter = require( 'AXON/Emitter' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );

  function FaceModel() {

    // @public - Points to be displayed near the face.  In this simulation, the user gets 1 point when they get a
    // challenge correct on the first try, zero otherwise.
    this.pointsToDisplayProperty = new Property( 1 );

    // @public - flag that controls the expression that the face should depict
    this.isSmileProperty = new Property( true );

    // @public - emitters for showing and hiding the face
    this.showFaceEmitter = new Emitter();
    this.hideFaceEmitter = new Emitter();
  }

  arithmetic.register( 'FaceModel', FaceModel );

  return inherit( Object, FaceModel, {

    // @public
    showFace: function() {
      // Use an emitter to indicate that the face should be shown rather than a property, since by design it is shown
      // and then fades.
      this.showFaceEmitter.emit();
    },

    // @public
    hideFace: function() {
      // Emit an event that indicates that the face should be hidden, should be ignored if the face is not currently
      // shown.
      this.hideFaceEmitter.emit();
    },

    // public
    reset: function() {
      this.pointsToDisplayProperty.reset();
      this.isSmileProperty.reset();
    }
  } );
} );
