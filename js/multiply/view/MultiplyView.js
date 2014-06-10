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
   * @param model
   * @constructor
   */
  function MultiplyView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableMultiplyNode(
        model.game,
        model.property( 'level' ),
        model.levels
      ),
      new EquationMultiplyNode(
        model.game.property( 'state' ),
        model.game.property( 'multiplierLeft' ),
        model.game.property( 'multiplierRight' ),
        model.property( 'input' )
      ),
      multiplyString
    );
  }

  return inherit( ArithmeticView, MultiplyView );
} );
