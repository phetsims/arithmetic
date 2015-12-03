// Copyright 2014-2015, University of Colorado Boulder

/**
 * Multiplication table header cell.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var AbstractCell = require( 'ARITHMETIC/common/view/table/AbstractCell' );

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

  return inherit( AbstractCell, MultiplicationTableHeaderCell, {
    //TODO: Names are weird - some are verbs, some are adjectives.  Improve.  Coordinate with body cell.
    select: function() {
      this.setBackgroundFill( SELECT_COLOR_BACKGROUND );
      this.setTextFill( SELECT_COLOR_TEXT );
    },
    normal: function() {
      this.setBackgroundFill( NORMAL_COLOR_BACKGROUND );
      this.setTextFill( NORMAL_COLOR_TEXT );
    }
  } );
} );
