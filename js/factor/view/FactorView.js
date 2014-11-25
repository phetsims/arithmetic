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
  var EquationFactorNode = require( 'ARITHMETIC/factor/view/EquationFactorNode' );
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
        model.gameModel,
        model.answerSheet,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels
      ),
      new EquationFactorNode(
        model.property( 'state' ),
        model.gameModel.property( 'multiplierLeft' ),
        model.gameModel.property( 'multiplierRight' ),
        model.gameModel.property( 'product' )
      ),
      false,
      factorString );
  }

  return inherit( ArithmeticView, FactorView );
} );
