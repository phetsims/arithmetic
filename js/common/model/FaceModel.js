// Copyright 2002-2013, University of Colorado Boulder

/**
 * Model for smile face in the 'Arithmetic' simulation.
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

      scoreFace: 1, // score to be displayed near the smile face.  In this simulation, you get 1 point if you get a challenge correct, and zero otherwise.
      isVisible: false, // flag of smile face visibility
      isSmile: true // flag of smile face emotion
    } );
  }

  return inherit( PropertySet, FaceModel );
} );
