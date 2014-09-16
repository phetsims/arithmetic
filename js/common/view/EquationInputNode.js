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
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_TEXT = new PhetFont( { size: 32 } );
  var PLACEHOLDER = '?';

  /**
   * @param {Property} valueProperty for observing and changing by input
   * @param {Property} cursorVisibilityProperty - Property which switches true/false with given time interval.
   * @param {Dimension2} size - Dimensions of this input component.
   *
   * @constructor
   */
  function EquationInputNode( valueProperty, cursorVisibilityProperty, size ) {
    var self = this;
    Node.call( this );

    // create text and save reference for use in public methods
    this._inputText = new Text( PLACEHOLDER, {font: FONT_TEXT} );

    // create cursor and save reference for use in public methods
    this._cursor = new Rectangle( 0, 2, 1, this._inputText.height - 12, {fill: 'black'} );
    this._cursorContainer = new Node( {children: [this._cursor]} );

    // save reference to input size value for use in public methods
    this._inputSize = size;

    // update text when the value changes
    valueProperty.lazyLink( function( value ) {
      self._inputText.setText( value || '' );
      updateBoxPosition( self._box, size );
    } );

    // blinking animation for cursor
    cursorVisibilityProperty.lazyLink( function( isCursorVisible ) {
      self._cursor.visible = isCursorVisible;
    } );

    // add background
    this.addChild( new Rectangle( 0, 0, size.width, size.height, 5, 5, {fill: 'white'} ) );

    // add text and cursor
    this._box = new HBox( {children: [this._inputText, this._cursorContainer], centerX: size.width / 2, centerY: size.height / 2} );
    this.addChild( this._box );

    // unfocused state by default
    this.unfocus();
  }

  var updateBoxPosition = function( box, inputSize ) {
    box.centerX = inputSize.width / 2;
    box.centerY = inputSize.height / 2;
  };

  return inherit( Node, EquationInputNode, {
    clear: function() {
      this._inputText.setText( '' );
      updateBoxPosition( this._box, this._inputSize );
    },
    focus: function() {
      this._cursorContainer.visible = true;
    },
    unfocus: function() {
      this._cursorContainer.visible = false;
    },
    setPlaceholder: function() {
      this._inputText.setText( PLACEHOLDER );
      this.update();
    },
    update: function() {
      updateBoxPosition( this._box, this._inputSize );
    }
  } );
} );
