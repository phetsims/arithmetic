// Copyright 2002-2014, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // imports
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' );
  var Rectangle = require( 'SCENERY/nodes/rectangle' );
  var Screen = require( 'JOIST/Screen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings and images
  var simTitle = require( 'string!ARITHMETIC/arithmetic.name' );
  var multiplyString = require( 'string!ARITHMETIC/multiply' );
  var divideString = require( 'string!ARITHMETIC/divide' );
  var factorString = require( 'string!ARITHMETIC/factor' );

  var simOptions = {
    credits: {
      leadDesign: 'Mike Dubson, Bryce Gruneich',
      softwareDevelopment: 'John Blanco, Mike Dubson',
      designTeam: 'Karina Hensberry, Trish Loeblein, Ariel Paul, Kathy Perkins, Beth Stade',
      thanks: 'Thanks to Mobile Learner Labs for working with the PhET development team to convert this simulation to HTML5.'
    }
  };

  // Appending '?dev' to the URL will enable developer-only features.
  if ( window.phetcommon.getQueryParameter( 'dev' ) ) {
    simOptions = _.extend( {
      // add dev-specific options here
      showHomeScreen: false,
      screenIndex: 0
    }, simOptions );
  }

  SimLauncher.launch( function() {
    //Create and start the sim
    new Sim( simTitle, [
      new Screen( multiplyString, new Rectangle( 0, 0, 50, 50, 0, 0, { fill: 'blue' } ),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: 'rgb( 255, 245, 236 )' }
      ),
      new Screen( factorString, new Rectangle( 0, 0, 50, 50, 0, 0, { fill: 'green' } ),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: 'rgb( 255, 245, 236 )' }
      ),
      new Screen( divideString, new Rectangle( 0, 0, 50, 50, 0, 0, { fill: 'red' } ),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: 'rgb( 255, 245, 236 )' }
      )
    ], simOptions ).start();
  } );
} );