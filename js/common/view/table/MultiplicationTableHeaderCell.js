// Copyright 2014-2017, University of Colorado Boulder

/**
 * Multiplication table header cell.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( require => {
  'use strict';

  // modules
  const AbstractCell = require( 'ARITHMETIC/common/view/table/AbstractCell' );
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const inherit = require( 'PHET_CORE/inherit' );

  // constants
  const NORMAL_COLOR_BACKGROUND = 'rgb(220,60,33)'; // background normal color
  const SELECT_COLOR_BACKGROUND = 'rgb(0,0,128)'; // background select color
  const NORMAL_COLOR_TEXT = 'white'; // text normal color
  const SELECT_COLOR_TEXT = 'rgb(255,253,56)'; // text select color

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
