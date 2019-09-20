// Copyright 2014-2019, University of Colorado Boulder

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  const FactorEquationNode = require( 'ARITHMETIC/factor/view/FactorEquationNode' );
  const FactorScreenTableNode = require( 'ARITHMETIC/factor/view/FactorScreenTableNode' );
  const inherit = require( 'PHET_CORE/inherit' );

  // strings
  const factorString = require( 'string!ARITHMETIC/factor' );

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
