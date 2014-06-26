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
  var FaceWithPointsConfiguredNode = require( 'ARITHMETIC/common/view/FaceWithPointsConfiguredNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedConfiguredNode = require( 'ARITHMETIC/common/view/LevelCompletedConfiguredNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var ReturnToLevelSelectButton = require( 'SCENERY_PHET/ReturnToLevelSelectButton' );

  // constants
  var BACK_BUTTON_CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).BACK_BUTTON;
  var BACKGROUND_COLOR = require( 'ARITHMETIC/common/ArithmeticConstants' ).WORKSPACE_BACKGROUND_COLOR;
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  /**
   * @param model {Object} main model for screen
   * @param multiplicationTableNode {Node} multiplication table node for given screen
   * @param equationNode {Node} equation node for given screen
   * @param isAddCalculatorNode {Boolean} flag for adding calculator node
   * @param layoutBounds {Bounds2} bounds of main screen. Necessary for placing components
   *
   * @constructor
   */

  function WorkspaceNode( model, multiplicationTableNode, equationNode, isAddCalculatorNode, layoutBounds ) {
    var self = this;
    Node.call( this );

    // add background for workspace
    this.addChild( new Rectangle( -layoutBounds.width, -layoutBounds.height, 3 * layoutBounds.width, 3 * layoutBounds.height, {fill: BACKGROUND_COLOR} ) );

    // add calculator if necessary
    if ( isAddCalculatorNode ) {
      this.addChild( new CalculatorNode(
          model.property( 'input' ),
          function() {model.checkAnswer();}
        ).mutate( {right: layoutBounds.maxX * 0.98, bottom: layoutBounds.maxY * 0.95} )
      );
    }

    // add control panel
    this.addChild( new ControlPanelNode(
        model.property( 'level' ),
        model.property( 'scoreTotal' ),
        model.property( 'timerEnabled' ),
        model.gameTimer.property( 'elapsedTime' ),
        function() {
          model.game.state = GAME_STATE.REFRESH_LEVEL;
        }
      ).mutate( {right: layoutBounds.maxX * 0.98, top: layoutBounds.maxY * 0.02} )
    );

    // add back to level select button
    var returnToLevelSelectButton;
    this.addChild( returnToLevelSelectButton = new ReturnToLevelSelectButton( {
        baseColor: BACK_BUTTON_CONSTANTS.BASE_COLOR,
        cornerRadius: BACK_BUTTON_CONSTANTS.CORNER_RADIUS,
        xMargin: BACK_BUTTON_CONSTANTS.MARGIN.width,
        yMargin: BACK_BUTTON_CONSTANTS.MARGIN.height,
        listener: function() {
          model.back();
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

    // add smile face
    this.addChild( new FaceWithPointsConfiguredNode(
        model.smileFace
      ).mutate( {bottom: layoutBounds.maxY * 0.95, left: layoutBounds.maxX * 0.04} )
    );

    // add node with statistic (will be shown after completing level)
    this.addChild( new LevelCompletedConfiguredNode(
        model.levelDescriptions,
        model.property( 'level' ),
        model.game.property( 'state' ),
        model.property( 'scoreTotal' ),
        model.property( 'timerEnabled' ),
        model.gameTimer.property( 'elapsedTime' ),
        model.bestTimes,
        function() {
          model.finishLevel();
        },
        layoutBounds )
    );

    model.property( 'level' ).link( function( level ) {
      self.visible = !!level;
    } );

    model.property( 'returnToLevelSelectButtonEnabled' ).link( function( isEnabled ) {
      returnToLevelSelectButton.enabled = isEnabled;
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
