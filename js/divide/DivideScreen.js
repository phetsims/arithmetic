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
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var DivideModel = require( 'ARITHMETIC/divide/model/DivideModel' );
  var DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' );
  var DivideView = require( 'ARITHMETIC/divide/view/DivideView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var divideString = require( 'string!ARITHMETIC/divide' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function DivideScreen( tandem ) {
    Screen.call( this,
      divideString, new DivideScreenIconNode(),
      function() {return new DivideModel();},
      function( model ) {return new DivideView( model );}, {
        backgroundColor: ArithmeticConstants.BACKGROUND_COLOR,
        tandem: tandem
      } );
  }

  return inherit( Screen, DivideScreen );
} );