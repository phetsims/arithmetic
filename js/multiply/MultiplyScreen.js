// Copyright 2014, University of Colorado Boulder

/**
 * The 'Multiply' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplyModel = require( 'ARITHMETIC/multiply/model/MultiplyModel' );
  var MultiplyView = require( 'ARITHMETIC/multiply/view/MultiplyView' );
  var MultiplyScreenIconNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenIconNode' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  function MultiplyScreen() {
    Screen.call( this,
      multiplyString, new MultiplyScreenIconNode(),
      function() {return new MultiplyModel();},
      function( model ) {return new MultiplyView( model );},
      { backgroundColor: ArithmeticConstants.BACKGROUND_COLOR } );
  }

  return inherit( Screen, MultiplyScreen );
} );