// Copyright 2014-2020, University of Colorado Boulder

/**
 * Abstract base type for a scenery node that represents a multiplication equation, with two multipliers and a product,
 * e.g. 2 x 3 = 6.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import merge from '../../../../phet-core/js/merge.js';
import MathSymbols from '../../../../scenery-phet/js/MathSymbols.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import HBox from '../../../../scenery/js/nodes/HBox.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import arithmetic from '../../arithmetic.js';
import EquationInputNode from './EquationInputNode.js';

// constants
const FONT_EQUALS = new PhetFont( 45 );
const FONT_X = new PhetFont( 50 );
const INPUT_SIZE_MULTIPLIER = new Dimension2( 70, 45 ); // size of input boxes for multiplier
const INPUT_SIZE_PRODUCT = new Dimension2( 80, 45 ); // size of input box for product
const SPACING = 20; // spacing between equation elements
const SYMBOL_COLOR = '#FFFF00';

/**
 * @param {Property.<number>} multiplicandProperty - Property necessary for creating multiplicand input.
 * @param {Property.<number>} multiplierProperty - Property necessary for creating multiplier input.
 * @param {Property.<number>} productProperty - Property necessary for creating product input.
 * @param {Property.<number>} productProperty - Property necessary for creating product input.
 * @param {Object} [options]
 * @constructor
 */
function EquationNode( multiplicandProperty, multiplierProperty, productProperty, options ) {

  options = merge( {
    spacing: SPACING,
    resize: false
  }, options );

  // @public - Set up the three nodes that depict the numbers in the equation.
  this.multiplicandInput = new EquationInputNode( multiplicandProperty, INPUT_SIZE_MULTIPLIER );
  this.multiplierInput = new EquationInputNode( multiplierProperty, INPUT_SIZE_MULTIPLIER );
  this.productInput = new EquationInputNode( productProperty, INPUT_SIZE_PRODUCT );

  // @private - Set up the equals sign, which can potentially be changed to a not equals sign.
  this.equalsSign = new Text( '', { font: FONT_EQUALS, fill: SYMBOL_COLOR } );
  this.setShowEqual( true ); // Default to equals equation until set otherwise.

  options.children = [
    this.multiplicandInput,
    new Text( MathSymbols.TIMES, { font: FONT_X, fill: SYMBOL_COLOR } ),
    this.multiplierInput,
    this.equalsSign,
    this.productInput
  ];

  // Perform the layout by placing everything in an HBox.
  HBox.call( this, options );
}

arithmetic.register( 'EquationNode', EquationNode );

inherit( HBox, EquationNode, {

  /**
   * Set the equation to depict equals or not equals.
   *
   * @param {boolean} showEqual
   * @protected
   */
  setShowEqual: function( showEqual ) {
    this.equalsSign.text = showEqual ? MathSymbols.EQUAL_TO : MathSymbols.NOT_EQUAL_TO;
  }
} );

export default EquationNode;