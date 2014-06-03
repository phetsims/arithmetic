// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var EquationDivideNode = require( 'ARITHMETIC/divide/view/EquationDivideNode' );
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
      new EquationDivideNode(
        model.game.property( 'multiplierLeft' ),
        model.game.property( 'multiplierRight' ),
        model.game.property( 'product' ),
        model.property( 'input' )
      ),
      divideString
    );
  }

  return inherit( ArithmeticScreen, DivideScreen );
} );
