// Copyright 2002-2014, University of Colorado Boulder

/**
 * Calculator node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var FONT = new PhetFont( 24 );
  var SPACING = 5;

  function CalculatorNode( inputProperty ) {
    Node.call( this );

    this.addChild( new VBox( {spacing: SPACING, children: [
      new HBox( {spacing: SPACING, children: [
        this.getButtonNumber( 7, inputProperty ),
        this.getButtonNumber( 8, inputProperty ),
        this.getButtonNumber( 9, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        this.getButtonNumber( 4, inputProperty ),
        this.getButtonNumber( 5, inputProperty ),
        this.getButtonNumber( 6, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        this.getButtonNumber( 1, inputProperty ),
        this.getButtonNumber( 2, inputProperty ),
        this.getButtonNumber( 3, inputProperty )
      ]} ),
      new HBox( {spacing: SPACING, children: [
        this.getButtonEnter(),
        this.getButtonNumber( 0, inputProperty ),
        this.getButtonBackspace( inputProperty )
      ]} )
    ]} ) );
  }

  return inherit( Node, CalculatorNode, {
    getButtonBackspace: function( inputProperty ) {
      return new RectangularPushButton( {
        content: new Node(),
        baseColor: 'white',
        minHeight: 30,
        minWidth: 40,
        listener: function() {
          inputProperty.value = inputProperty.value.substr( 0, inputProperty.value.length - 1 );
        }
      } );
    },
    getButtonEnter: function() {
      return new RectangularPushButton( {
        content: new Node(),
        baseColor: 'white',
        minHeight: 30,
        minWidth: 40
      } );
    },
    getButtonNumber: function( number, inputProperty ) {
      var numberString = number.toString();
      return new RectangularPushButton( {
        content: new Text( numberString, {font: FONT} ),
        baseColor: 'white',
        minHeight: 30,
        minWidth: 40,
        listener: function() {
          inputProperty.value += numberString;
        }
      } );
    }
  } );
} );
