// Copyright 2002-2014, University of Colorado Boulder

/**
 * The 'Divide' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var DivideModel = require( 'ARITHMETIC/divide/model/DivideModel' );
  var DivideView = require( 'ARITHMETIC/divide/view/DivideView' );
  var DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // constants
  var BACKGROUND_COLOR = require( 'ARITHMETIC/common/ArithmeticConstants' ).BACKGROUND_COLOR;

  function DivideScreen() {
    Screen.call( this,
      '', new DivideScreenIconNode(),
      function() {return new DivideModel();},
      function( model ) {return new DivideView( model );},
      { backgroundColor: BACKGROUND_COLOR } );
  }

  return inherit( Screen, DivideScreen );
} );