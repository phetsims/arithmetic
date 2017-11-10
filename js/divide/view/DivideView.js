// Copyright 2014-2017, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticView = require( 'ARITHMETIC/common/view/ArithmeticView' );
  var DivideEquationNode = require( 'ARITHMETIC/divide/view/DivideEquationNode' );
  var DivideScreenTableNode = require( 'ARITHMETIC/divide/view/DivideScreenTableNode' );
  var inherit = require( 'PHET_CORE/inherit' );

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
