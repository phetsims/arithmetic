// Copyright 2002-2014, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var EquationDivideNode = require( 'ARITHMETIC/divide/view/EquationDivideNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableDivideNode = require( 'ARITHMETIC/divide/view/MultiplicationTableDivideNode' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param model
   * @constructor
   */
  function DivideView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableDivideNode(
        model.game,
        model.property( 'level' ),
        model.levels
      ),
      new EquationDivideNode(
        model.game.property( 'state' ),
        model.game.property( 'multiplierLeft' ),
        model.game.property( 'multiplierRight' ),
        model.game.property( 'product' ),
        model.property( 'input' )
      ),
      divideString
    );
  }

  return inherit( ArithmeticView, DivideView );
} );
