// Copyright 2014-2017, University of Colorado Boulder

/**
 * The 'Divide' screen. Conforms to the contract specified in joist/Screen.
 *
 * Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var DivideModel = require( 'ARITHMETIC/divide/model/DivideModel' );
  var DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' );
  var DivideView = require( 'ARITHMETIC/divide/view/DivideView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

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