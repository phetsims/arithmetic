// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for view used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var SoundToggleButton = require( 'SCENERY_PHET/SoundToggleButton' );
  var StartGameLevelNode = require( 'ARITHMETIC/common/view/StartGameLevelNode' );
  var TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  /**
   * @param model {Object} main model for screen
   * @param multiplicationTableNode {Node} multiplication table node for given screen
   * @param equationNode {Node} equation node for given screen
   * @param isAddCalculatorNode {Boolean} flag for adding calculator node
   * @param titleString {String} title string for given screen
   *
   * @constructor
   */
  function ArithmeticView( model, multiplicationTableNode, equationNode, isAddCalculatorNode, titleString ) {
    ScreenView.call( this );

    // add start game level buttons
    this.addChild( new StartGameLevelNode( model.levelDescriptions, model.bestScores, model.property( 'level' ), titleString, model.simBounds ) );

    // add game components
    this.addChild( new WorkspaceNode( model, multiplicationTableNode, equationNode, isAddCalculatorNode, this.layoutBounds ) );

    // add timer and sound buttons
    var soundAndTimerButtons = new VBox( {spacing: 5, children: [
      new TimerToggleButton( model.property( 'timerEnabled' ) ),
      new SoundToggleButton( model.property( 'soundEnabled' ) )
    ]} ).mutate( {right: this.layoutBounds.maxX * 0.08, bottom: this.layoutBounds.maxY * 0.95} );
    this.addChild( soundAndTimerButtons );

    // add reset all button
    var resetAllButton = new ResetAllButton( {
      listener: function() {model.reset();}
    } ).mutate( {right: this.layoutBounds.maxX * 0.98, bottom: this.layoutBounds.maxY * 0.95} );
    this.addChild( resetAllButton );

    // observers
    model.property( 'level' ).link( function( level ) {
      soundAndTimerButtons.visible = !level;
      resetAllButton.visible = !level;
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
