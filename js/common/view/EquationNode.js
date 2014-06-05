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
  var EquationInputNode = require( 'ARITHMETIC/common/view/EquationInputNode' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT_VBOX = new PhetFont( 36 );
  var SPACING = Constants.SPACING;

  function EquationNode( multiplierLeftProperty, multiplierRightProperty, productProperty ) {

    this.multiplierLeftInput = new EquationInputNode( multiplierLeftProperty );
    this.multiplierRightInput = new EquationInputNode( multiplierRightProperty );
    this.productInput = new EquationInputNode( productProperty );

    HBox.call( this, {spacing: SPACING, children: [
      this.multiplierLeftInput,
      new Text( 'x', {font: FONT_VBOX} ),
      this.multiplierRightInput,
      new Text( '=', {font: FONT_VBOX} ),
      this.productInput
    ]} );
  }

  return inherit( HBox, EquationNode );
} );
