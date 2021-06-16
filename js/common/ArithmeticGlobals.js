// Copyright 2015-2021, University of Colorado Boulder

/**
 * Variables that need to be globally accessible within the 'Arithmetic' simulation.
 *
 * @author John Blanco
 */

import Property from '../../../axon/js/Property.js';
import arithmetic from '../arithmetic.js';

const ArithmeticGlobals = {
  timerEnabledProperty: new Property( false )
};

arithmetic.register( 'ArithmeticGlobals', ArithmeticGlobals );

export default ArithmeticGlobals;