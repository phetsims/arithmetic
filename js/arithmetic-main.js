// Copyright 2002-2014, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var DivideScreen = require( 'ARITHMETIC/divide/DivideScreen' );
  var FactorScreen = require( 'ARITHMETIC/factor/FactorScreen' );
  var MultiplyScreen = require( 'ARITHMETIC/multiply/MultiplyScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings and images
  var simTitleString = require( 'string!ARITHMETIC/arithmetic.name' );

  var simOptions = {
    credits: {
      leadDesign: 'Mike Dubson, Bryce Gruneich',
      softwareDevelopment: 'John Blanco, Mike Dubson',
      team: 'Karina Hensberry, Trish Loeblein, Ariel Paul, Kathy Perkins, Beth Stade',
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
    // Create and start the sim
    new Sim( simTitleString, [ new MultiplyScreen(), new FactorScreen(), new DivideScreen() ], simOptions ).start();
  } );
} );