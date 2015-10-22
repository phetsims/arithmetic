// Copyright 2002-2014, University of Colorado Boulder

/**
 * Game states in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (Mlearner)
 * @author John Blanco
 */
define( function() {
  'use strict';

  return Object.freeze( {
    SELECTING_LEVEL: 'SELECTING_LEVEL',
    AWAITING_USER_INPUT: 'AWAITING_USER_INPUT',
    DISPLAYING_CORRECT_ANSWER_FEEDBACK: 'DISPLAYING_CORRECT_ANSWER_FEEDBACK',
    DISPLAYING_INCORRECT_ANSWER_FEEDBACK: 'DISPLAYING_INCORRECT_ANSWER_FEEDBACK',
    LEVEL_COMPLETED: 'LEVEL_COMPLETED'
  } );
} );