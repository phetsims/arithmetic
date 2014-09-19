// Copyright 2002-2014, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var EquationMultiplyNode = require( 'ARITHMETIC/multiply/view/EquationMultiplyNode' );
  var inherit = require( 'PHET_CORE/inherit' );
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
        model.gameModel,
        model.property( 'state' ),
        model.property( 'level' ),
        model.levelModels
      ),
      new EquationMultiplyNode(
        model.property( 'state' ),
        model.gameModel.property( 'multiplierLeft' ),
        model.gameModel.property( 'multiplierRight' ),
        model.property( 'input' )
      ),
      true,
      multiplyString
    );
  }

  return inherit( ArithmeticView, MultiplyView );
} );
