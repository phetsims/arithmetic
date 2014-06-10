// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table multiplier button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableButtonAbstract = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonAbstract' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).MULTIPLICATION_TABLE.MULTIPLIER_BUTTON;

  function MultiplicationTableButtonMultiplierNode( contentText, width, height ) {
    MultiplicationTableButtonAbstract.call( this, {
      fill: CONSTANTS.NORMAL_COLOR,
      width: width,
      height: height
    } );

    this.setText( contentText );
  }

  return inherit( MultiplicationTableButtonAbstract, MultiplicationTableButtonMultiplierNode, {
    select: function() {
      this.setBackgroundFill( CONSTANTS.SELECT_COLOR );
    },
    normal: function() {
      this.setBackgroundFill( CONSTANTS.NORMAL_COLOR );
    }
  } );
} );
