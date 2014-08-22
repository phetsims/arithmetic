// Copyright 2002-2014, University of Colorado Boulder

/**
 * Contains all game components: times table, calculator, equation, smile face, etc.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var CalculatorNode = require( 'ARITHMETIC/common/view/CalculatorNode' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var ArithmeticFaceWithPointsNode = require( 'ARITHMETIC/common/view/ArithmeticFaceWithPointsNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedNodeWrapper = require( 'ARITHMETIC/common/view/LevelCompletedNodeWrapper' );
  var Node = require( 'SCENERY/nodes/Node' );
  var ReturnToLevelSelectButton = require( 'SCENERY_PHET/ReturnToLevelSelectButton' );

  // constants
  var BACK_BUTTON_CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).BACK_BUTTON;
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

  /**
   * @param {ArithmeticModel} model - main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
   * @param {Boolean} isAddCalculatorNode - Flag for adding calculator node.
   * @param {Bounds2} layoutBounds - Bounds of main screen. Necessary for placing components.
   *
   * @constructor
   */
  function WorkspaceNode( model, multiplicationTableNode, equationNode, isAddCalculatorNode, layoutBounds ) {
    var self = this;
    Node.call( this );

    // add back to level select button
    this.addChild( new ReturnToLevelSelectButton( {
        baseColor: BACK_BUTTON_CONSTANTS.BASE_COLOR,
        cornerRadius: BACK_BUTTON_CONSTANTS.CORNER_RADIUS,
        xMargin: BACK_BUTTON_CONSTANTS.MARGIN.width,
        yMargin: BACK_BUTTON_CONSTANTS.MARGIN.height,
        listener: function() {
          model.returnToLevelSelectScreen();
        }
      } )
        .mutate( {scale: 0.75, left: layoutBounds.maxX * 0.02, top: layoutBounds.maxY * 0.02} )
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
        model.gameModel.state = GAME_STATE.REFRESH_LEVEL;
      } );
    controlPanelNode.centerX = ( multiplicationTableNode.right + layoutBounds.maxX ) / 2;
    controlPanelNode.top = multiplicationTableNode.top;
    this.addChild( controlPanelNode );

    // add calculator if necessary
    if ( isAddCalculatorNode ) {
      this.addChild( new CalculatorNode(
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
      self.visible = ( state !== GAME_STATE.LEVEL_SELECT );
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
