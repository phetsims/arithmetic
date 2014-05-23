// Copyright 2002-2014, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RefreshButton = require( 'SCENERY_PHET/RefreshButton' );
  var SoundToggleButton = require( 'SCENERY_PHET/SoundToggleButton' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var TimerToggleButton = require( 'SCENERY_PHET/TimerToggleButton' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var pattern_level_0levelNumber = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );
  var pattern_0minute_1second = require( 'string!ARITHMETIC/pattern.0minute.1second' );
  var scoreString = require( 'string!ARITHMETIC/score' );
  var timeString = require( 'string!ARITHMETIC/time' );

  // constants
  var FONT = new PhetFont( 18 );
  var SPACING = 18;
  var BACKGROUND_X_MARGIN = 20;
  var BACKGROUND_Y_MARGIN = 20;

  function ControlPanelNode( levelProperty, scoreProperty, timeProperty, isTimerProperty, isSoundProperty, refreshLevelCallback ) {
    var background = new Rectangle( 0, 0, 0, 0, {fill: 'rgb(254,208,153)'} ),
      levelText = new Text( '1', {font: FONT} ),
      scoreText = new Text( '1', {font: FONT} ),
      timeText = new Text( '1', {font: FONT} );
    Node.call( this );

    // add background
    this.addChild( background );

    // add control buttons
    this.addChild( new VBox( {spacing: SPACING, children: [
      // add level text
      levelText,
      // add refresh button
      new RefreshButton( {
        baseColor: 'rgb(244,133,24)',
        listener: refreshLevelCallback
      } ),
      new HBox( {spacing: SPACING, children: [
        new VBox( {spacing: SPACING, align: 'left', children: [
          new Text( timeString + ':', {font: FONT} ),
          new Text( scoreString + ':', {font: FONT} ),
          // add sound toggle button
          new SoundToggleButton( isSoundProperty, {baseColor: 'white'} )
        ]} ),
        new VBox( {spacing: SPACING, align: 'right', children: [
          timeText,
          scoreText,
          // add timer toggle button
          new TimerToggleButton( isTimerProperty, {baseColor: 'white'} )
        ]} )
      ]} )
    ]} ) );

    // set background size
    background.setRect( -BACKGROUND_X_MARGIN / 2, -BACKGROUND_Y_MARGIN / 2, this.bounds.width + BACKGROUND_X_MARGIN, this.bounds.height + BACKGROUND_Y_MARGIN, 5, 5 );

    // add observers
    levelProperty.link( function( level ) {
      levelText.setText( StringUtils.format( pattern_level_0levelNumber, level.toString() ) );
    } );

    scoreProperty.link( function( score ) {
      scoreText.setText( score.toString() );
    } );

    timeProperty.link( function( time ) {
      var sec, min;
      time = Math.round( time );

      // find seconds
      sec = (time % 60).toString();
      if ( sec.length < 2 ) {
        sec = '0' + sec;
      }

      // find minutes
      min = Math.floor( time / 60 ).toString();

      // set time
      timeText.setText( StringUtils.format( pattern_0minute_1second, min, sec ) );
    } );
  }

  return inherit( Node, ControlPanelNode );
} );