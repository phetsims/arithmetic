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

  /**
   * @param contentText {Text} text label for button
   * @param options {Object} options of multiplier button
   *
   * @constructor
   */
  function MultiplicationTableButtonMultiplierNode( contentText, options ) {
    options = _.extend( {
      fill: CONSTANTS.NORMAL_COLOR
    }, options );
    MultiplicationTableButtonAbstract.call( this, options );

    this.setText( contentText );
  }

  return inherit( MultiplicationTableButtonAbstract, MultiplicationTableButtonMultiplierNode, {
    select: function() {
      this.setBackgroundFill( CONSTANTS.SELECT_COLOR_BACKGROUND );
      this.setTextFill( CONSTANTS.SELECT_COLOR_TEXT );
    },
    normal: function() {
      this.setBackgroundFill( CONSTANTS.NORMAL_COLOR_BACKGROUND );
      this.setTextFill( CONSTANTS.NORMAL_COLOR_TEXT );
    }
  } );
} );
