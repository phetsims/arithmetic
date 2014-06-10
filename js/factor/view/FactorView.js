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
   * @param model
   * @constructor
   */
  function FactorView( model ) {
    ArithmeticView.call(
      this,
      model,
      new MultiplicationTableFactorNode(
        model.game,
        model.property( 'level' ),
        model.levels
      ),
      new EquationFactorNode(
        model.game.property( 'state' ),
        model.game.property( 'multiplierLeft' ),
        model.game.property( 'multiplierRight' ),
        model.game.property( 'product' )
      ),
      factorString );
  }

  return inherit( ArithmeticView, FactorView );
} );
