// Copyright 2002-2014, University of Colorado Boulder

/**
 * A composite node that contains all game components: times table, keypad, equation, smile face, etc.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticFaceWithPointsNode = require( 'ARITHMETIC/common/view/ArithmeticFaceWithPointsNode' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var KeypadNode = require( 'ARITHMETIC/common/view/KeypadNode' );
  var LevelCompletedNodeWrapper = require( 'ARITHMETIC/common/view/LevelCompletedNodeWrapper' );
  var Node = require( 'SCENERY/nodes/Node' );
  var ReturnToLevelSelectButton = require( 'SCENERY_PHET/ReturnToLevelSelectButton' );

  /**
   * @param {ArithmeticModel} model - main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
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
        baseColor: ArithmeticConstants.BACK_BUTTON.BASE_COLOR,
        cornerRadius: ArithmeticConstants.BACK_BUTTON.CORNER_RADIUS,
        xMargin: ArithmeticConstants.BACK_BUTTON.MARGIN.width,
        yMargin: ArithmeticConstants.BACK_BUTTON.MARGIN.height,
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
      model.gameModel.property( 'state' ),
      model.levelModels,
      model.property( 'timerEnabled' ),
      function() {
        model.gameModel.state = GameState.REFRESH_LEVEL;
      } );
    controlPanelNode.centerX = ( multiplicationTableNode.right + layoutBounds.maxX ) / 2;
    controlPanelNode.top = multiplicationTableNode.top;
    this.addChild( controlPanelNode );

    // add keypad if necessary
    if ( showKeypad ) {
      this.addChild( new KeypadNode(
          model.property( 'input' ),
          function() {model.fillEquation();}
        ).mutate( {centerX: controlPanelNode.centerX, bottom: layoutBounds.maxY * 0.95} )
      );
    }

    // add smile face
    this.addChild( new ArithmeticFaceWithPointsNode(
        model.faceModel
      ).mutate( {bottom: layoutBounds.maxY * 0.95, left: layoutBounds.maxX * 0.04} )
    );

    // add node with statistic (will be shown after completing level)
    this.addChild( new LevelCompletedNodeWrapper(
        model.levelModels,
        model.property( 'level' ),
        model.gameModel.property( 'state' ),
        model.property( 'timerEnabled' ),
        function() {
          model.finishLevel();
        },
        layoutBounds )
    );

    model.gameModel.property( 'state' ).link( function( state ) {
      self.visible = ( state !== GameState.LEVEL_SELECT );
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
