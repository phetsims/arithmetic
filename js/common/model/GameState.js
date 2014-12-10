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
    SELECTING_LEVEL: 'selectingLevel',
    AWAITING_USER_INPUT: 'awaitingUserInput',
    DISPLAYING_CORRECT_ANSWER_FEEDBACK: 'displayingCorrectAnswerFeedback',
    DISPLAYING_INCORRECT_ANSWER_FEEDBACK: 'displayingIncorrectAnswerFeedback',
    LEVEL_COMPLETED: 'levelCompleted',
    REFRESH_LEVEL: 'resetLevel'
  } );
} );