// Copyright 2014-2017, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  const DivideEquationNode = require( 'ARITHMETIC/divide/view/DivideEquationNode' );
  const DivideScreenTableNode = require( 'ARITHMETIC/divide/view/DivideScreenTableNode' );
  const inherit = require( 'PHET_CORE/inherit' );

  // strings
  const divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param {DivideModel} model - Main model for screen.
   * @constructor
   */
  function DivideView( model ) {

    ArithmeticView.call(
      this,
      model,
      new DivideScreenTableNode( model ),
      new DivideEquationNode(
        model.stateProperty,
        model.problemModel.multiplicandProperty,
        model.problemModel.multiplierProperty,
        model.problemModel.productProperty,
        model.inputProperty,
        model.activeInputProperty
      ),
      {
        titleString: divideString,
        levelSelectButtonColor: '#BC76A5',
        levelSelectIconSet: 'divide'
      }
    );
  }

  arithmetic.register( 'DivideView', DivideView );

  return inherit( ArithmeticView, DivideView );
} );
