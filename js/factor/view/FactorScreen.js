// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var inherit = require( 'PHET_CORE/inherit' );

  // strings
  var factorString = require( 'string!ARITHMETIC/factor' );

  /**
   * @param model
   * @constructor
   */
  function FactorScreen( model ) {
    ArithmeticScreen.call( this, model, factorString );
  }

  return inherit( ArithmeticScreen, FactorScreen );
} );
