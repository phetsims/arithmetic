// Copyright 2002-2014, University of Colorado Boulder

/**
 * A composite node that contains all game components: times table, keypad, equation, smile face, etc.  Some of these
 * are created here, others are passed in (when they need to be of different types), and all are laid out here.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticFaceWithPointsNode = require( 'ARITHMETIC/common/view/ArithmeticFaceWithPointsNode' );
  var BackButton = require( 'SCENERY_PHET/buttons/BackButton' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KeypadNode = require( 'ARITHMETIC/common/view/KeypadNode' );
  var LevelCompletedNodeWrapper = require( 'ARITHMETIC/common/view/LevelCompletedNodeWrapper' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var TextPushButton = require( 'SUN/buttons/TextPushButton' );

  // constants
  var BACK_BUTTON_BASE_COLOR = 'rgb( 255, 204, 67 )'; // base color of back button
  var BACK_BUTTON_MARGIN = new Dimension2( 20, 10 ); // margin of background of back button

  /**
   * @param {ArithmeticModel} model - main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.  This can be (and generally is)
   * different depending on the flavor of the game, i.e. multiplication, division, or factoring.  This is why it is
   * passed in rather than locally created.
   * @param {Node} equationNode - Equation node for given screen.  This can be (and generally is) different depending
   * on the flavor of the game, i.e. multiplication, division, or factoring.  This is why it is passed in rather than
   * locally created.
   * @param {Boolean} showKeypad - Flag for adding keypad node.
   * @param {Bounds2} layoutBounds - Bounds of main screen. Necessary for placing components.
   *
   * @constructor
   */
  function WorkspaceNode( model, multiplicationTableNode, equationNode, showKeypad, layoutBounds ) {
    var self = this;
    Node.call( this );

    // add button for returning to the level select screen
    this.addChild( new BackButton( {
        baseColor: BACK_BUTTON_BASE_COLOR,
        xMargin: BACK_BUTTON_MARGIN.width,
        yMargin: BACK_BUTTON_MARGIN.height,
        cornerRadius: 7,
        scale: 0.75, // empirically determined
        left: layoutBounds.maxX * 0.02,
        top: layoutBounds.maxY * 0.02,
        listener: function() {
          model.returnToLevelSelectScreen();
        }
      } )
    );

    // add multiplication table
    multiplicationTableNode.mutate( { top: layoutBounds.maxY * 0.02, centerX: layoutBounds.width * 0.43 } );
    this.addChild( multiplicationTableNode );

    // clear the multiplication table node on a refresh event. TODO if the refactor is done where cells track their own solved state, this will be unnecessary.
    model.on( 'refreshed', function() {
      multiplicationTableNode.refreshLevel( model.level );
    } );

    // add equation
    this.addChild( equationNode.mutate( { bottom: layoutBounds.maxY * 0.87, centerX: layoutBounds.width * 0.45 } ) );

    // add control panel
    var controlPanelNode = new ControlPanelNode(
      model.property( 'level' ),
      model.property( 'state' ),
      model.levelModels,
      model.property( 'timerEnabled' ),
      function() {
        model.refreshLevel();
      } );
    controlPanelNode.centerX = ( multiplicationTableNode.right + layoutBounds.maxX ) / 2;
    controlPanelNode.top = multiplicationTableNode.top;
    this.addChild( controlPanelNode );

    // add keypad if necessary
    if ( showKeypad ) {
      //TODO: Does this need to be on the object, or can it be just a local var?
      this.keypad = new KeypadNode(
        model.property( 'input' ),
        function() { model.fillEquation(); },
        { centerX: controlPanelNode.centerX, bottom: layoutBounds.maxY * 0.95 }
      );
      this.addChild( this.keypad );

      // Monitor the game state and arm the keypad for auto-clear when showing incorrect feedback.  This is part of the
      // feature where the user can simply start entering values again if they got the wrong answer initially.
      model.property( 'state' ).link( function( gameState ) {
        if ( gameState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          self.keypad.autoClearArmedProperty.value = true;
        }
        else if ( gameState !== GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK && self.keypad.autoClearArmedProperty.value ) {
          // The user must have pressed the 'try again' button, so un-arm the auto clear flag.
          self.keypad.autoClearArmedProperty.value = false;
        }
      } );

      // Monitor the string controlled from the keypad and, if the user starts entering something while in the state
      // where they got a previous answer wrong, allow them to retry the problem.
      model.property( 'input' ).link( function( input ) {
        if ( model.state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          model.retryProblem();
        }
      } );
    }

    // add smile face
    this.addChild( new ArithmeticFaceWithPointsNode( model.faceModel, {
      bottom: layoutBounds.maxY * 0.92,
      left: layoutBounds.maxX * 0.04
    } ) );

    // add the 'try again' button
    var tryAgainButton = new TextPushButton( 'Try Again', {
      font: new PhetFont( { size: 20 } ),
      top: equationNode.bottom + 10,
      centerX: equationNode.x + equationNode.productInput.centerX,
      baseColor: 'rgb( 255, 204, 67 )', // Color match the time and sound toggle buttons
      listener: function() { model.retryProblem(); }
    } );
    this.addChild( tryAgainButton );

    // control the visibility of the 'Try Again' button
    model.stateProperty.link( function( state ) { tryAgainButton.visible = state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK; } );

    // add node with statistic (will be shown after completing level)
    this.addChild( new LevelCompletedNodeWrapper(
        model.levelModels,
        model.property( 'level' ),
        model.property( 'state' ),
        model.property( 'timerEnabled' ),
        function() {
          model.finishLevel();
        },
        layoutBounds )
    );
  }

  return inherit( Node, WorkspaceNode );
} );
