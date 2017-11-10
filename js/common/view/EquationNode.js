// Copyright 2014-2017, University of Colorado Boulder

/**
 * Abstract base type for a scenery node that represents a multiplication equation, with two multipliers and a product,
 * e.g. 2 x 3 = 6.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var EquationInputNode = require( 'ARITHMETIC/common/view/EquationInputNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_EQUALS = new PhetFont( 45 );
  var FONT_X = new PhetFont( 50 );
  var INPUT_SIZE_MULTIPLIER = new Dimension2( 70, 45 ); // size of input boxes for multiplier
  var INPUT_SIZE_PRODUCT = new Dimension2( 80, 45 ); // size of input box for product
  var SPACING = 20; // spacing between equation elements
  var SYMBOL_COLOR = '#FFFF00';

  /**
   * @param {Property.<number>} multiplicandProperty - Property necessary for creating multiplicand input.
   * @param {Property.<number>} multiplierProperty - Property necessary for creating multiplier input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   * @param {Property.<number>} productProperty - Property necessary for creating product input.
   * @param {Object} [options]
   * @constructor
   */
  function EquationNode( multiplicandProperty, multiplierProperty, productProperty, options ) {

    options = _.extend( {
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
      new Text( '\u00D7', { font: FONT_X, fill: SYMBOL_COLOR } ),
      this.multiplierInput,
      this.equalsSign,
      this.productInput
    ];

    // Perform the layout by placing everything in an HBox.
    HBox.call( this, options );
  }

  arithmetic.register( 'EquationNode', EquationNode );

  return inherit( HBox, EquationNode, {

    /**
     * Set the equation to depict equals or not equals.
     *
     * @param {boolean} showEqual
     * @protected
     */
    setShowEqual: function( showEqual ) {
      this.equalsSign.text = showEqual ? '=' : '\u2260';
    }
  } );
} );
