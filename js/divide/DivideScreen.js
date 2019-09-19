// Copyright 2014-2018, University of Colorado Boulder

/**
 * The 'Divide' screen. Conforms to the contract specified in joist/Screen.
 *
 * Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const DivideModel = require( 'ARITHMETIC/divide/model/DivideModel' );
  const DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' );
  const DivideView = require( 'ARITHMETIC/divide/view/DivideView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function DivideScreen( options ) {

    options = _.extend( {
      name: divideString,
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new DivideScreenIconNode(),
      tandem: Tandem.required
    }, options );

    Screen.call( this,
      function() { return new DivideModel( options.tandem.createTandem( 'model' ) ); },
      function( model ) { return new DivideView( model ); },
      options );
  }

  arithmetic.register( 'DivideScreen', DivideScreen );

  return inherit( Screen, DivideScreen );
} );