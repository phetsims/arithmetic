// Copyright 2014-2017, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var FactorModel = require( 'ARITHMETIC/factor/model/FactorModel' );
  var FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' );
  var FactorView = require( 'ARITHMETIC/factor/view/FactorView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var factorString = require( 'string!ARITHMETIC/factor' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function FactorScreen( tandem ) {

    var options = {
      name: factorString,
      homeScreenIcon: new FactorScreenIconNode(),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new FactorModel(); },
      function( model ) { return new FactorView( model ); },
      options );
  }

  arithmetic.register( 'FactorScreen', FactorScreen );

  return inherit( Screen, FactorScreen );
} );