// Copyright 2002-2014, University of Colorado Boulder

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var FactorEquationNode = require( 'ARITHMETIC/factor/view/FactorEquationNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableFactorNode = require( 'ARITHMETIC/factor/view/MultiplicationTableFactorNode' );

  // strings
  var factorString = require( 'string!ARITHMETIC/factor' );

  /**
   * @param {FactorModel} model - Main model for screen.
   * @constructor
   */
  function FactorView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableFactorNode(
        model.problemModel,
        model.answerSheet,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels,
        model.submitAnswer.bind( model )
      ),
      new FactorEquationNode(
        model.property( 'state' ),
        model.problemModel.property( 'multiplierLeft' ),
        model.problemModel.property( 'multiplierRight' ),
        model.problemModel.property( 'product' )
      ),
      {
        showKeypad: false,
        titleString: factorString,
        levelSelectButtonColor: '#FFC266',
        levelSelectIconSet: 'factor'
      }
    );
  }

  return inherit( ArithmeticView, FactorView );
} );
