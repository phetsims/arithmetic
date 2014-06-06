// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for screens used in the 'Arithmetic' simulation.
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
   * @param model
   * @param multiplicationTableNode
   * @param titleString
   * @constructor
   */
  function ArithmeticScreen( model, multiplicationTableNode, equationNode, titleString ) {
    ScreenView.call( this );

    // add start game level buttons
    this.addChild( new StartGameLevelNode( model.levels, model.bestScores, model.property( 'level' ), titleString, model.simBounds ) );

    // add game components
    this.addChild( new WorkspaceNode( model, multiplicationTableNode, equationNode, this.layoutBounds ) );

    // add timer, sound and reset buttons
    var generalButtons = new VBox( {spacing: 5, children: [
      new TimerToggleButton( model.property( 'timerEnabled' ), {baseColor: 'white'} ),
      new SoundToggleButton( model.property( 'soundEnabled' ), {baseColor: 'white'} ),
      new ResetAllButton( {
        listener: function() {model.reset();}
      } )
    ]} ).mutate( {right: this.layoutBounds.maxX * 0.98, bottom: this.layoutBounds.maxY * 0.95} );
    this.addChild( generalButtons );

    // observers
    model.property( 'level' ).link( function( level ) {
      generalButtons.visible = !level;
    } );
  }

  return inherit( ScreenView, ArithmeticScreen );
} );
