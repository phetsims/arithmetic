// Copyright 2014-2020, University of Colorado Boulder

/**
 * Node that looks like an edit box and that is used to either display a fixed value or to show what the user has
 * entered, depending on the particular challenge being presented to the user.  It has the capability to display a
 * blinking cursor, which is generally used when this node is being used to show user-entered values.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import stepTimer from '../../../../axon/js/stepTimer.js';
import inherit from '../../../../phet-core/js/inherit.js';
import HBox from '../../../../scenery/js/nodes/HBox.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import arithmeticStrings from '../../arithmeticStrings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticConstants from '../ArithmeticConstants.js';

const unknownValueIndicatorString = arithmeticStrings.unknownValueIndicator;

// constants
const INTERACTIVE_FILL = 'white';
const NON_INTERACTIVE_FILL = '#dddddd';
const MIN_X_MARGIN = 5;
const CURSOR_HEIGHT = new Text( '8', { font: ArithmeticConstants.EQUATION_FONT_TEXT } ).height * 0.7;

// convenience function to avoid duplicated code
const updateBoxPosition = function( box, inputSize ) {
  box.centerX = inputSize.width / 2;
  box.centerY = inputSize.height / 2;
};

/**
 * @param {Property} valueProperty for observing and changing by input
 * @param {Dimension2} size - Dimensions of this input component.
 *
 * @constructor
 */
function EquationInputNode( valueProperty, size ) {
  const self = this;
  Node.call( this );

  // @private - create text and save reference for use in public methods
  this.inputText = new Text( unknownValueIndicatorString, {
    font: ArithmeticConstants.EQUATION_FONT_TEXT,
    maxWidth: size.width - 2 * MIN_X_MARGIN
  } );

  // @private - create cursor and save reference for use in public methods
  this.textCursor = new Rectangle( 0, 2, 1, CURSOR_HEIGHT, { fill: 'black' } );
  this.cursorContainer = new Node( { children: [ this.textCursor ] } );

  // @private - save reference to input size value for use in public methods
  this.inputSize = size;

  // update text when the value changes
  valueProperty.lazyLink( function( value ) {
    self.inputText.setText( isNaN( value ) ? '' : value );
    updateBoxPosition( self._box, size );
  } );

  // set up blinking of cursor
  stepTimer.setInterval( function() {
    self.textCursor.visible = !self.textCursor.visible;
  }, ArithmeticConstants.CURSOR_BLINK_INTERVAL );

  // @private - background of this input box
  this.background = new Rectangle( 0, 0, size.width, size.height, 5, 5, { fill: NON_INTERACTIVE_FILL } );
  this.addChild( this.background );

  // @private - horizontal box containing the input text and the cursor
  this._box = new HBox( {
    children: [ this.inputText, this.cursorContainer ],
    centerX: size.width / 2,
    centerY: size.height / 2
  } );
  this.addChild( this._box );

  // unfocused state by default
  this.setFocus( false );
}

arithmetic.register( 'EquationInputNode', EquationInputNode );

inherit( Node, EquationInputNode, {

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
   * @param {boolean} focus
   * @public
   */
  setFocus: function( focus ) {
    this.textCursor.visible = focus;
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
    this.inputText.setText( unknownValueIndicatorString );
    updateBoxPosition( this._box, this.inputSize );
  }
} );

export default EquationInputNode;