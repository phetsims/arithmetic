// Copyright 2014-2015, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplyEquationNode = require( 'ARITHMETIC/multiply/view/MultiplyEquationNode' );
  var MultiplyScreenTableNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenTableNode' );

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
