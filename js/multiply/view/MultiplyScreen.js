// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var inherit = require( 'PHET_CORE/inherit' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param model
   * @constructor
   */
  function MultiplyScreen( model ) {
    ArithmeticScreen.call( this, model, multiplyString );
  }

  return inherit( ArithmeticScreen, MultiplyScreen );
} );
