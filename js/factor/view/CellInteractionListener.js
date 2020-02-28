// Copyright 2015-2020, University of Colorado Boulder

/**
 * This is a Scenery input listener that is meant to be attached to the cells of the multiplication table.  It
 * maintains various state variables and fires events that are meant to enable the various mouse and touch interactions
 * needed for the "Factor" screen.
 *
 * This listener maintains three state variables and fires three events.  See the code for details.
 *
 * @author John Blanco
 */

import Emitter from '../../../../axon/js/Emitter.js';
import Property from '../../../../axon/js/Property.js';
import inherit from '../../../../phet-core/js/inherit.js';
import arithmetic from '../../arithmetic.js';

/**
 * @constructor
 */
function CellInteractionListener() {
  this.mouseOverProperty = new Property( false );
  this.touchedProperty = new Property( false );
  this.enabledProperty = new Property( true );

  this.mouseDownEmitter = new Emitter();
  this.mouseUpEmitter = new Emitter();
  this.touchUpEmitter = new Emitter();
}

arithmetic.register( 'CellInteractionListener', CellInteractionListener );

export default inherit( Object, CellInteractionListener, {

  // @public
  enter: function( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseOverProperty.set( true );
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchedProperty.set( true );
    }
  },

  // @public
  exit: function( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseOverProperty.set( false );
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchedProperty.set( false );
    }
  },

  // @public
  down: function( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseDownEmitter.emit();
    }
  },

  // @public
  up: function( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseUpEmitter.emit();
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchUpEmitter.emit();
    }
  }
} );