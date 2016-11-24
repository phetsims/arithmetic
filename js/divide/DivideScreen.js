// Copyright 2014-2015, University of Colorado Boulder

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
  var Screen = require( 'JOIST/Screen' );
  var Property = require( 'AXON/Property' );
  var Color = require( 'SCENERY/util/Color' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function DivideScreen( tandem ) {

    var options = {
      name: divideString,
      backgroundColorProperty: new Property( Color.toColor( ArithmeticConstants.BACKGROUND_COLOR ) ),
      homeScreenIcon: new DivideScreenIconNode(),
      tandem: tandem
    };

    Screen.call( this,
      function() { return new DivideModel(); },
      function( model ) { return new DivideView( model ); },
      options );
  }

  arithmetic.register( 'DivideScreen', DivideScreen );

  return inherit( Screen, DivideScreen );
} );