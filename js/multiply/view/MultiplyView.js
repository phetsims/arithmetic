// Copyright 2014-2015, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplyEquationNode = require( 'ARITHMETIC/multiply/view/MultiplyEquationNode' );
  var MultiplicationTableMultiplyNode = require( 'ARITHMETIC/multiply/view/MultiplicationTableMultiplyNode' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param {MultiplyModel} model - Main model for screen.
   * @constructor
   */
  function MultiplyView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableMultiplyNode(
        model.problemModel,
        model.answerSheet,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels
      ),
      new MultiplyEquationNode(
        model.property( 'state' ),
        model.problemModel.property( 'multiplicand' ),
        model.problemModel.property( 'multiplier' ),
        model.property( 'input' )
      ),
      {
        titleString: multiplyString,
        levelSelectButtonColor: '#D8F58A',
        levelSelectIconSet: 'multiply'
      }
    );
  }

  return inherit( ArithmeticView, MultiplyView );
} );
