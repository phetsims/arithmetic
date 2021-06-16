// Copyright 2014-2021, University of Colorado Boulder

/**
 * Base type for view used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Bounds2 from '../../../../dot/js/Bounds2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import merge from '../../../../phet-core/js/merge.js';
import Animation from '../../../../twixt/js/Animation.js';
import Easing from '../../../../twixt/js/Easing.js';
import GameAudioPlayer from '../../../../vegas/js/GameAudioPlayer.js';
import arithmetic from '../../arithmetic.js';
import GameState from '../model/GameState.js';
import LevelSelectionNode from './LevelSelectionNode.js';
import WorkspaceNode from './WorkspaceNode.js';

// constants
const SCREEN_CHANGE_TIME = 0.75; // seconds

class ArithmeticView extends ScreenView {

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
   * @param {Object} [options] - Configuration and position options, see usage in code for details.
   */
  constructor( model, multiplicationTableNode, equationNode, options ) {

    super( { layoutBounds: new Bounds2( 0, 0, 768, 504 ) } );
    // defaults
    options = merge( {
      titleString: '',
      showKeypad: true,
      levelSelectButtonColor: 'white',
      levelSelectIconSet: 'multiply'
    }, options );

    // create and add the node that allows the user to select the game level
    const levelSelectionNode = new LevelSelectionNode(
      model,
      options.titleString,
      level => { model.setLevel( level ); },
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
    const workspaceNode = new WorkspaceNode(
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
    const gameAudioPlayer = new GameAudioPlayer();

    // set the origin of the answer animation in the multiplication table, which depends upon the newly set position of
    // the equation node.
    multiplicationTableNode.animationOrigin = equationNode.productInput.center;

    // create the animations that will slide the level selection screen and the workspaces in and out
    const levelSelectionScreenInAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: () => levelSelectionNode.x,
      setValue: newXPosition => {
        levelSelectionNode.x = newXPosition;
      },
      to: this.layoutBounds.minX
    } );
    levelSelectionScreenInAnimator.beginEmitter.addListener( () => {
      levelSelectionNode.visible = true;
      levelSelectionNode.pickable = false; // prevent interaction during animation
    } );
    levelSelectionScreenInAnimator.finishEmitter.addListener( () => {
      levelSelectionNode.pickable = true;
    } );

    const levelSelectionScreenOutAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: () => levelSelectionNode.x,
      setValue: newXPosition => {
        levelSelectionNode.x = newXPosition;
      },
      to: this.layoutBounds.minX - levelSelectionNode.width
    } );
    levelSelectionScreenOutAnimator.beginEmitter.addListener( () => {
      levelSelectionNode.pickable = false; // prevent interaction during animation
    } );
    levelSelectionScreenOutAnimator.finishEmitter.addListener( () => {
      levelSelectionNode.visible = false;
    } );

    const workspaceNodeInAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: () => workspaceNode.x,
      setValue: newXPosition => {
        workspaceNode.x = newXPosition;
      },
      to: this.layoutBounds.minX
    } );
    workspaceNodeInAnimator.beginEmitter.addListener( () => {
      workspaceNode.visible = true;
      workspaceNode.pickable = false; // prevent interaction during animation
    } );
    workspaceNodeInAnimator.finishEmitter.addListener( () => {
      workspaceNode.pickable = true;
    } );

    const workspaceNodeOutAnimator = new Animation( {
      duration: SCREEN_CHANGE_TIME,
      easing: Easing.CUBIC_IN_OUT,
      getValue: () => workspaceNode.x,
      setValue: newXPosition => {
        workspaceNode.x = newXPosition;
      },
      to: this.layoutBounds.maxX
    } );
    workspaceNodeOutAnimator.beginEmitter.addListener( () => {
      workspaceNode.pickable = false; // prevent interaction during animation
    } );
    workspaceNodeOutAnimator.finishEmitter.addListener( () => {
      workspaceNode.visible = false;
    } );

    // monitor the game state and update the view and changes occur
    model.stateProperty.link( ( newState, oldState ) => {

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
        const resultScore = model.activeLevelModel.currentScoreProperty.get();
        const perfectScore = model.activeLevelModel.perfectScore;

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
}

arithmetic.register( 'ArithmeticView', ArithmeticView );
export default ArithmeticView;