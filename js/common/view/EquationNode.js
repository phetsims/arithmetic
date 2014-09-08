// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationInputNode = require( 'ARITHMETIC/common/view/EquationInputNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).EQUATION;
  var FONT_EQUALS = new PhetFont( 40 );
  var FONT_X = new PhetFont( 50 );

  /**
   * @param {Property} multiplierLeftProperty - Property necessary for creating left multiplier input.
   * @param {Property} multiplierRightProperty - Property necessary for creating right multiplier input.
   * @param {Property} productProperty - Property necessary for creating product input.
   * @param {Property} inputCursorVisibilityProperty - Property which switch true/false with given time interval.
   *
   * @constructor
   */
  function EquationNode( multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty ) {

    this.multiplierLeftInput = new EquationInputNode( multiplierLeftProperty, inputCursorVisibilityProperty, CONSTANTS.INPUT_SIZE_MULTIPLIER );
    this.multiplierRightInput = new EquationInputNode( multiplierRightProperty, inputCursorVisibilityProperty, CONSTANTS.INPUT_SIZE_MULTIPLIER );
    this.productInput = new EquationInputNode( productProperty, inputCursorVisibilityProperty, CONSTANTS.INPUT_SIZE_PRODUCT );

    HBox.call( this, {spacing: CONSTANTS.SPACING, children: [
      this.multiplierLeftInput,
      new Text( '\u00D7', {font: FONT_X, fill: 'yellow'} ),
      this.multiplierRightInput,
      new Text( '=', {font: FONT_EQUALS, fill: 'yellow'} ),
      this.productInput
    ]} );
  }

  return inherit( HBox, EquationNode );
} );
