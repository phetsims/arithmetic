// Copyright 2002-2014, University of Colorado Boulder

/**
 * Calculator node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArrowNode = require( 'SCENERY_PHET/ArrowNode' );
  var Constants = require( 'ARITHMETIC/common/model/Constants' ).CALCULATOR;
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var ARROW_SIZE = Constants.ARROW_SIZE;
  var BUTTON_SIZE = Constants.BUTTON_SIZE;
  var FONT = new PhetFont( 24 );
  var SPACING = Constants.SPACING;

  function CalculatorNode( inputProperty, enterCallback ) {
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
        getButtonEnter( enterCallback ),
        getButtonNumber( 0, inputProperty ),
        getButtonBackspace( inputProperty )
      ]} )
    ]} );
  }

  // return backspace button
  var getButtonBackspace = function( inputProperty ) {
    return getButtonDefault( new Node( {children: [
      new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
        headWidth: 6,
        headHeight: 6,
        tailWidth: 1
      } ),
      new Rectangle( ARROW_SIZE / 2 - 1, -ARROW_SIZE / 4, 2, ARROW_SIZE / 4, {fill: 'black'} )
    ]} ), function() {
      inputProperty.value = inputProperty.value.substr( 0, inputProperty.value.length - 1 );
    } );
  };

  // return default rectangular button with common options. Necessary for other building other buttons
  var getButtonDefault = function( content, listener ) {
    return new RectangularPushButton( {
      content: content,
      baseColor: 'white',
      minHeight: BUTTON_SIZE.height,
      minWidth: BUTTON_SIZE.width,
      listener: listener
    } );
  };

  // return enter button
  var getButtonEnter = function( callback ) {
    return getButtonDefault( new ArrowNode( ARROW_SIZE / 2, 0, -ARROW_SIZE / 2, 0, {
      headWidth: 6,
      headHeight: 6,
      tailWidth: 1
    } ), callback );
  };

  // return number button
  var getButtonNumber = function( number, inputProperty ) {
    var numberString = number.toString();
    return getButtonDefault( new Text( numberString, {font: FONT} ), function() {
      inputProperty.value += numberString;
    } );
  };

  return inherit( VBox, CalculatorNode );
} );
