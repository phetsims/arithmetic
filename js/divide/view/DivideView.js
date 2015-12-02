// Copyright 2014-2015, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var DivideEquationNode = require( 'ARITHMETIC/divide/view/DivideEquationNode' );
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
        model.problemModel,
        model.answerSheet,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels
      ),
      new DivideEquationNode(
        model.property( 'state' ),
        model.problemModel.property( 'multiplicand' ),
        model.problemModel.property( 'multiplier' ),
        model.problemModel.property( 'product' ),
        model.property( 'input' ),
        model.property( 'activeInput' )
      ),
      {
        titleString: divideString,
        levelSelectButtonColor: '#BC76A5',
        levelSelectIconSet: 'divide'
      }
    );
  }

  return inherit( ArithmeticView, DivideView );
} );
