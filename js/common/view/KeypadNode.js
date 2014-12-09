// Copyright 2002-2014, University of Colorado Boulder

/**
 * Keypad node, allows the user to enter digits.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  var BackspaceIcon = require( 'SCENERY_PHET/BackspaceIcon' );
  var DerivedProperty = require( 'AXON/DerivedProperty' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var ARROW_SIZE = 20; // arrow size of enter and backspace
  var BASE_COLOR = 'white'; // base color for all buttons except the enter button
  var BUTTON_SIZE = new Dimension2( 40, 40 ); // size of buttons
  var ENTER_BUTTON_BASE_COLOR = 'rgb( 238, 253, 77 )';
  var FONT = new PhetFont( {size: 24 } );
  var SPACING = 10; // spacing between buttons

  /**
   * @param {Property} inputProperty - Input property for communication buttons of keypad with the model.
   * @param {Function} enterCallback - Callback listener for enter button.
   * @param {Object} options for keypad node.
   *
   * @constructor
   */
  function KeypadNode( inputProperty, enterCallback, options ) {
    var enterButton;
    var backspaceButton;

    // The following property is for arming the 'auto clear' functionality.  When set, this will cause the keypad to
    // clear the current input value and start a new one when the user presses a key, rather than appending the digit
    // to the end of the current string.
    this.autoClearArmedProperty = new Property( false ); // @public

    // add buttons
    VBox.call( this, _.extend( {spacing: SPACING, children: [
      new HBox( {spacing: SPACING, children: [
        createNumberButton( 7, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 8, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 9, inputProperty, this.autoClearArmedProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        createNumberButton( 4, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 5, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 6, inputProperty, this.autoClearArmedProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        createNumberButton( 1, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 2, inputProperty, this.autoClearArmedProperty ),
        createNumberButton( 3, inputProperty, this.autoClearArmedProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        backspaceButton = createBackspaceButton( inputProperty ),
        createNumberButton( 0, inputProperty, this.autoClearArmedProperty ),
        enterButton = createEnterButton( enterCallback )
      ]} )
    ]}, options ) );

    // Control the enabled state of the enter and backspace buttons.
    var enterAndBackspaceEnabled = new DerivedProperty( [ inputProperty, this.autoClearArmedProperty ],
      function( inputString, autoClearArmed ) {
        return ( !autoClearArmed && inputString.length > 0 );
      }
    );

    enterAndBackspaceEnabled.linkAttribute( backspaceButton, 'enabled' );
    enterAndBackspaceEnabled.linkAttribute( enterButton, 'enabled' );
  }

  // backspace button
  var createBackspaceButton = function( inputProperty ) {
    var backspaceIcon = new BackspaceIcon();
    backspaceIcon.scale( ( BUTTON_SIZE.width * 0.65 ) / backspaceIcon.bounds.width );
    return createDefaultButton( backspaceIcon, function() {
      inputProperty.value = inputProperty.value.substr( 0, inputProperty.value.length - 1 );
    } );
  };

  // create default rectangular button with common options, necessary for other building other buttons
  var createDefaultButton = function( content, listener, options ) {
    return new RectangularPushButton( _.extend( {
      content: content,
      baseColor: BASE_COLOR,
      minHeight: BUTTON_SIZE.height,
      minWidth: BUTTON_SIZE.width,
      xMargin: 2,
      listener: listener
    }, options ) );
  };

  // enter button
  var createEnterButton = function( callback ) {
    return createDefaultButton(
      new Node( {
        children: [
          new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
            headWidth: 6,
            headHeight: 6,
            tailWidth: 1
          } ),
          new Rectangle( ARROW_SIZE / 2 - 1, -ARROW_SIZE / 4, 2, ARROW_SIZE / 4, {fill: 'black'} )
        ] } ),
      callback,
      { baseColor: ENTER_BUTTON_BASE_COLOR }
    );
  };

  // number button
  var createNumberButton = function( number, inputProperty, autoClearArmedProperty ) {
    var numberString = number.toString();
    return createDefaultButton( new Text( numberString, {font: FONT} ), function() {
      if ( autoClearArmedProperty.value ) {
        inputProperty.reset();
        autoClearArmedProperty.value = false;
      }
      if ( inputProperty.value.length < ArithmeticConstants.INPUT_LENGTH_MAX ) {
        inputProperty.value += numberString;
      }
    } );
  };

  return inherit( VBox, KeypadNode );
} );
