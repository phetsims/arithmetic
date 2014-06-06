// Copyright 2002-2014, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var FactorModel = require( 'ARITHMETIC/factor/model/FactorModel' );
  var FactorView = require( 'ARITHMETIC/factor/view/FactorView' );
  var FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // constants
  var BACKGROUND_COLOR = require( 'ARITHMETIC/common/ArithmeticConstants' ).BACKGROUND_COLOR;

  function FactorScreen() {
    Screen.call( this,
      '', new FactorScreenIconNode(),
      function() {return new FactorModel();},
      function( model ) {return new FactorView( model );},
      { backgroundColor: BACKGROUND_COLOR } );
  }

  return inherit( Screen, FactorScreen );
} );