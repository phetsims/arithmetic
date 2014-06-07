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

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function EquationDivideNode( stateProperty, multiplierLeftProperty, multiplierRightProperty, productProperty, inputProperty ) {
    var self = this;
    var activeProperty;
    EquationNode.call( this, multiplierLeftProperty, multiplierRightProperty, productProperty );

    stateProperty.lazyLink( function( state ) {
      if ( state === GAME_STATE.START ) {

        if ( multiplierLeftProperty.value && multiplierRightProperty.value ) {
          inputProperty.value = '';
        }
        else if ( multiplierLeftProperty.value ) {
          activeProperty = multiplierRightProperty;
          self.multiplierLeftInput.disable();
          setActiveInput( self.multiplierRightInput );
        }
        else {
          activeProperty = multiplierLeftProperty;
          self.multiplierRightInput.disable();
          setActiveInput( self.multiplierLeftInput );
        }
      }
    } );

    inputProperty.lazyLink( function( inputString ) {
      if ( inputString ) {
        activeProperty.value = parseInt( inputString, 10 );
      }
      else {
        activeProperty.value = '';
      }
    } );
  }

  var setActiveInput = function( input ) {
    input.clear();
    input.focus();
  };

  return inherit( EquationNode, EquationDivideNode );
} );
