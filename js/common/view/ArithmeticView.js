// Copyright 2002-2014, University of Colorado Boulder

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
   * @param {object} options - Configuration and position options, see usage in code for details.
   *
   * @constructor
   */
//  function ArithmeticView( model, multiplicationTableNode, equationNode, isAddKeypadNode, titleString ) {
  function ArithmeticView( model, multiplicationTableNode, equationNode, options ) {
    var self = this;
    ScreenView.call( this, { renderer: 'svg', layoutBounds: new Bounds2(  0, 0, 768, 504 ) } );

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

      // animate the transition between the level select screen and the selected level
      if ( newState === GameState.SELECTING_LEVEL && oldState ) {

        // Slide out the workspace node
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
        levelSelectionScreenAnimator.stop().to( { right: self.layoutBounds.minX }, ANIMATION_TIME ).start();
      }

      if ( newState === GameState.AWAITING_USER_INPUT ) {
        // Take a snapshot of the previous problem, used for animation.
        previousLeftMultiplier = currentLeftMultiplier;
        previousRightMultiplier = currentRightMultiplier;
        currentLeftMultiplier = model.problemModel.multiplierLeft;
        currentRightMultiplier = model.problemModel.multiplierRight;
      }

      /*
       // TODO:
       // The following is code to prototype the feature for animating the answer up to the board.  It is
       // not production quality, and should be better integrated into the sim's architecture.
       // As of 12/2/2014 this was set aside to work on other things, but is kept for the animation example.  Delete when integrated.
       if ( oldState === GameState.EQUATION_FILLED && newState === GameState.AWAITING_USER_INPUT && previousLeftMultiplier && previousRightMultiplier ) {
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
       */
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
