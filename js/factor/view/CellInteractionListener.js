// Copyright 2015-2021, University of Colorado Boulder

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
import arithmetic from '../../arithmetic.js';

class CellInteractionListener {

  /**
   */
  constructor() {
    this.mouseOverProperty = new Property( false );
    this.touchedProperty = new Property( false );
    this.enabledProperty = new Property( true );

    this.mouseDownEmitter = new Emitter();
    this.mouseUpEmitter = new Emitter();
    this.touchUpEmitter = new Emitter();
  }

  // @public
  enter( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseOverProperty.set( true );
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchedProperty.set( true );
    }
  }

  // @public
  exit( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseOverProperty.set( false );
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchedProperty.set( false );
    }
  }

  // @public
  down( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseDownEmitter.emit();
    }
  }

  // @public
  up( event, trail ) {
    if ( event.pointer.type === 'mouse' ) {
      this.mouseUpEmitter.emit();
    }
    else if ( event.pointer.type === 'touch' ) {
      this.touchUpEmitter.emit();
    }
  }
}

arithmetic.register( 'CellInteractionListener', CellInteractionListener );

export default CellInteractionListener;