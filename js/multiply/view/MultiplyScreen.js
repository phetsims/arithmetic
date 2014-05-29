// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableMultiplyNode = require( 'ARITHMETIC/multiply/view/MultiplicationTableMultiplyNode' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param model
   * @constructor
   */
  function MultiplyScreen( model ) {
    ArithmeticScreen.call(
      this,
      model,
      new MultiplicationTableMultiplyNode(
        model.game,
        model.property( 'level' ),
        model.levels
      ),
      multiplyString
    );
  }

  return inherit( ArithmeticScreen, MultiplyScreen );
} );
