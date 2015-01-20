// Copyright 2002-2015, University of Colorado Boulder

/**
 * This is a Scenery input listener that is meant to be attached to the cells of the multiplication table.  It
 * maintains various state variables and fires events that are meant to enable the various mouse and touch interactions
 * needed for the "Factor" screen.
 *
 * TODO: DOC states and events.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  // TODO: Does using the down-up listener add any value?
//  var DownUpListener = require( 'SCENERY/input/DownUpListener' );

  var inherit = require( 'PHET_CORE/inherit' );
  var Input = require( 'SCENERY/input/Input' );
  var PropertySet = require( 'AXON/PropertySet' );

  var instanceCount = 0;

  /**
   * @constructor
   */
  function CellInteractionListener() {

    // TODO: Instance is temporary for debug, remove when this is working.
    this.instance = instanceCount++;
    PropertySet.call( this, {
      mouseOver: false,
      touched: false,
      enabled: true
    } );
  }

  return inherit( PropertySet, CellInteractionListener, {

    logMessage: function( message ) {
      var fullMessage = 'instance ' + this.instance + ': ' + message;
      window.phet.debugText.text = fullMessage;
      console.log( fullMessage );
    },

    enter: function( event, trail ) {
      this.logMessage( 'enter, pointer type = ' + event.pointer.type );
      if ( event.pointer.type === 'mouse' ) {
        this.mouseOver = true;
      }
      else if ( event.pointer.type === 'touch' ) {
        this.touched = true;
      }
    },

    exit: function( event, trail ) {
      this.logMessage( 'exit, pointer type = ' + event.pointer.type );
      if ( event.pointer.type === 'mouse' ) {
        this.mouseOver = false;
      }
      else if ( event.pointer.type === 'touch' ) {
        this.touched = false;
      }
    },

    down: function( event, trail ) {
      this.logMessage( 'down, pointer type = ' + event.pointer.type );
      if ( event.pointer.type === 'mouse' ) {
        this.trigger( 'mouseDown' );
      }
    },

    up: function( event, trail ) {
      this.logMessage( 'up, pointer type = ' + event.pointer.type );
      if ( event.pointer.type === 'mouse' ) {
        this.trigger( 'mouseUp' );
      }
      else if ( event.pointer.type === 'touch' ) {
        this.trigger( 'touchUp' );
      }
    }
  } );
} );