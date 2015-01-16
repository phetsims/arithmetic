// Copyright 2002-2015, University of Colorado Boulder

/**
 * This is a variant on Sun's button listener that handles touch a bit differently.  The difference is that it treats
 * an initial touch event like a hovering mouse, i.e. it activates 'over' on the button model, and a second touch
 * event activates 'down'.  This was originally copied from SUN/buttons and changed to meet these new behavioral
 * requirements.  See the original file for additional documentation.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var DownUpListener = require( 'SCENERY/input/DownUpListener' );
  var Input = require( 'SCENERY/input/Input' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {*} buttonModel any object with 'down' and 'over' boolean properties
   * @constructor
   */
  function ButtonListener( buttonModel ) {
    this.buttonModel = buttonModel; // @private
    var buttonListener = this;

    // Track the pointer that is currently interacting with this button, ignore others.
    this.overPointer = null; // @private
    this.downPointer = null; // @private

    // Track whether this listener was armed by a touch event.
    this.armedByTouch = false;

    DownUpListener.call( this, {
        down: function( event, trail ) {

          // make sure this isn't a 2nd pointer coming down on this button.
          if ( buttonListener.downPointer === null ) {
            buttonListener.downPointer = event.pointer;

            // if this is a mouse event, set the down state on the button model
            if ( event.pointer.type === 'mouse' ) {
              buttonModel.down = true;
            }
            else if ( event.pointer.type === 'touch' ) {
              // this is a touch event, so it either arms for the next event or sets button model down state
              if ( buttonListener.armedByTouch ) {
                buttonModel.down = true;
                buttonListener.armedByTouch = false;
              }
              else {
                buttonListener.armedByTouch = true;
              }
            }
          }
        },

        up: function( event, trail ) {
          if ( event.pointer === buttonListener.downPointer ) {
            buttonListener.downPointer = null;
            buttonModel.down = false;
          }
        }
      }
    );
  }

  return inherit( DownUpListener, ButtonListener, {

    /**
     * Clears the 'armed' state.  This is used when the
     * @param event
     * @param trail
     */
    clearArmedByTouch: function() {
      this.armedByTouch = false;
    },

    /**
     * When this Button has focus, pressing a key down presses the button.  This is part of the accessibility feature set.
     * This API is subject to change (if we make a more specific ENTER/SPACE callback
     * @param {Event} event
     * @param {Trail} trail
     */
    keydown: function( event, trail ) {
      if ( event.domEvent.keyCode === Input.KEY_ENTER || event.domEvent.keyCode === Input.KEY_SPACE ) {
        this.enter( event, trail );
        this.buttonModel.down = true;
      }
    },

    /**
     * When this Button has focus, pressing a key up releases the button.  This is part of the accessibility feature set.
     * This API is subject to change (if we make a more specific ENTER/SPACE callback
     * @param {Event} event
     * @param {Trail} trail
     */
    keyup: function( event, trail ) {
      if ( event.domEvent.keyCode === Input.KEY_ENTER || event.domEvent.keyCode === Input.KEY_SPACE ) {
        this.buttonModel.down = false;
        this.exit( event, trail );
      }
    },

    enter: function( event, trail ) {
      if ( this.overPointer === null ) {
        this.overPointer = event.pointer;
        this.buttonModel.over = true;
      }
    },

    exit: function( event, trail ) {
      if ( event.pointer === this.overPointer ) {
        this.overPointer = null;
        this.buttonModel.over = false;
      }
    }
  } );
} );