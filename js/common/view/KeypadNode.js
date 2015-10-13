// Copyright 2002-2014, University of Colorado Boulder

/**
 * Keypad node, allows the user to enter digits.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var BackspaceIcon = require( 'SCENERY_PHET/BackspaceIcon' );
  var DerivedProperty = require( 'AXON/DerivedProperty' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var BASE_COLOR = 'white'; // base color for all buttons
  var BUTTON_SIZE = new Dimension2( 40, 40 ); // size of buttons
  var FONT = new PhetFont( { size: 24 } );
  var SPACING = 10; // spacing between buttons

  /**
   * @param {Property.<string>} inputProperty - string property into which the user's entry is stored
   * @param {Object} [options]
   *
   * @constructor
   */
  function KeypadNode( inputProperty, options ) {
    var backspaceButton;

    // The following property is for arming the 'auto clear' functionality.  When set, this will cause the keypad to
    // clear the current input value and start a new one when the user presses a key, rather than appending the digit
    // to the end of the current string.
    this.autoClearArmedProperty = new Property( false ); // @public

    // add buttons
    VBox.call( this, _.extend( {
      spacing: SPACING, children: [
        new HBox( {
          spacing: SPACING, children: [
            createNumberButton( 7, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 8, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 9, inputProperty, this.autoClearArmedProperty )
          ]
        } ),
        new HBox( {
          spacing: SPACING, children: [
            createNumberButton( 4, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 5, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 6, inputProperty, this.autoClearArmedProperty )
          ]
        } ),
        new HBox( {
          spacing: SPACING, children: [
            createNumberButton( 1, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 2, inputProperty, this.autoClearArmedProperty ),
            createNumberButton( 3, inputProperty, this.autoClearArmedProperty )
          ]
        } ),
        new HBox( {
          spacing: SPACING, children: [
            createNumberButton( 0, inputProperty, this.autoClearArmedProperty ),
            backspaceButton = createBackspaceButton( inputProperty )
          ]
        } )
      ]
    }, options ) );

    // control the enabled state of the backspace button
    var backspaceButtonEnabled = new DerivedProperty( [ inputProperty, this.autoClearArmedProperty ],
      function( inputString, autoClearArmed ) {
        return ( !autoClearArmed && inputString.length > 0 );
      }
    );

    backspaceButtonEnabled.linkAttribute( backspaceButton, 'enabled' );
  }

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

  // function to create number buttons, handles the zero button differently from others
  var createNumberButton = function( number, inputProperty, autoClearArmedProperty ) {
    var numberString = number.toString();
    return createDefaultButton(
      new Text( numberString, { font: FONT } ),
      function() {
        if ( autoClearArmedProperty.value ) {
          inputProperty.reset();
          autoClearArmedProperty.value = false;
        }
        if ( inputProperty.value.length < ArithmeticConstants.INPUT_LENGTH_MAX ) {
          inputProperty.value += numberString;
        }
      },
      { minWidth: number === 0 ? BUTTON_SIZE.width * 2 + SPACING : BUTTON_SIZE.width }
    );
  };

  // backspace button
  var createBackspaceButton = function( inputProperty ) {
    var backspaceIcon = new BackspaceIcon();
    backspaceIcon.scale( ( BUTTON_SIZE.width * 0.65 ) / backspaceIcon.bounds.width );
    return createDefaultButton( backspaceIcon, function() {
      inputProperty.value = inputProperty.value.substr( 0, inputProperty.value.length - 1 );
    } );
  };

  return inherit( VBox, KeypadNode );
} );
