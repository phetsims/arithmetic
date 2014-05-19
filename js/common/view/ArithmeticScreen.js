// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for screens used in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );
  var TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var SoundToggleButton = require( 'SCENERY_PHET/SoundToggleButton' );
  var StartGameLevelNode = require( 'ARITHMETIC/common/view/StartGameLevelNode' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  /**
   * @param model
   * @param titleString
   * @constructor
   */
  function ArithmeticScreen( model, titleString ) {
    ScreenView.call( this );

    this.addChild( new StartGameLevelNode( model.levels, model.bestScores, titleString, model.simBounds ) );

    // add timer, sound and reset buttons
    this.addChild( new VBox( {spacing: 5, children: [
      new TimerToggleButton( model.property( 'isTimer' ) ),
      new SoundToggleButton( model.property( 'isSound' ) ),
      new ResetAllButton( {
        listener: function() {model.reset();}
      } )
    ]} ).mutate( {right: this.layoutBounds.maxX * 0.98, bottom: this.layoutBounds.maxY * 0.95} ) );
  }

  return inherit( ScreenView, ArithmeticScreen );
} );
