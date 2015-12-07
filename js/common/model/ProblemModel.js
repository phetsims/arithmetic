// Copyright 2014-2015, University of Colorado Boulder

/**
 * Model for single problem in the 'Arithmetic' simulation. This model contains properties necessary for each challenge
 * at the current level.  This works well as a component that can be passed to the various view elements.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @constructor
   */
  function ProblemModel() {
    PropertySet.call( this, {

      // @public (all fields)
      multiplicand: undefined,
      multiplier: undefined,
      product: undefined, // product of multiplication
      possiblePoints: 1 // points for correct completion of current task, can go down on incorrect answers
    } );
  }

  return inherit( PropertySet, ProblemModel );
} );