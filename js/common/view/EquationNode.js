// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).EQUATION;
  var EquationInputNode = require( 'ARITHMETIC/common/view/EquationInputNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_VBOX = new PhetFont( 36 );

  /**
   * @param multiplierLeftProperty {Property} property necessary for creating left multiplier input
   * @param multiplierRightProperty {Property} property necessary for creating right multiplier input
   * @param productProperty {Property} property necessary for creating product input
   *
   * @constructor
   */
  function EquationNode( multiplierLeftProperty, multiplierRightProperty, productProperty ) {

    this.multiplierLeftInput = new EquationInputNode( multiplierLeftProperty, CONSTANTS.INPUT_SIZE_MULTIPLIER );
    this.multiplierRightInput = new EquationInputNode( multiplierRightProperty, CONSTANTS.INPUT_SIZE_MULTIPLIER );
    this.productInput = new EquationInputNode( productProperty, CONSTANTS.INPUT_SIZE_PRODUCT );

    HBox.call( this, {spacing: CONSTANTS.SPACING, children: [
      this.multiplierLeftInput,
      new Text( 'x', {font: FONT_VBOX} ),
      this.multiplierRightInput,
      new Text( '=', {font: FONT_VBOX} ),
      this.productInput
    ]} );
  }

  return inherit( HBox, EquationNode );
} );
