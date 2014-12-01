// Copyright 2002-2014, University of Colorado Boulder

/**
 * Possible game states in the 'Arithmetic'.
 *
 * @author Andrey Zelenkov (Mlearner)
 */
define( function() {
  'use strict';

  /**                                                                                       correct answer
   *                                                             ┌───────────────────────────────────────────────────────────────────────┐
   *                                                             │                                                                       │
   *                     load saved game state                   │                                                  incorrect answer     │
   *                ┌───────────────────────────────────────────────────────────────────────────────────┐     ┌──────────────────────────┤
   *                │                                            │                                      ↓     ↓                          │
   *   SELECTING_LEVEL ┤                                            │     ┌────────────────────────> AWAITING_USER_INPUT -> EQUATION_FILLED ┘
   *        ↑       │                                            ↓     │
   *        │       └────────────────────────> LEVEL_INIT -> NEXT_TASK ┤
   *        │             init new level                               │
   *        │                                                          └────────────────────────> LEVEL_FINISHED -> SHOW_STATISTICS ┐
   *        │                                                                                                                       │
   *        └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
   *                                                        select new level
   */

  return Object.freeze( {
    AWAITING_USER_INPUT: 'awaitingUserInput',
    EQUATION_FILLED: 'equationFilled',
    LEVEL_INIT: 'levelInit',
    LEVEL_FINISHED: 'levelFinished',
    SELECTING_LEVEL: 'selectingLevel',
    NEXT_TASK: 'nextTask',
    REFRESH_LEVEL: 'resetLevel',
    SHOW_STATISTICS: 'showStatistics'
  } );
} );