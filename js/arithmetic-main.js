// Copyright 2014-2017, University of Colorado Boulder

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
  var Tandem = require( 'TANDEM/Tandem' );

  // strings and images
  var arithmeticTitleString = require( 'string!ARITHMETIC/arithmetic.title' );

  // constants
  var tandem = Tandem.rootTandem;

  var simOptions = {
    credits: {
      leadDesign: 'Michael Dubson, Amanda McGarry',
      softwareDevelopment: 'John Blanco, Michael Dubson',
      team: 'Bryce Gruneich, Karina K. R. Hensberry, Trish Loeblein, Ariel Paul, Kathy Perkins, Beth Stade',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Oliver Orejola, Ben Roberts, Bryan Yoelin',
      thanks: 'Thanks to Mobile Learner Labs for working with the PhET development team to convert this simulation to HTML5.'
    }
  };

  SimLauncher.launch( function() {
    // Create and start the sim
    new Sim( arithmeticTitleString, [
      new MultiplyScreen( { tandem: tandem.createTandem( 'multiplyScreen' ) } ),
      new FactorScreen( { tandem: tandem.createTandem( 'factorScreen' ) } ),
      new DivideScreen( { tandem: tandem.createTandem( 'divideScreen' ) } )
    ], simOptions ).start();
  } );
} );