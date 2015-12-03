// Copyright 2002-2014, University of Colorado Boulder

/**
 * This Scenery node represents one cell in the body (as opposed to the headers) of the multiplication table.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var AbstractCell = require( 'ARITHMETIC/common/view/table/AbstractCell' );

  // constants
  var ACTIVE_COLOR = 'rgb(3,18,136)';
  var HOVER_COLOR = 'rgb(238,253,77)';
  var NORMAL_COLOR = 'rgb(50,70,255)';
  var SELECT_COLOR = 'rgb(77,0,153)';

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

  return inherit( AbstractCell, MultiplicationTableBodyCell, {

    // TODO: active may no longer be needed
    // @public
    active: function() {
      this.setBackgroundFill( ACTIVE_COLOR );
    },

    // @public - set cell into the state that indicates that the user is hovering over it
    hover: function() {
      this.setBackgroundFill( HOVER_COLOR );
    },

    // @public - set cell to normal, default appearance state
    normal: function() {
      this.setBackgroundFill( NORMAL_COLOR );
    },

    // @public - set cell to the selected state
    select: function() {
      this.setBackgroundFill( SELECT_COLOR );
    }

  } );
} );
