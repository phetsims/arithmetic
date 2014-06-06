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
  //var Timer = require( 'JOIST/Timer' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).EQUATION;
  var FONT_TEXT = new PhetFont( 32 );
  var INPUT_SIZE = CONSTANTS.INPUT_SIZE;
  var PLACEHOLDER = '?';

  function EquationInputNode( property ) {
    var self = this;
    Node.call( this );

    this._inputText = new Text( PLACEHOLDER, {font: FONT_TEXT} );
    this._cursor = new Rectangle( 0, 2, 1, this._inputText.getHeight() - 4, {fill: 'black'} );

    // update text when property changed
    property.lazyLink( function( value ) {
      self._inputText.setText( value );
      updateBoxPosition( self._box );
    } );

    // TODO: blinking animation for cursor
    /*Timer.setInterval( function() {
     self._cursor.visible = !self._cursor.visible;
     }, 500 );*/

    // add background
    this.addChild( new Rectangle( 0, 0, INPUT_SIZE.width, INPUT_SIZE.height, 5, 5, {fill: 'white', stroke: 'black', lineWidth: 1.5} ) );

    // add text and cursor
    this._box = new HBox( {children: [this._inputText, this._cursor], centerX: INPUT_SIZE.width / 2, centerY: INPUT_SIZE.height / 2} );
    this.addChild( this._box );

    // disable by default
    this.disable();
  }

  var updateBoxPosition = function( box ) {
    box.centerX = INPUT_SIZE.width / 2;
    box.centerY = INPUT_SIZE.height / 2;
  };

  return inherit( Node, EquationInputNode, {
    clear: function() {
      this._inputText.setText( '' );
      updateBoxPosition( this._box );
    },
    disable: function() {
      // TODO: add button behaviour
      this._cursor.visible = false;
    },
    enable: function() {
      // TODO: add button behaviour
      this._cursor.visible = true;
    },
    focus: function() {
      // TODO: start blinking cursor
    },
    unfocus: function() {
      // TODO: stop blinking cursor
    },
    reset: function(){
      this._inputText.setText( PLACEHOLDER );
      updateBoxPosition( this._box );
      this.disable();
    }
  } );
} );
