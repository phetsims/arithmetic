// Copyright 2014-2017, University of Colorado Boulder

/**
 * The 'Multiply' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplyModel = require( 'ARITHMETIC/multiply/model/MultiplyModel' );
  var MultiplyScreenIconNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenIconNode' );
  var MultiplyView = require( 'ARITHMETIC/multiply/view/MultiplyView' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var multiplyString = require( 'string!ARITHMETIC/multiply' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function MultiplyScreen( tandem ) {

    var options = {
      name: multiplyString,
      homeScreenIcon: new MultiplyScreenIconNode(),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new MultiplyModel(); },
      function( model ) { return new MultiplyView( model ); },
      options );
  }

  arithmetic.register( 'MultiplyScreen', MultiplyScreen );

  return inherit( Screen, MultiplyScreen );
} );