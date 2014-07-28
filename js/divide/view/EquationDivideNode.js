// Copyright 2002-2014, University of Colorado Boulder

/**
 * Equation node for 'divide' screen in 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param multiplierLeftProperty {Property} property necessary for creating left multiplier input
   * @param multiplierRightProperty {Property} property necessary for creating right multiplier input
   * @param productProperty {Property} property necessary for creating product input
   * @param inputProperty {Property} input property
   * @param inputCursorVisibilityProperty {Property} property which switch true/false with given time interval
   * @param linkToActiveInputProperty {Property} link to active input
   *
   * @constructor
   */
  function EquationDivideNode( multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty, inputCursorVisibilityProperty, linkToActiveInputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty, inputCursorVisibilityProperty );

    linkToActiveInputProperty.link( function( activeInput ) {
      if ( activeInput === multiplierRightProperty ) {
        self.multiplierLeftInput.unfocus();
        setActiveInput( self.multiplierRightInput );
      }
      else if ( activeInput === multiplierLeftProperty ) {
        self.multiplierRightInput.unfocus();
        setActiveInput( self.multiplierLeftInput );
      }
    } );

    inputProperty.lazyLink( function( inputString ) {
      linkToActiveInputProperty.value.value = inputString;
    } );
  }

  var setActiveInput = function( input ) {
    input.clear();
    input.focus();
  };

  return inherit( EquationNode, EquationDivideNode );
} );
