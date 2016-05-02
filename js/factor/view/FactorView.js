// Copyright 2014-2015, University of Colorado Boulder

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var FactorEquationNode = require( 'ARITHMETIC/factor/view/FactorEquationNode' );
  var FactorScreenTableNode = require( 'ARITHMETIC/factor/view/FactorScreenTableNode' );
  var inherit = require( 'PHET_CORE/inherit' );

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
      new FactorScreenTableNode( model ),
      new FactorEquationNode(
        model.stateProperty,
        model.problemModel.multiplicandProperty,
        model.problemModel.multiplierProperty,
        model.problemModel.productProperty
      ),
      {
        showKeypad: false,
        titleString: factorString,
        levelSelectButtonColor: '#FFC266',
        levelSelectIconSet: 'factor'
      }
    );
  }

  arithmetic.register( 'FactorView', FactorView );

  return inherit( ArithmeticView, FactorView );
} );
