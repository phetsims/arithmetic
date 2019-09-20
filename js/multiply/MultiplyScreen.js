// Copyright 2014-2019, University of Colorado Boulder

/**
 * The 'Multiply' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const inherit = require( 'PHET_CORE/inherit' );
  const MultiplyModel = require( 'ARITHMETIC/multiply/model/MultiplyModel' );
  const MultiplyScreenIconNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenIconNode' );
  const MultiplyView = require( 'ARITHMETIC/multiply/view/MultiplyView' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function MultiplyScreen( options ) {

    options = _.extend( {
      name: multiplyString,
      homeScreenIcon: new MultiplyScreenIconNode(),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: Tandem.required
    }, options );

    Screen.call( this,
      function() { return new MultiplyModel( options.tandem.createTandem( 'model' ) ); },
      function( model ) { return new MultiplyView( model ); },
      options );
  }

  arithmetic.register( 'MultiplyScreen', MultiplyScreen );

  return inherit( Screen, MultiplyScreen );
} );