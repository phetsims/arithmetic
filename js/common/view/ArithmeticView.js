// Copyright 2014-2018, University of Colorado Boulder

/**
 * Base type for view used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var Animation = require( 'TWIXT/Animation' );
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var Easing = require( 'TWIXT/Easing' );
  var GameAudioPlayer = require( 'VEGAS/GameAudioPlayer' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSelectionNode = require( 'ARITHMETIC/common/view/LevelSelectionNode' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  // constants
  var SCREEN_CHANGE_TIME = 0.75; // seconds

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
   * @param {Object} [options] - Configuration and position options, see usage in code for details.
   * @constructor
   */
  function ArithmeticView( model, multiplicationTableNode, equationNode, options ) {
    var self = this;
    ScreenView.call( this, { layoutBounds: new Bounds2( 0, 0, 768, 504 ) } );

    // defaults
    options = _.extend( {
      titleString: '',
      showKeypad: true,
      levelSelectButtonColor: 'white',
      levelSelectIconSet: 'multiply'
    }, options );

    // create and add the node that allows the user to select the game level
    var levelSelectionNode = new LevelSelectionNode(
      model,
      options.titleString,
      function( level ) { model.setLevel( level ); },
      this.layoutBounds,
      {
        centerX: this.layoutBounds.centerX,
        centerY: this.layoutBounds.centerY,
        buttonBaseColor: options.levelSelectButtonColor,
        iconSet: options.levelSelectIconSet
      }
    );
    this.addChild( levelSelectionNode );

    // add the game components
    var workspaceNode = new WorkspaceNode(
      model,
      multiplicationTableNode,
      equationNode,
      this.layoutBounds,
      { showKeypad: options.showKeypad, scoreboardTitle: options.titleString }
    );
    workspaceNode.left = this.layoutBounds.maxX;
    workspaceNode.visible = false;
    this.addChild( workspaceNode );

    // sounds player that is used to produce the feedback sounds for the game
    var gameAudioPlayer = new GameAudioPlayer( ArithmeticGlobals.soundEnabledProperty );

    // set the origin of the answer animation in the multiplication table, which depends upon the newly set position of
    // the equation node.
    multiplicationTableNode.animationOrigin = equationNode.productInput.center;

    // create the animations that will slide the level selection screen and the workspaces in and out
    var levelSelectionScreenInAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: function() {
        return levelSelectionNode.x;
      },
      setValue: function( newXPosition ) {
        levelSelectionNode.x = newXPosition;
      },
      to: self.layoutBounds.minX
    } );
    levelSelectionScreenInAnimator.beginEmitter.addListener( function() {
      levelSelectionNode.visible = true;
      levelSelectionNode.pickable = false; // prevent interaction during animation
    } );
    levelSelectionScreenInAnimator.finishEmitter.addListener( function() {
      levelSelectionNode.pickable = true;
    } );

    var levelSelectionScreenOutAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: function() {
        return levelSelectionNode.x;
      },
      setValue: function( newXPosition ) {
        levelSelectionNode.x = newXPosition;
      },
      to: self.layoutBounds.minX - levelSelectionNode.width
    } );
    levelSelectionScreenOutAnimator.beginEmitter.addListener( function() {
      levelSelectionNode.pickable = false; // prevent interaction during animation
    } );
    levelSelectionScreenOutAnimator.finishEmitter.addListener( function() {
      levelSelectionNode.visible = false;
    } );

    var workspaceNodeInAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: function() {
        return workspaceNode.x;
      },
      setValue: function( newXPosition ) {
        workspaceNode.x = newXPosition;
      },
      to: self.layoutBounds.minX
    } );
    workspaceNodeInAnimator.beginEmitter.addListener( function() {
      workspaceNode.visible = true;
      workspaceNode.pickable = false; // prevent interaction during animation
    } );
    workspaceNodeInAnimator.finishEmitter.addListener( function() {
      workspaceNode.pickable = true;
    } );

    var workspaceNodeOutAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: function() {
        return workspaceNode.x;
      },
      setValue: function( newXPosition ) {
        workspaceNode.x = newXPosition;
      },
      to: self.layoutBounds.maxX
    } );
    workspaceNodeOutAnimator.beginEmitter.addListener( function() {
      workspaceNode.pickable = false; // prevent interaction during animation
    } );
    workspaceNodeOutAnimator.finishEmitter.addListener( function() {
      workspaceNode.visible = false;
    } );

    // monitor the game state and update the view and changes occur
    model.stateProperty.link( function( newState, oldState ) {

      // animate the transition between the level select screen and the selected level
      if ( newState === GameState.SELECTING_LEVEL && oldState ) {

        // Slide out the workspace node
        workspaceNodeInAnimator.stop();
        workspaceNodeOutAnimator.start();

        // Slide in the level selection screen
        levelSelectionScreenOutAnimator.stop();
        levelSelectionScreenInAnimator.start();
      }
      else if ( newState !== GameState.SELECTING_LEVEL && oldState === GameState.SELECTING_LEVEL ) {

        // Slide in the workspace node
        workspaceNodeOutAnimator.stop();
        workspaceNodeInAnimator.start();

        // Slide out the level selection screen
        levelSelectionScreenInAnimator.stop();
        levelSelectionScreenOutAnimator.start();
        // levelSelectionScreenAnimatorOld.stop().to( { x: self.layoutBounds.minX - levelSelectionNode.width }, ANIMATION_TIME ).start( phet.joist.elapsedTime );
      }

      // play the appropriate audio, if any, for this state transition
      if ( ( oldState === GameState.AWAITING_USER_INPUT || oldState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK )
           && newState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK ) {
        // play the correct answer sound
        gameAudioPlayer.correctAnswer();
      }
      else if ( oldState === GameState.AWAITING_USER_INPUT && newState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
        // play the incorrect answer sound
        gameAudioPlayer.wrongAnswer();
      }
      else if ( oldState === GameState.DISPLAYING_CORRECT_ANSWER_FEEDBACK && newState === GameState.SHOWING_LEVEL_COMPLETED_DIALOG ) {
        var resultScore = model.activeLevelModel.currentScoreProperty.get();
        var perfectScore = model.activeLevelModel.perfectScore;

        if ( resultScore === perfectScore ) {
          gameAudioPlayer.gameOverPerfectScore();
        }
        else if ( resultScore === 0 ) {
          gameAudioPlayer.gameOverZeroScore();
        }
        else {
          gameAudioPlayer.gameOverImperfectScore();
        }
      }
    } );
  }

  arithmetic.register( 'ArithmeticView', ArithmeticView );

  return inherit( ScreenView, ArithmeticView );
} );
