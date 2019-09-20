// Copyright 2014-2019, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const FactorModel = require( 'ARITHMETIC/factor/model/FactorModel' );
  const FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' );
  const FactorView = require( 'ARITHMETIC/factor/view/FactorView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const factorString = require( 'string!ARITHMETIC/factor' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function FactorScreen( options ) {

    options = _.extend( {
      name: factorString,
      homeScreenIcon: new FactorScreenIconNode(),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: Tandem.required
    }, options );

    Screen.call( this,
      function() { return new FactorModel( options.tandem.createTandem( 'model' ) ); },
      function( model ) { return new FactorView( model ); },
      options );
  }

  arithmetic.register( 'FactorScreen', FactorScreen );

  return inherit( Screen, FactorScreen );
} );