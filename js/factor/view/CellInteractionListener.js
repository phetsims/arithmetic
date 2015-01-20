// Copyright 2002-2015, University of Colorado Boulder

/**
 * This is a Scenery input listener that is meant to be attached to the cells of the multiplication table.  It
 * maintains various state variables and fires events that are meant to enable the various mouse and touch interactions
 * needed for the "Factor" screen.
 *
 * This listener maintains three state variables and fires three events.  See the code for details.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Input = require( 'SCENERY/input/Input' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @constructor
   */
  function CellInteractionListener() {
    PropertySet.call( this, {
      mouseOver: false,
      touched: false,
      enabled: true
    } );
  }

  return inherit( PropertySet, CellInteractionListener, {

    enter: function( event, trail ) {
      if ( event.pointer.type === 'mouse' ) {
        this.mouseOver = true;
      }
      else if ( event.pointer.type === 'touch' ) {
        this.touched = true;
      }
    },

    exit: function( event, trail ) {
      if ( event.pointer.type === 'mouse' ) {
        this.mouseOver = false;
      }
      else if ( event.pointer.type === 'touch' ) {
        this.touched = false;
      }
    },

    down: function( event, trail ) {
      if ( event.pointer.type === 'mouse' ) {
        this.trigger( 'mouseDown' );
      }
    },

    up: function( event, trail ) {
      if ( event.pointer.type === 'mouse' ) {
        this.trigger( 'mouseUp' );
      }
      else if ( event.pointer.type === 'touch' ) {
        this.trigger( 'touchUp' );
      }
    }
  } );
} );