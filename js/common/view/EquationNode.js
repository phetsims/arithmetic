// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Constants = require( 'ARITHMETIC/common/model/Constants' ).EQUATION;
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_VBOX = new PhetFont( 36 );
  var FONT_TEXT = new PhetFont( 32 );
  var INPUT_SIZE = Constants.INPUT_SIZE;
  var SPACING = Constants.SPACING;

  function EquationNode( leftMultiplierProperty, rightMultiplierProperty, productProperty ) {
    HBox.call( this, {spacing: SPACING, children: [
      getInput( leftMultiplierProperty ),
      new Text( 'x', {font: FONT_VBOX} ),
      getInput( rightMultiplierProperty ),
      new Text( '=', {font: FONT_VBOX} ),
      getInput( productProperty )
    ]} );
  }

  var getInput = function( property ) {
    var inputText = new Text( '?', {font: FONT_TEXT} );

    // update text when property changed
    property.link( function( value ) {
      inputText.setText( value ? value : '?' );
      inputText.centerX = INPUT_SIZE.width / 2;
      inputText.centerY = INPUT_SIZE.height / 2;
    } );

    return new Node( {children: [
      // add background
      new Rectangle( 0, 0, INPUT_SIZE.width, INPUT_SIZE.height, 5, 5, {fill: 'white', stroke: 'black', lineWidth: 1.5} ),
      // add text
      inputText
    ]} );
  };

  return inherit( HBox, EquationNode );
} );
