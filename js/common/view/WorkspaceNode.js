// Copyright 2002-2014, University of Colorado Boulder

/**
 * Contains all game components: times table, calculator, equation, smile face, etc.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var BackButtonNode = require( 'ARITHMETIC/common/view/BackButtonNode' );
  var CalculatorNode = require( 'ARITHMETIC/common/view/CalculatorNode' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var FaceWithScoreConfiguredNode = require( 'ARITHMETIC/common/view/FaceWithScoreConfiguredNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelCompletedConfiguredNode = require( 'ARITHMETIC/common/view/LevelCompletedConfiguredNode' );
  var Node = require( 'SCENERY/nodes/Node' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/enum/GameState' );

  function WorkspaceNode( model, multiplicationTableNode, equationNode, layoutBounds ) {
    var self = this;
    Node.call( this );

    // add calculator
    this.addChild( new CalculatorNode(
        model.property( 'input' ),
        function() {model.checkInput();}
      ).mutate( {right: layoutBounds.maxX * 0.98, bottom: layoutBounds.maxY * 0.95} )
    );

    // add control panel
    this.addChild( new ControlPanelNode(
        model.property( 'level' ),
        model.property( 'scoreTotal' ),
        model.property( 'time' ),
        model.property( 'isTimer' ),
        model.property( 'isSound' ),
        function() {
          model.refreshLevel();
          model.game.state = GAME_STATE.NEXT_TASK;
        }
      ).mutate( {right: layoutBounds.maxX * 0.98, top: layoutBounds.maxY * 0.02} )
    );

    // add back button
    this.addChild( new BackButtonNode(
        function() {
          model.back();
        }
      ).mutate( {left: layoutBounds.maxX * 0.02, top: layoutBounds.maxY * 0.02} )
    );

    // add multiplication table
    this.addChild( multiplicationTableNode
        .mutate( {top: layoutBounds.maxY * 0.02, centerX: layoutBounds.width * 0.43} )
    );

    // add equation
    this.addChild( equationNode
        .mutate( {bottom: layoutBounds.maxY * 0.95, centerX: layoutBounds.width * 0.45} )
    );

    // add smile face
    this.addChild( new FaceWithScoreConfiguredNode(
        model.smileFace
      ).mutate( {bottom: layoutBounds.maxY * 0.95, left: layoutBounds.maxX * 0.04} )
    );

    // add node with statistic (will be shown after completing level)
    this.addChild( new LevelCompletedConfiguredNode(
        model.levels,
        model.property( 'level' ),
        model.game.property( 'state' ),
        model.property( 'scoreTotal' ),
        model.property( 'isTimer' ),
        model.property( 'time' ),
        model.bestTimes,
        function() {
          model.back();
          model.refreshLevel();
          model.game.state = GAME_STATE.START;
        },
        layoutBounds )
    );

    model.property( 'level' ).link( function( level ) {
      self.visible = !!level;
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
