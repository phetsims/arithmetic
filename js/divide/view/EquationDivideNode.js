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

  function EquationDivideNode( multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty ) {
    var self = this;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty );

    multiplierLeftProperty.link( function( multiplierLeft ) {
      if ( multiplierLeft ) {
        self.multiplierLeftInput.disable();
      }
      else {
        setActiveInput( self.multiplierLeftInput );
      }
    } );

    multiplierRightProperty.link( function( multiplierRight ) {
      if ( multiplierRight ) {
        self.multiplierRightInput.disable();
      }
      else {
        setActiveInput( self.multiplierRightInput );
      }
    } );
  }

  var setActiveInput = function( input ) {
    input.clear();
    input.enable();
    input.focus();
  };

  return inherit( EquationNode, EquationDivideNode );
} );
