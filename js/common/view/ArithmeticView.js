// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for view used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSelectionNode = require( 'ARITHMETIC/common/view/LevelSelectionNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
   * @param {Boolean} isAddKeypadNode - Flag for adding the keypad node.
   * @param {String} titleString - Title string for given screen.
   *
   * @constructor
   */
  function ArithmeticView( model, multiplicationTableNode, equationNode, isAddKeypadNode, titleString ) {
    ScreenView.call( this, { renderer: 'svg' } );

    // create and add the node that allows the user to select the game level
    var levelSelectionNode = new LevelSelectionNode(
      model,
      titleString,
      function( level ) { model.setLevel( level ); },
      this.layoutBounds,
      { centerX: this.layoutBounds.centerX, centerY: this.layoutBounds.centerY }
    );
    this.addChild( levelSelectionNode );

    // add the game components
    var workspaceNode = new WorkspaceNode( model, multiplicationTableNode, equationNode, isAddKeypadNode, this.layoutBounds );
    this.addChild( workspaceNode );

    // observers
    model.property( 'state' ).link( function( state ) {
      levelSelectionNode.visible = state === GameState.LEVEL_SELECT;
      workspaceNode.visible = state !== GameState.LEVEL_SELECT;
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
