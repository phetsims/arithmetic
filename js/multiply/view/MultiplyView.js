// Copyright 2014-2019, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MultiplyEquationNode = require( 'ARITHMETIC/multiply/view/MultiplyEquationNode' );
  const MultiplyScreenTableNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenTableNode' );

  // strings
  const multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param {MultiplyModel} model - Main model for screen.
   * @constructor
   */
  function MultiplyView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplyScreenTableNode(
        model.problemModel,
        model.stateProperty,
        model.levelNumberProperty,
        model.levelModels
      ),
      new MultiplyEquationNode(
        model.stateProperty,
        model.problemModel.multiplicandProperty,
        model.problemModel.multiplierProperty,
        model.inputProperty
      ),
      {
        titleString: multiplyString,
        levelSelectButtonColor: '#D8F58A',
        levelSelectIconSet: 'multiply'
      }
    );
  }

  arithmetic.register( 'MultiplyView', MultiplyView );

  return inherit( ArithmeticView, MultiplyView );
} );
