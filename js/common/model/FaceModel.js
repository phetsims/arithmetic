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
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function FaceModel() {
    PropertySet.call( this, {

      // @public - Points to be displayed near the face.  In this simulation, the user gets 1 point when they get a
      // challenge correct on the first try, zero otherwise.
      pointsToDisplay: 1,

      // flag that controls the expression that the face should depict
      isSmile: true
    } );
  }

  arithmetic.register( 'FaceModel', FaceModel );

  return inherit( PropertySet, FaceModel, {

    // @public
    showFace: function() {
      // Use a trigger to show the face rather than a property, since by design it is shown and then fades.
      this.trigger( 'showFace' );
    },

    // @public
    hideFace: function() {
      // Trigger the face to be hidden, should be ignored if the face is not currently shown.
      this.trigger( 'hideFace' );
    }
  } );
} );
