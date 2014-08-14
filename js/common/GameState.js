// Copyright 2002-2014, University of Colorado Boulder

/**
 * Possible game states in the 'Arithmetic'.
 *
 * @author Andrey Zelenkov (Mlearner)
 */
define( function() {
  'use strict';

  return Object.freeze( {
    AWAITING_USER_INPUT: 'awaitingUserInput',
    EQUATION_FILLED: 'equationFilled',
    LEVEL_INIT: 'levelInit',
    LEVEL_FINISHED: 'levelFinished',
    LEVEL_SELECT: 'levelSelect',
    NEXT_TASK: 'nextTask',
    REFRESH_LEVEL: 'refreshLevel',
    SHOW_STATISTICS: 'showStatistics'
  } );
} );