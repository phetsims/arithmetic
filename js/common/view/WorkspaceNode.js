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
  var ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  var BackButton = require( 'SCENERY_PHET/buttons/BackButton' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Keypad = require( 'SCENERY_PHET/Keypad' );
  var LevelCompletedNodeWrapper = require( 'ARITHMETIC/common/view/LevelCompletedNodeWrapper' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var TextPushButton = require( 'SUN/buttons/TextPushButton' );

  // constants
  var BACK_BUTTON_BASE_COLOR = 'rgb( 255, 204, 67 )'; // base color of back button
  var BACK_BUTTON_MARGIN = new Dimension2( 20, 10 ); // margin of background of back button
  var BUTTON_BASE_COLOR = 'rgb( 255, 204, 67 )'; // Color match the time and sound toggle buttons
  var BUTTON_FONT = new PhetFont( { size: 20 } );
  var BUTTON_INSET_FROM_BOTTOM = 20; // empirically determined

  // strings
  var checkString = require( 'string!ARITHMETIC/check' );
  var tryAgainString = require( 'string!ARITHMETIC/tryAgain' );

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
    equationNode.bottom = layoutBounds.maxY * 0.87;
    equationNode.centerX = layoutBounds.width * 0.45;
    this.addChild( equationNode );

    // hide the equation node when the level has been completed
    model.stateProperty.link( function( gameState ) {
      equationNode.visible = gameState !== GameState.LEVEL_COMPLETED;
    } );

    // add control panel
    var controlPanelNode = new ControlPanelNode(
      model.property( 'level' ),
      model.property( 'state' ),
      model.levelModels,
      ArithmeticGlobals.timerEnabledProperty,
      function() {
        model.refreshLevel();
      } );
    controlPanelNode.centerX = ( multiplicationTableNode.right + layoutBounds.maxX ) / 2;
    controlPanelNode.top = multiplicationTableNode.top;
    this.addChild( controlPanelNode );

    // add keypad if necessary
    if ( showKeypad ) {
      //TODO: Does this need to be on the object, or can it be just a local var?
      // create and add the keypad
      this.keypad = new Keypad( {
        digitStringProperty: model.inputProperty,
        maxDigits: 3,
        centerX: controlPanelNode.centerX,
        bottom: layoutBounds.maxY * 0.85
      } );
      this.addChild( this.keypad );

      // Update the keypad state based on the game state.
      model.stateProperty.link( function( gameState ) {

        if ( gameState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
          // Arm the keypad for auto-clear when showing incorrect feedback.  This is part of the feature where the user
          // can simply start entering values again if they got the wrong answer initially.
          self.keypad.armForNewEntry();
        }

        // Only allow the user to input digits when expecting them.  We use 'pickable' here instead of 'enabled' so that
        // we don't gray out the keypad, which might visually draw attention to it.
        self.keypad.pickable = gameState === GameState.AWAITING_USER_INPUT ||
                               gameState === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK;

        // Don't show the keypad after the level has been completed.
        self.keypad.visible = gameState !== GameState.LEVEL_COMPLETED;
      } );

      // add the 'Check' button, which is only used in conjunction with the keypad
      var checkButton = new TextPushButton( checkString, {
        font: BUTTON_FONT,
        bottom: layoutBounds.bottom - BUTTON_INSET_FROM_BOTTOM,
        centerX: controlPanelNode.centerX,
        baseColor: BUTTON_BASE_COLOR,
        listener: function() { model.fillEquation(); }
      } );
      this.addChild( checkButton );

      var updateCheckButtonState = function() {
        checkButton.visible = ( model.state === GameState.AWAITING_USER_INPUT);
        checkButton.enabled = model.input.length > 0;
      };

      // control the visibility of the 'Check' button
      model.stateProperty.link( updateCheckButtonState );

      // Monitor the string entered from the keypad and, if the user starts entering something immediately after
      // receiving the feedback indicating an incorrect answer, allow them to retry the problem.
      model.inputProperty.link( function( input ) {
        if ( model.state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK ) {
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
    var tryAgainButton = new TextPushButton( tryAgainString, {
      font: BUTTON_FONT,
      bottom: layoutBounds.bottom - BUTTON_INSET_FROM_BOTTOM,
      centerX: controlPanelNode.centerX,
      baseColor: BUTTON_BASE_COLOR,
      listener: function() { model.retryProblem(); }
    } );
    this.addChild( tryAgainButton );

    // control the visibility of the 'Try Again' button
    model.stateProperty.link( function( state ) {
      tryAgainButton.visible = ( state === GameState.DISPLAYING_INCORRECT_ANSWER_FEEDBACK );
    } );

    // add the dialog that indicates that the level has been completed
    this.addChild( new LevelCompletedNodeWrapper(
        model.levelModels,
        model.property( 'level' ),
        model.property( 'state' ),
        ArithmeticGlobals.timerEnabledProperty,
        function() {
          model.state = GameState.LEVEL_COMPLETED;
        },
        layoutBounds )
    );
  }

  return inherit( Node, WorkspaceNode );
} );
