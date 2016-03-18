// Copyright 2014-2015, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var FactorModel = require( 'ARITHMETIC/factor/model/FactorModel' );
  var FactorView = require( 'ARITHMETIC/factor/view/FactorView' );
  var FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var factorString = require( 'string!ARITHMETIC/factor' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function FactorScreen( tandem ) {
    Screen.call( this,
      factorString, new FactorScreenIconNode(),
      function() {return new FactorModel();},
      function( model ) {return new FactorView( model );}, {
        backgroundColor: ArithmeticConstants.BACKGROUND_COLOR,
        tandem: tandem
      } );
  }

  return inherit( Screen, FactorScreen );
} );