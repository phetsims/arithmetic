// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that looks like an edit box and that is used to either display a fixed value or to show what the user has
 * entered, depending on the particular challenge being presented to the user.  It has the capability to display a
 * blinking cursor, which is generally used when this node is being used to show user-entered values.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Timer = require( 'JOIST/Timer' );

  // constants
  var PLACEHOLDER = require( 'string!ARITHMETIC/unknownValueIndicator' );
  var INTERACTIVE_FILL = 'white';
  var NON_INTERACTIVE_FILL = '#dddddd';

  /**
   * @param {Property} valueProperty for observing and changing by input
   * @param {Dimension2} size - Dimensions of this input component.
   *
   * @constructor
   */
  function EquationInputNode( valueProperty, size ) {
    var self = this;
    Node.call( this );

    // create text and save reference for use in public methods
    this.inputText = new Text( PLACEHOLDER, { font: ArithmeticConstants.EQUATION_FONT_TEXT } ); // @private

    // create cursor and save reference for use in public methods
    this.cursor = new Rectangle( 0, 2, 1, this.inputText.height - 12, { fill: 'black' } );
    this.cursorContainer = new Node( { children: [ this.cursor ] } );

    // save reference to input size value for use in public methods
    this.inputSize = size;

    // update text when the value changes
    valueProperty.lazyLink( function( value ) {
      self.inputText.setText( value || '' );
      updateBoxPosition( self._box, size );
    } );

    // set up blinking of cursor
    Timer.setInterval( function() {
      self.cursor.visible = !self.cursor.visible;
    }, ArithmeticConstants.CURSOR_BLINK_INTERVAL );

    // add background
    this.background = new Rectangle( 0, 0, size.width, size.height, 5, 5, { fill: NON_INTERACTIVE_FILL } ); // @private
    this.addChild( this.background );

    // add text and cursor
    this._box = new HBox( { children: [ this.inputText, this.cursorContainer ], centerX: size.width / 2, centerY: size.height / 2 } );
    this.addChild( this._box );

    // unfocused state by default
    this.setFocus( false );
  }

  var updateBoxPosition = function( box, inputSize ) {
    box.centerX = inputSize.width / 2;
    box.centerY = inputSize.height / 2;
  };

  return inherit( Node, EquationInputNode, {

    /**
     * Clear the textual value shown in this node.  This is done regardless of the value of the value property that is
     * being monitored by this node.
     * @public
     */
    clear: function() {
      this.inputText.setText( '' );
      updateBoxPosition( this._box, this.inputSize );
    },

    /**
     * Set or remove focus, which for this component simply turns the blinking cursor on or off.
     *
     * @param {boolean} focus
     * @public
     */
    setFocus: function( focus ) {
      this.cursorContainer.visible = focus;
    },

    /**
     * Set the appearance of this node to indicate to the user that it is interactive, meaning that their actions are
     * going to change its value.
     * @param {boolean} interactive
     * @public
     */
    setInteractiveAppearance: function( interactive ) {
      this.background.fill = interactive ? INTERACTIVE_FILL : NON_INTERACTIVE_FILL;
    },

    /**
     * Set the textual value of this node to a 'placeholder' value (a question mark at the time of this writing).
     * @public
     */
    setPlaceholder: function() {
      this.inputText.setText( PLACEHOLDER );
      updateBoxPosition( this._box, this.inputSize );
    }
  } );
} );
