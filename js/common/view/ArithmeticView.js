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
  var LevelSelectionNode = require( 'ARITHMETIC/common/view/LevelSelectionNode' );
  var TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var WorkspaceNode = require( 'ARITHMETIC/common/view/WorkspaceNode' );

  // constants
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );

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
    ScreenView.call( this );

    // add start game level buttons
    this.addChild( new LevelSelectionNode( model.levelModels, model.gameModel.property( 'state' ), model.property( 'timerEnabled' ), titleString,
      function( level ) {
        model.setLevel( level );
      }, { centerX: this.layoutBounds.centerX, centerY: this.layoutBounds.height * 0.4 } ) );

    // add game components
    this.addChild( new WorkspaceNode( model, multiplicationTableNode, equationNode, isAddKeypadNode, this.layoutBounds ) );

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
    model.gameModel.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.LEVEL_SELECT ) {
        soundAndTimerButtons.visible = true;
        resetAllButton.visible = true;
      }
      else {
        soundAndTimerButtons.visible = false;
        resetAllButton.visible = false;
      }
    } );
  }

  return inherit( ScreenView, ArithmeticView );
} );
