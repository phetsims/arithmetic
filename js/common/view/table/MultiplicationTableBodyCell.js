// Copyright 2014-2019, University of Colorado Boulder

/**
 * This Scenery node represents one cell in the body (as opposed to the headers) of the multiplication table.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

define( require => {
  'use strict';

  // modules
  const AbstractCell = require( 'ARITHMETIC/common/view/table/AbstractCell' );
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const inherit = require( 'PHET_CORE/inherit' );

  // constants
  const HOVER_COLOR = 'rgb(238,253,77)';
  const NORMAL_COLOR = 'rgb(50,70,255)';
  const SELECT_COLOR = 'rgb(77,0,153)';

  /**
   * @param {Text} contentText - Text label for button.
   * @param {Object} backgroundOptions - Background options for button.
   * @constructor
   */
  function MultiplicationTableBodyCell( contentText, backgroundOptions ) {
    backgroundOptions = _.extend( {
      fill: NORMAL_COLOR
    }, backgroundOptions );
    AbstractCell.call( this, backgroundOptions, { initiallyVisible: false } );

    this.setText( contentText );
  }

  arithmetic.register( 'MultiplicationTableBodyCell', MultiplicationTableBodyCell );

  return inherit( AbstractCell, MultiplicationTableBodyCell, {

    // @public - set cell into the state that indicates that the user is hovering over it
    setHover: function() {
      this.setBackgroundFill( HOVER_COLOR );
    },

    // @public - set cell to normal, default appearance state
    setNormal: function() {
      this.setBackgroundFill( NORMAL_COLOR );
    },

    // @public - set cell to the selected state
    setSelected: function() {
      this.setBackgroundFill( SELECT_COLOR );
    }

  } );
} );
