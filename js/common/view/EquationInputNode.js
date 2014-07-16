// Copyright 2002-2014, University of Colorado Boulder

/**
 * Input node for equation node in 'Arithmetic' simulation.
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
   * @param property {Property} property for observing and changing by input
   * @param inputSize {Dimension2} size of input component
   * @param cursorVisibilityProperty {Property} property which switch true/false with given time interval
   *
   * @constructor
   */
  function EquationInputNode( property, cursorVisibilityProperty, inputSize ) {
    var self = this;
    Node.call( this );

    // create text and save link for further using
    this._inputText = new Text( PLACEHOLDER, {font: FONT_TEXT} );

    // create cursor and save link for further using
    this._cursor = new Rectangle( 0, 2, 1, this._inputText.getHeight() - 16, {fill: 'black'} );
    this._cursorContainer = new Node( {children: [this._cursor]} );

    // save link to input size value for further using
    this._inputSize = inputSize;

    // update text when property changed
    property.lazyLink( function( value ) {
      self._inputText.setText( value || '' );
      updateBoxPosition( self._box, inputSize );
    } );

    // blinking animation for cursor
    cursorVisibilityProperty.lazyLink( function( isCursorVisible ) {
      if ( self._cursorContainer.visible ) {
        self._cursor.visible = isCursorVisible;
      }
    } );

    // add background
    this.addChild( new Rectangle( 0, 0, inputSize.width, inputSize.height, 5, 5, {fill: 'white'} ) );

    // add text and cursor
    this._box = new HBox( {children: [this._inputText, this._cursorContainer], centerX: inputSize.width / 2, centerY: inputSize.height / 2} );
    this.addChild( this._box );

    // unfocus state by default
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
    },
    update: function() {
      updateBoxPosition( this._box, this._inputSize );
    }
  } );
} );
