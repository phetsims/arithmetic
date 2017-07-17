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
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );

  /**
   * @constructor
   */
  function ProblemModel() {

    // @public - model properties
    this.multiplicandProperty = new Property( undefined );
    this.multiplierProperty = new Property( undefined );
    this.productProperty = new Property( undefined ); // product of multiplication
    this.possiblePointsProperty = new Property( 1 ); // points for correct completion of current task, can go down on incorrect answers

    Property.preventGetSet( this, 'multiplicand' );
    Property.preventGetSet( this, 'multiplier' );
    Property.preventGetSet( this, 'product' );
    Property.preventGetSet( this, 'possiblePoints' );
  }

  arithmetic.register( 'ProblemModel', ProblemModel );

  return inherit( Object, ProblemModel, {

    // @public
    reset: function() {
      this.multiplicandProperty.reset();
      this.multiplierProperty.reset();
      this.productProperty.reset();
      this.possiblePointsProperty.reset();
    }
  } );
} );