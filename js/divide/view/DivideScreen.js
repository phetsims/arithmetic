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
  var MultiplicationTableDivideNode = require( 'ARITHMETIC/divide/view/MultiplicationTableDivideNode' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param model
   * @constructor
   */
  function DivideScreen( model ) {
    ArithmeticScreen.call(
      this,
      model,
      new MultiplicationTableDivideNode(
        model.game,
        model.property( 'level' ),
        model.levels
      ),
      divideString
    );
  }

  return inherit( ArithmeticScreen, DivideScreen );
} );
