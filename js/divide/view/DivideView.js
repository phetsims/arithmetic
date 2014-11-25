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
   * @param {DivideModel} model - Main model for screen.
   * @constructor
   */
  function DivideView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableDivideNode(
        model.gameModel,
        model.answerSheet,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels
      ),
      new EquationDivideNode(
        model.gameModel.property( 'multiplierLeft' ),
        model.gameModel.property( 'multiplierRight' ),
        model.gameModel.property( 'product' ),
        model.property( 'input' ),
        model.property( 'activeInput' )
      ),
      true,
      divideString
    );
  }

  return inherit( ArithmeticView, DivideView );
} );
