// Copyright 2002-2014, University of Colorado Boulder

/**
 * Possible game states in the 'Arithmetic'.
 *
 * @author Andrey Zelenkov (Mlearner)
 */
define( function() {
  'use strict';

  return Object.freeze( {
    EQUATION_FILLED: 'equationFilled',
    LEVEL_FINISHED: 'levelFinished',
    NEXT_TASK: 'nextTask',
    SHOW_STATISTICS: 'showStatistics',
    START: 'start'
  } );
} );