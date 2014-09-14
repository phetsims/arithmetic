// Copyright 2002-2014, University of Colorado Boulder

/**
 * Keypad node, allows the user to enter digits.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  var BackspaceIcon = require( 'SCENERY_PHET/BackspaceIcon' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ARROW_SIZE = 20; // arrow size of enter and backspace
  var BASE_COLOR = 'white'; // base color for all buttons
  var BUTTON_SIZE = new Dimension2( 40, 40 ); // size of buttons
  var DISABLE_BASE_COLOR = 'rgb(238,253,77)'; // disable base color for all buttons
  var FONT = new PhetFont( {size: 24 } );
  var SPACING = 10; // spacing between buttons

  /**
   * @param {Property} inputProperty - Input property for communication buttons of keypad with the model.
   * @param {Function} enterCallback - Callback listener for enter button.
   *
   * @constructor
   */
  function KeypadNode( inputProperty, enterCallback ) {
    var buttonEnter;

    // add buttons
    VBox.call( this, {spacing: SPACING, children: [
      new HBox( {spacing: SPACING, children: [
        getButtonNumber( 7, inputProperty ),
        getButtonNumber( 8, inputProperty ),
        getButtonNumber( 9, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        getButtonNumber( 4, inputProperty ),
        getButtonNumber( 5, inputProperty ),
        getButtonNumber( 6, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        getButtonNumber( 1, inputProperty ),
        getButtonNumber( 2, inputProperty ),
        getButtonNumber( 3, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        getButtonBackspace( inputProperty ),
        getButtonNumber( 0, inputProperty ),
        buttonEnter = getButtonEnter( enterCallback )
      ]} )
    ]} );

    // disable enter button if user has not entered number
    inputProperty.link( function( inputString ) {
      buttonEnter.enabled = !!inputString.length;
    } );
  }

  // return backspace button
  var getButtonBackspace = function( inputProperty ) {
    var backspaceIcon = new BackspaceIcon();
    backspaceIcon.scale( ( BUTTON_SIZE.width * 0.65 ) / backspaceIcon.bounds.width );
    return getButtonDefault( backspaceIcon, function() {
      inputProperty.value = inputProperty.value.substr( 0, inputProperty.value.length - 1 );
    } );
  };

  // return default rectangular button with common options. Necessary for other building other buttons
  var getButtonDefault = function( content, listener, options ) {
    return new RectangularPushButton( _.extend( {
      content: content,
      baseColor: BASE_COLOR,
      minHeight: BUTTON_SIZE.height,
      minWidth: BUTTON_SIZE.width,
      xMargin: 2,
      listener: listener
    }, options ) );
  };

  // return enter button
  var getButtonEnter = function( callback ) {
    return getButtonDefault( new Node( {children: [
      new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
        headWidth: 6,
        headHeight: 6,
        tailWidth: 1
      } ),
      new Rectangle( ARROW_SIZE / 2 - 1, -ARROW_SIZE / 4, 2, ARROW_SIZE / 4, {fill: 'black'} )
    ]} ), callback, {
      baseColor: DISABLE_BASE_COLOR,
      disabledBaseColor: BASE_COLOR
    } );
  };

  // return number button
  var getButtonNumber = function( number, inputProperty ) {
    var numberString = number.toString();
    return getButtonDefault( new Text( numberString, {font: FONT} ), function() {
      if ( inputProperty.value.length < CONSTANTS.INPUT_LENGTH_MAX ) {
        inputProperty.value += numberString;
      }
    } );
  };

  return inherit( VBox, KeypadNode );
} );