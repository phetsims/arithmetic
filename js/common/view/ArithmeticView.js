// Copyright 2014-2015, University of Colorado Boulder

/**
 * Base type for view used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var Bounds2 = require( 'DOT/Bounds2' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSelectionNode = require( 'ARITHMETIC/common/view/LevelSelectionNode' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  // constants
  var ANIMATION_TIME = 750;

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {Node} multiplicationTableNode - Multiplication table node for given screen.
   * @param {Node} equationNode - Equation node for given screen.
   * @param {Object} [options] - Configuration and position options, see usage in code for details.
   * @constructor
   */
  function ArithmeticView( model, multiplicationTableNode, equationNode, options ) {
    var self = this;
    ScreenView.call( this, { layoutBounds: new Bounds2( 0, 0, 768, 504 ) } );

    // defaults
    options = _.extend( {
      titleString: '',
      showKeypad: true,
      levelSelectButtonColor: 'white',
      levelSelectIconSet: 'multiply'
    }, options );

    // create and add the node that allows the user to select the game level
    var levelSelectionNode = new LevelSelectionNode(
      model,
      options.titleString,
      function( level ) { model.setLevel( level ); },
      this.layoutBounds,
      {
        centerX: this.layoutBounds.centerX,
        centerY: this.layoutBounds.centerY,
        buttonBaseColor: options.levelSelectButtonColor,
        iconSet: options.levelSelectIconSet
      }
    );
    this.addChild( levelSelectionNode );

    // add the game components
    var workspaceNode = new WorkspaceNode( model, multiplicationTableNode, equationNode, options.showKeypad, this.layoutBounds );
    workspaceNode.left = this.layoutBounds.maxX;
    workspaceNode.visible = false;
    this.addChild( workspaceNode );

    // set the origin of the answer animation in the multiplication table, which depends upon the newly set position of
    // the equation node.
    multiplicationTableNode.animationOrigin = equationNode.productInput.center;

    // create the animators or 'tweens' that will slide the screens in and out.
    var levelSelectionScreenAnimator = new TWEEN.Tween( { x: levelSelectionNode.x } ).
      easing( TWEEN.Easing.Cubic.InOut ).
      onUpdate( function() {
        levelSelectionNode.x = this.x;
      } ).
      onComplete( function() {
        levelSelectionNode.visible = ( levelSelectionNode.x === self.layoutBounds.minX );
        levelSelectionNode.pickable = levelSelectionNode.visible; // prevent interaction during animation, see issue #137
      } );

    var workspaceNodeAnimator = new TWEEN.Tween( { x: workspaceNode.x } ).
      easing( TWEEN.Easing.Cubic.InOut ).
      onUpdate( function() {
        workspaceNode.x = this.x;
      } ).
      onComplete( function() {
        workspaceNode.visible = ( workspaceNode.x === self.layoutBounds.minX );
        workspaceNode.pickable = workspaceNode.visible; // prevent interaction during animation, see issue #137
      } );

    // observers
    model.property( 'state' ).link( function( newState, oldState ) {

      // animate the transition between the level select screen and the selected level
      if ( newState === GameState.SELECTING_LEVEL && oldState ) {

        // Slide out the workspace node
        workspaceNode.pickable = false;
        workspaceNodeAnimator.stop().to( { x: self.layoutBounds.maxX }, ANIMATION_TIME ).start();

        // Slide in the level selection screen
        levelSelectionNode.visible = true;
        levelSelectionScreenAnimator.stop().to( { x: self.layoutBounds.minX }, ANIMATION_TIME ).start();
      }
      else if ( newState !== GameState.SELECTING_LEVEL && oldState === GameState.SELECTING_LEVEL ) {

        // Slide in the workspace node
        workspaceNode.visible = true;
        workspaceNodeAnimator.stop().to( { x: self.layoutBounds.minX }, ANIMATION_TIME ).start();

        // Slide out the level selection screen
        levelSelectionNode.pickable = false;
        levelSelectionScreenAnimator.stop().to( { x: self.layoutBounds.minX - levelSelectionNode.width }, ANIMATION_TIME ).start();
      }
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
