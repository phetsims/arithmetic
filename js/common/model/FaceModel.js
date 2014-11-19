// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for cartoon face that is used to provide feedback in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function FaceModel() {
    PropertySet.call( this, {

      // Points to be displayed near the face.  In this simulation, you get 1 point if you get a challenge correct on
      // the first try, zero otherwise.
      pointsToDisplay: 1,

      // flag that controls the expression that the face should depict
      isSmile: true
    } );
  }

  return inherit( PropertySet, FaceModel, {

    showFace: function() {
      // Use a trigger to show the face rather than a property, since by design it is shown and then fades.
      this.trigger( 'showFace' );
    },

    hideFace: function() {
      // Trigger the face to be hidden, should be ignored if it is not shown.
      this.trigger( 'hideFace' );
    }
  } );
} );
