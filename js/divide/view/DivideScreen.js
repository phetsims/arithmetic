// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var inherit = require( 'PHET_CORE/inherit' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param model
   * @constructor
   */
  function DivideScreen( model ) {
    ArithmeticScreen.call( this, model, divideString );
  }

  return inherit( ArithmeticScreen, DivideScreen );
} );
