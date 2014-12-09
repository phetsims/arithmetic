// Copyright 2002-2014, University of Colorado Boulder

/**
 * Abstract base type for a scenery node that represents a multiplication equation, with two multipliers and a product,
 * e.g. 2 x 3 = 6.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );
  var EquationInputNode = require( 'ARITHMETIC/common/view/EquationInputNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_EQUALS = new PhetFont( 40 );
  var FONT_X = new PhetFont( 50 );
  var INPUT_SIZE_MULTIPLIER = new Dimension2( 70, 45 ); // size of input boxes for multiplier
  var INPUT_SIZE_PRODUCT = new Dimension2( 80, 45 ); // size of input box for product
  var SPACING = 20; // spacing between equation elements

  /**
   * @param {Property.<number>} multiplierLeftProperty - Property necessary for creating left multiplier input.
   * @param {Property.<number>} multiplierRightProperty - Property necessary for creating right multiplier input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   *
   * @constructor
   */
  function EquationNode( multiplierLeftProperty, multiplierRightProperty, productProperty ) {

    this.multiplierLeftInput = new EquationInputNode( multiplierLeftProperty, INPUT_SIZE_MULTIPLIER );
    this.multiplierRightInput = new EquationInputNode( multiplierRightProperty, INPUT_SIZE_MULTIPLIER );
    this.productInput = new EquationInputNode( productProperty, INPUT_SIZE_PRODUCT );

    HBox.call( this, {spacing: SPACING, children: [
      this.multiplierLeftInput,
      new Text( '\u00D7', {font: FONT_X, fill: 'yellow'} ),
      this.multiplierRightInput,
      new Text( '=', {font: FONT_EQUALS, fill: 'yellow'} ),
      this.productInput
    ]} );
  }

  return inherit( HBox, EquationNode );
} );
