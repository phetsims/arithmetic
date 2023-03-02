// Copyright 2014-2023, University of Colorado Boulder

/**
 * Abstract base type for a scenery node that represents a multiplication equation, with two multipliers and a product,
 * e.g. 2 x 3 = 6.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import merge from '../../../../phet-core/js/merge.js';
import MathSymbols from '../../../../scenery-phet/js/MathSymbols.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { HBox, Text } from '../../../../scenery/js/imports.js';
import arithmetic from '../../arithmetic.js';
import EquationInputNode from './EquationInputNode.js';

// constants
const FONT_EQUALS = new PhetFont( 45 );
const FONT_X = new PhetFont( 50 );
const INPUT_SIZE_MULTIPLIER = new Dimension2( 70, 45 ); // size of input boxes for multiplier
const INPUT_SIZE_PRODUCT = new Dimension2( 80, 45 ); // size of input box for product
const SPACING = 20; // spacing between equation elements
const SYMBOL_COLOR = '#FFFF00';

class EquationNode extends HBox {

  /**
   * @param {Property.<number>} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property.<number>} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   * @param {Object} [options]
   */
  constructor( multiplicandProperty, multiplierProperty, productProperty, options ) {

    options = merge( {
      spacing: SPACING,
      resize: false
    }, options );

    // @public - Set up the three nodes that depict the numbers in the equation.
    const multiplicandInput = new EquationInputNode( multiplicandProperty, INPUT_SIZE_MULTIPLIER );
    const multiplierInput = new EquationInputNode( multiplierProperty, INPUT_SIZE_MULTIPLIER );
    const productInput = new EquationInputNode( productProperty, INPUT_SIZE_PRODUCT );

    // @private - Set up the equals sign, which can potentially be changed to a not equals sign.
    const equalsSign = new Text( MathSymbols.EQUAL_TO, { font: FONT_EQUALS, fill: SYMBOL_COLOR } );

    options.children = [
      multiplicandInput,
      new Text( MathSymbols.TIMES, { font: FONT_X, fill: SYMBOL_COLOR } ),
      multiplierInput,
      equalsSign,
      productInput
    ];

    // Perform the layout by placing everything in an HBox.
    super( options );

    // @public - these nodes can be manipulated externally
    this.multiplicandInput = multiplicandInput;
    this.multiplierInput = multiplierInput;
    this.productInput = productInput;

    // @private
    this.equalsSign = equalsSign;

    // Default to equals equation until set otherwise.
    this.setShowEqual( true );
  }

  /**
   * Set the equation to depict equals or not equals.
   *
   * @param {boolean} showEqual
   * @protected
   */
  setShowEqual( showEqual ) {
    this.equalsSign.string = showEqual ? MathSymbols.EQUAL_TO : MathSymbols.NOT_EQUAL_TO;
  }
}

arithmetic.register( 'EquationNode', EquationNode );

export default EquationNode;