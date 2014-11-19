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
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Text = require( 'SCENERY/nodes/Text' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  // constants
  var ANIMATION_TIME = 750;

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
    var self = this;
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
    workspaceNode.left = this.layoutBounds.maxX;
    workspaceNode.visible = false;
    this.addChild( workspaceNode );

    // create the animators or 'tweens' that will slide the screens in and out.
    var levelSelectionScreenAnimator = new TWEEN.Tween( levelSelectionNode ).easing( TWEEN.Easing.Cubic.InOut ).onComplete( function() {
      levelSelectionNode.visible = ( levelSelectionNode.x === self.layoutBounds.minX );
    } );

    var workspaceNodeAnimator = new TWEEN.Tween( workspaceNode ).easing( TWEEN.Easing.Cubic.InOut ).onComplete( function() {
      workspaceNode.visible = ( workspaceNode.x === self.layoutBounds.minX );
    } );

    // variables for tracking the problem being worked on by the user.
    var previousLeftMultiplier;
    var previousRightMultiplier;
    var currentLeftMultiplier;
    var currentRightMultiplier;

    // observers
    model.property( 'state' ).link( function( newState, oldState ) {
      console.log( '------------------' );
      console.log( 'oldState = ' + oldState );
      console.log( 'newState = ' + newState );

      // animate the transition between the level select screen and the selected level
      if ( newState === GameState.LEVEL_SELECT && oldState ) {

        // Slide out the workspace node
        workspaceNodeAnimator.stop().to( { x: self.layoutBounds.maxX }, ANIMATION_TIME ).start();

        // Slide in the level selection screen
        levelSelectionNode.visible = true;
        levelSelectionScreenAnimator.stop().to( { x: self.layoutBounds.minX }, ANIMATION_TIME ).start();
      }
      else if ( newState !== GameState.LEVEL_SELECT && oldState === GameState.LEVEL_SELECT ) {

        // Slide in the workspace node
        workspaceNode.visible = true;
        workspaceNodeAnimator.stop().to( { x: self.layoutBounds.minX }, ANIMATION_TIME ).start();

        // Slide out the level selection screen
        levelSelectionScreenAnimator.stop().to( { right: self.layoutBounds.minX }, ANIMATION_TIME ).start();
      }

      if ( newState === GameState.NEXT_TASK ) {
        previousLeftMultiplier = currentLeftMultiplier;
        previousRightMultiplier = currentRightMultiplier;
        currentLeftMultiplier = model.gameModel.multiplierLeft;
        currentRightMultiplier = model.gameModel.multiplierRight;
      }

      // TODO: The following is code to prototype the feature for animating the answer up to the board.  It is
      // not production quality, and should be better integrated into the sim's architecture.
      if ( oldState === GameState.EQUATION_FILLED && newState === GameState.NEXT_TASK && previousLeftMultiplier && previousRightMultiplier ) {
        var animatingTextNode = new Text( model.input, {
          font: new PhetFont( { size: 30 } ),
          fill: 'white',
          center: equationNode.leftTop.plus( equationNode.productInput.center )
        } );
        self.addChild( animatingTextNode );
        var destination = multiplicationTableNode.whereIsCellCenter( model.level, previousRightMultiplier, previousLeftMultiplier );
        var tween = new TWEEN.Tween( animatingTextNode ).
          easing( TWEEN.Easing.Cubic.InOut ).
          to( { centerX: destination.x, centerY: destination.y }, 1000 ).
          onComplete( function() { self.removeChild( animatingTextNode ) } );
        tween.start();
      }
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
