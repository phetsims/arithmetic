// Copyright 2014-2025, University of Colorado Boulder

/**
 * A composite node that contains all game components: times table, keypad, equation, smile face, etc.  Some of these
 * are created here, others are passed in (when they need to be of different types), and all are laid out here.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import merge from '../../../../phet-core/js/merge.js';
import BackButton from '../../../../scenery-phet/js/buttons/BackButton.js';
import Keypad from '../../../../scenery-phet/js/keypad/Keypad.js';
import PhetColorScheme from '../../../../scenery-phet/js/PhetColorScheme.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import HotkeyData from '../../../../scenery/js/input/HotkeyData.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import KeyboardListener from '../../../../scenery/js/listeners/KeyboardListener.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import TextPushButton from '../../../../sun/js/buttons/TextPushButton.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import ArithmeticConstants from '../ArithmeticConstants.js';
import ArithmeticGlobals from '../ArithmeticGlobals.js';
import GameState from '../model/GameState.js';
import ArithmeticFaceWithPointsNode from './ArithmeticFaceWithPointsNode.js';
import LevelCompletedNodeWrapper from './LevelCompletedNodeWrapper.js';
import ScoreboardNode from './ScoreboardNode.js';

// constants
const BACK_BUTTON_BASE_COLOR = PhetColorScheme.BUTTON_YELLOW; // base color of back button
const BACK_BUTTON_MARGIN = new Dimension2( 20, 10 ); // margin of background of back button
const BUTTON_BASE_COLOR = PhetColorScheme.BUTTON_YELLOW;
const BUTTON_FONT = new PhetFont( { size: 20 } );

const checkString = ArithmeticStrings.checkStringProperty;
const tryAgainString = ArithmeticStrings.tryAgainStringProperty;

class WorkspaceNode extends Node {

  /**
   * @param {ArithmeticModel} model - main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.  This can be (and generally is)
   * different depending on the flavor of the game, i.e. multiplication, division, or factoring.  This is why it is
   * passed in rather than locally created.
   * @param {Node} equationNode - Equation node for given screen.  This can be (and generally is) different depending
   * on the flavor of the game, i.e. multiplication, division, or factoring.  This is why it is passed in rather than
   * locally created.
   * @param {Bounds2} layoutBounds - Bounds of main screen. Necessary for placing components.
   * @param {Object} [options]
   *
   */
  constructor( model, multiplicationTableNode, equationNode, layoutBounds, options ) {
    super();

    options = merge( {
      scoreboardTitle: '',
      showKeypad: true
    }, options );

    // add button for returning to the level select screen
    const backButton = new BackButton( {
      baseColor: BACK_BUTTON_BASE_COLOR,
      xMargin: BACK_BUTTON_MARGIN.width,
      yMargin: BACK_BUTTON_MARGIN.height,
      scale: 0.75, // empirically determined
      left: layoutBounds.maxX * 0.02,
      top: layoutBounds.maxY * 0.02,
      listener: () => {
        model.returnToLevelSelectScreen();
      }
    } );

    this.addChild( backButton );

    // add multiplication table
    multiplicationTableNode.mutate( { top: layoutBounds.maxY * 0.02, centerX: layoutBounds.width * 0.43 } );
    this.addChild( multiplicationTableNode );

    // clear the multiplication table node on a refresh event.
    model.refreshEmitter.addListener( () => {
      multiplicationTableNode.refreshLevel( model.levelNumberProperty.get() );
    } );

    // add equation
    equationNode.bottom = layoutBounds.maxY * 0.87;
    equationNode.centerX = layoutBounds.width * 0.45;
    this.addChild( equationNode );

    // hide the equation node when the level has been completed
    model.stateProperty.link( ( newGameState, oldGameState ) => {

      // Hide the equation node when the level has been completed and when returning to the level selection screen
      // after the level is complete.
      equationNode.visible = !( newGameState === GameState.LEVEL_COMPLETED ||
                                ( oldGameState === GameState.LEVEL_COMPLETED &&
                                  newGameState === GameState.SELECTING_LEVEL ) );
    } );

    // define the width of the control panel so that it fits between the table and the bounds with some margin
    const controlPanelWidth = layoutBounds.maxX - multiplicationTableNode.right - 60;

    /**
     * The keypad will be defined below if it is to be shown, otherwise it is null.
     * @type {Keypad|null}
     */
    let keypad = null;

    // add control panel
    const scoreboardNode = new ScoreboardNode(
      model.levelNumberProperty,
      model.stateProperty,
      model.levelModels,
      ArithmeticGlobals.timerEnabledProperty,
      () => {
        model.refreshLevel();
        keypad && keypad.clear();
      },
      {
        title: options.scoreboardTitle,
        minWidth: controlPanelWidth,
        maxWidth: controlPanelWidth,
        layoutOptions: {
          bottomMargin: 32 // empirically determined to match 2015 published version
        }
      }
    );

    const controlPanelVBox = new VBox( {
      children: [ scoreboardNode ],
      centerX: ( multiplicationTableNode.right + layoutBounds.maxX ) / 2,
      top: backButton.top,
      spacing: ArithmeticConstants.CONTROL_PANEL_VBOX_SPACING // empirically determined to match 2015 published version,
    } );
    controlPanelVBox.top = multiplicationTableNode.top;
    this.addChild( controlPanelVBox );

    if ( options.showKeypad ) {

      // create and add the keypad
      keypad = new Keypad( Keypad.PositiveIntegerLayout, {
        accumulatorOptions: {
          maxDigits: 3
        },
        useGlobalKeyboardListener: true
      } );

      keypad.stringProperty.link( input => { model.inputProperty.set( input ); } );

      // Update the keypad state based on the game state.
      model.stateProperty.link( ( newGameState, oldGameState ) => {

        if ( newGameState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          // Arm the keypad for auto-clear when showing incorrect feedback.  This is part of the feature where the user
          // can simply start entering values again if they got the wrong answer initially.
          keypad.setClearOnNextKeyPress( true );
        }
        else if ( newGameState === GameState.AWAITING_USER_INPUT &&
                  oldGameState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          keypad.clear();
        }

        // Only allow the user to input digits when expecting them.
        keypad.enabled = newGameState === GameState.AWAITING_USER_INPUT ||
                         newGameState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK;

        // The keypad should be invisible once the level is completed, and should stay invisible on transition to the
        // SELECTING_LEVEL state.
        keypad.visible = !( newGameState === GameState.LEVEL_COMPLETED || newGameState === GameState.SHOWING_LEVEL_COMPLETED_DIALOG ||
                            ( ( oldGameState === GameState.LEVEL_COMPLETED || oldGameState === GameState.SHOWING_LEVEL_COMPLETED_DIALOG ) &&
                              newGameState === GameState.SELECTING_LEVEL ) );
      } );

      // add the 'Check' button, which is only used in conjunction with the keypad
      const checkButton = new TextPushButton( checkString, {
        font: BUTTON_FONT,
        baseColor: BUTTON_BASE_COLOR,
        maxWidth: controlPanelWidth,
        listener: () => { model.fillEquation(); }
      } );

      KeyboardListener.createGlobal( keypad, {
        keyStringProperties: WorkspaceNode.SUBMIT_HOTKEY_DATA.keyStringProperties,
        fireOnDown: false,
        fire: () => {
          if ( keypad.stringProperty.value === '' ) {
            return;
          }
          if ( model.stateProperty.get() === GameState.AWAITING_USER_INPUT ) {
            model.fillEquation();
          }
          else if ( model.stateProperty.get() === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
            keypad.clear();
            model.inputProperty.reset();
            model.retryProblem();
          }
        }
      } );

      controlPanelVBox.addChild( keypad );
      controlPanelVBox.addChild( checkButton );

      const updateCheckButtonState = () => {
        checkButton.visible = ( model.stateProperty.get() === GameState.AWAITING_USER_INPUT );
        checkButton.enabled = model.inputProperty.get().length > 0;
      };

      // control the visibility of the 'Check' button
      model.stateProperty.link( updateCheckButtonState );

      // Monitor the string entered from the keypad and, if the user starts entering something immediately after
      // receiving the feedback indicating an incorrect answer, allow them to retry the problem.
      model.inputProperty.link( input => {
        if ( model.stateProperty.get() === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          model.retryProblem();
        }
        updateCheckButtonState();
      } );
    }

    // add smile face
    this.addChild( new ArithmeticFaceWithPointsNode( model.faceModel, {
      bottom: layoutBounds.maxY * 0.92,
      left: layoutBounds.maxX * 0.04
    } ) );

    // add the 'try again' button
    const tryAgainButton = new TextPushButton( tryAgainString, {
      font: BUTTON_FONT,
      baseColor: BUTTON_BASE_COLOR,
      maxWidth: controlPanelWidth,
      listener: () => {
        keypad && keypad.clear();
        model.inputProperty.reset();
        model.retryProblem();
      }
    } );
    controlPanelVBox.addChild( tryAgainButton );

    // control the visibility of the 'Try Again' button
    model.stateProperty.link( state => {
      tryAgainButton.visible = ( state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    } );

    // add the dialog that indicates that the level has been completed
    controlPanelVBox.addChild( new LevelCompletedNodeWrapper(
      model.levelModels,
      model.levelNumberProperty,
      model.stateProperty,
      ArithmeticGlobals.timerEnabledProperty,
      () => {
        model.stateProperty.set( GameState.LEVEL_COMPLETED );
        model.returnToLevelSelectScreen();
      },
      controlPanelVBox,
      {
        minWidth: controlPanelWidth,
        maxWidth: controlPanelWidth
      } )
    );
  }

  static SUBMIT_HOTKEY_DATA = new HotkeyData( {
    keys: [ 'enter', 'space' ],
    binderName: 'Submit answer',
    repoName: arithmetic.name,
    global: true
  } );
}

arithmetic.register( 'WorkspaceNode', WorkspaceNode );

export default WorkspaceNode;