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
   * @param {Text} contentText - Text label for button.
   * @param {Object} backgroundOptions - Background options for button.
   * @param {Object} textOptions - Text options for button.
   *
   * @constructor
   */
  function MultiplicationTableButtonMultiplierNode( contentText, backgroundOptions, textOptions ) {
    backgroundOptions = _.extend( {
      fill: CONSTANTS.NORMAL_COLOR
    }, backgroundOptions );
    MultiplicationTableButtonAbstract.call( this, backgroundOptions, textOptions );

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
