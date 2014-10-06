// Copyright 2002-2014, University of Colorado Boulder

/**
 * A composite node that contains all game components: times table, keypad, equation, smile face, etc.  Some of these
 * are created here, others are passed in (when they need to be of different types), and all are laid out here.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticFaceWithPointsNode = require( 'ARITHMETIC/common/view/ArithmeticFaceWithPointsNode' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KeypadNode = require( 'ARITHMETIC/common/view/KeypadNode' );
  var LevelCompletedNodeWrapper = require( 'ARITHMETIC/common/view/LevelCompletedNodeWrapper' );
  var Node = require( 'SCENERY/nodes/Node' );
  var ReturnToLevelSelectButton = require( 'SCENERY_PHET/buttons/ReturnToLevelSelectButton' );

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

    // add back to level select button
    this.addChild( new ReturnToLevelSelectButton( {
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
    this.addChild( multiplicationTableNode
        .mutate( {top: layoutBounds.maxY * 0.02, centerX: layoutBounds.width * 0.43} )
    );

    // add equation
    this.addChild( equationNode
        .mutate( {bottom: layoutBounds.maxY * 0.87, centerX: layoutBounds.width * 0.45} )
    );

    // add control panel
    var controlPanelNode = new ControlPanelNode(
      model.property( 'level' ),
      model.property( 'state' ),
      model.levelModels,
      model.property( 'timerEnabled' ),
      function() {
        model.state = GameState.REFRESH_LEVEL;
      } );
    controlPanelNode.centerX = ( multiplicationTableNode.right + layoutBounds.maxX ) / 2;
    controlPanelNode.top = multiplicationTableNode.top;
    this.addChild( controlPanelNode );

    // add keypad if necessary
    if ( showKeypad ) {
      this.addChild( new KeypadNode(
          model.property( 'input' ),
          function() {model.fillEquation();},
          {centerX: controlPanelNode.centerX, bottom: layoutBounds.maxY * 0.95}
        )
      );
    }

    // add smile face
    this.addChild( new ArithmeticFaceWithPointsNode(
        model.faceModel,
        {bottom: layoutBounds.maxY * 0.95, left: layoutBounds.maxX * 0.04}
      )
    );

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

    model.property( 'state' ).link( function( state ) {
      self.visible = ( state !== GameState.LEVEL_SELECT );
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
