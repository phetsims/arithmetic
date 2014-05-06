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
    HBox = require( 'SCENERY/nodes/HBox' ),
    LevelIconNode = require( 'ARITHMETIC/common/view/LevelIconNode' ),
    SoundToggleButton = require( 'SCENERY_PHET/SoundToggleButton' ),
    TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' ),
    ResetAllButton = require( 'SCENERY_PHET/ResetAllButton' ),

  // images
    girlLevel1Image = require( 'image!ARITHMETIC/girl-level-1.png' ),
    girlLevel2Image = require( 'image!ARITHMETIC/girl-level-2.png' ),
    girlLevel3Image = require( 'image!ARITHMETIC/girl-level-3.png' );

  /**
   * @param model
   * @constructor
   */
  function ArithmeticScreen( model ) {
    ScreenView.call( this );

    this.addChild( new HBox( {centerX: model.width / 2, centerY: model.height / 2, spacing: 20, children: [
      new LevelIconNode( girlLevel1Image ),
      new LevelIconNode( girlLevel2Image ),
      new LevelIconNode( girlLevel3Image )
    ]} ) );

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
