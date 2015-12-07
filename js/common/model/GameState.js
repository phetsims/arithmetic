// Copyright 2014-2015, University of Colorado Boulder

/**
 * Game states in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (Mlearner)
 * @author John Blanco
 */
define( function() {
  'use strict';

  // @public
  return Object.freeze( {
    SELECTING_LEVEL: 'SELECTING_LEVEL',
    AWAITING_USER_INPUT: 'AWAITING_USER_INPUT',
    DISPLAYING_CORRECT_ANSWER_FEEDBACK: 'DISPLAYING_CORRECT_ANSWER_FEEDBACK',
    DISPLAYING_INCORRECT_ANSWER_FEEDBACK: 'DISPLAYING_INCORRECT_ANSWER_FEEDBACK',
    SHOWING_LEVEL_COMPLETED_DIALOG: 'SHOWING_LEVEL_COMPLETED_DIALOG',
    LEVEL_COMPLETED: 'LEVEL_COMPLETED'
  } );
} );