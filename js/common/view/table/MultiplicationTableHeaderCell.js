// Copyright 2014-2016, University of Colorado Boulder

/**
 * Multiplication table header cell.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var AbstractCell = require( 'ARITHMETIC/common/view/table/AbstractCell' );
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var inherit = require( 'PHET_CORE/inherit' );

  // constants
  var NORMAL_COLOR_BACKGROUND = 'rgb(220,60,33)'; // background normal color
  var SELECT_COLOR_BACKGROUND = 'rgb(0,0,128)'; // background select color
  var NORMAL_COLOR_TEXT = 'white'; // text normal color
  var SELECT_COLOR_TEXT = 'rgb(255,253,56)'; // text select color

  /**
   * @param {Text} contentText - Text label for button.
   * @param {Object} backgroundOptions - Background options for button.
   * @param {Object} textOptions - Text options for button.
   *
   * @constructor
   */
  function MultiplicationTableHeaderCell( contentText, backgroundOptions, textOptions ) {
    backgroundOptions = _.extend( {
      fill: NORMAL_COLOR_BACKGROUND
    }, backgroundOptions );
    AbstractCell.call( this, backgroundOptions, textOptions );

    this.setText( contentText );
  }

  arithmetic.register( 'MultiplicationTableHeaderCell', MultiplicationTableHeaderCell );

  return inherit( AbstractCell, MultiplicationTableHeaderCell, {

    // @public
    setSelected: function() {
      this.setBackgroundFill( SELECT_COLOR_BACKGROUND );
      this.setTextFill( SELECT_COLOR_TEXT );
    },

    // @public
    setNormal: function() {
      this.setBackgroundFill( NORMAL_COLOR_BACKGROUND );
      this.setTextFill( NORMAL_COLOR_TEXT );
    }
  } );
} );
