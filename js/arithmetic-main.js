// Copyright 2014-2022, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ArithmeticStrings from './ArithmeticStrings.js';
import DivideScreen from './divide/DivideScreen.js';
import FactorScreen from './factor/FactorScreen.js';
import MultiplyScreen from './multiply/MultiplyScreen.js';

// strings and images
const arithmeticTitleStringProperty = ArithmeticStrings.arithmetic.titleStringProperty;

// constants
const tandem = Tandem.ROOT;

const simOptions = {
  credits: {
    leadDesign: 'Michael Dubson, Amanda McGarry',
    softwareDevelopment: 'John Blanco, Michael Dubson',
    team: 'Bryce Gruneich, Karina K. R. Hensberry, Trish Loeblein, Ariel Paul, Kathy Perkins, Beth Stade',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Oliver Orejola, Ben Roberts, Bryan Yoelin',
    thanks: 'Thanks to Mobile Learner Labs for working with the PhET development team to convert this simulation to HTML5.'
  }
};

simLauncher.launch( () => {
  // Create and start the sim
  new Sim( arithmeticTitleStringProperty, [
    new MultiplyScreen( { tandem: tandem.createTandem( 'multiplyScreen' ) } ),
    new FactorScreen( { tandem: tandem.createTandem( 'factorScreen' ) } ),
    new DivideScreen( { tandem: tandem.createTandem( 'divideScreen' ) } )
  ], simOptions ).start();
} );