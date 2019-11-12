// Copyright 2014-2019, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( require => {
  'use strict';

  // modules
  const DivideScreen = require( 'ARITHMETIC/divide/DivideScreen' );
  const FactorScreen = require( 'ARITHMETIC/factor/FactorScreen' );
  const MultiplyScreen = require( 'ARITHMETIC/multiply/MultiplyScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings and images
  const arithmeticTitleString = require( 'string!ARITHMETIC/arithmetic.title' );

  // constants
  const tandem = Tandem.rootTandem;

  const simOptions = {
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