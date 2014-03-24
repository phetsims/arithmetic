// Copyright 2002-2014, University of Colorado Boulder

/**
 * Base type for screens used in the 'Arithmetic' simulation.
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' ),
    ScreenView = require( 'JOIST/ScreenView' ),
    VBox = require( 'SCENERY/nodes/VBox' ),
    SoundToggleButton = require( 'SCENERY_PHET/SoundToggleButton' ),
    TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' ),
    ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' );

  /**
   * @param model
   * @constructor
   */
  function ArithmeticScreen( model ) {
    ScreenView.call( this );

    // add timer, sound and reset buttons
    this.addChild( new VBox( {spacing: 5, children: [
      new TimerToggleButton( model.property( 'isTimer' ) ),
      new SoundToggleButton( model.property( 'isSound' ) ),
      new ResetAllButton( function() {model.reset();}, {scale: 0.75} )
    ]} ).mutate( {right: this.layoutBounds.maxX * 0.98, bottom: this.layoutBounds.maxY * 0.95} ) );
  }

  return inherit( ScreenView, ArithmeticScreen );
} );
