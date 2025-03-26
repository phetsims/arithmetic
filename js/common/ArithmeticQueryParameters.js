// Copyright 2014-2025, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author John Blanco
 */

import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import getGameLevelsSchema from '../../../vegas/js/getGameLevelsSchema.js';
import arithmetic from '../arithmetic.js';

const ArithmeticQueryParameters = QueryStringMachine.getAll( {

  // The levels to show, which will be the same for all 3 screens.
  // See https://github.com/phetsims/arithmetic/issues/203
  gameLevels: getGameLevelsSchema( 3 ),

  // automatically answer most problems to enable faster testing of level completion
  autoAnswer: { type: 'flag' }
} );

// prevent auto answer in versions that are intended for publication
if ( phet.chipper.isProduction && !phet.chipper.isDebugBuild ) {
  ArithmeticQueryParameters.autoAnswer = false;
}

arithmetic.register( 'ArithmeticQueryParameters', ArithmeticQueryParameters );

export default ArithmeticQueryParameters;