// Copyright 2002-2014, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var GameTimer = require( 'VEGAS/GameTimer' );
  var HStrut = require( 'SUN/HStrut' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RefreshButton = require( 'SCENERY_PHET/RefreshButton' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var pattern_level_0levelNumber = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );
  var scoreString = require( 'string!VEGAS/label.score' );
  var timeString = require( 'string!VEGAS/label.time' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).CONTROL_PANEL;
  var BACKGROUND_MARGIN = CONSTANTS.BACKGROUND.MARGIN;
  var FONT = new PhetFont( { size: 18, family: 'Comic Sans MS' } );
  var FONT_BOLD = new PhetFont( { size: 18, family: 'Comic Sans MS', weight: 'bold' } );
  var SPACING = CONSTANTS.SPACING;

  /**
   * @param levelProperty {Property} property for level displaying label
   * @param scoreProperty {Property} property for score counter component
   * @param timerEnabledProperty {Property} time enabling flag
   * @param timeProperty {Property} property for elapsed time
   * @param refreshLevelCallback {Function} callback listener for refresh level button
   *
   * @constructor
   */
  function ControlPanelNode( levelProperty, scoreProperty, timerEnabledProperty, timeProperty, refreshLevelCallback ) {
    var background = new Rectangle( 0, 0, 0, 0, {fill: CONSTANTS.BACKGROUND.COLOR} );
    var levelText = new Text( StringUtils.format( pattern_level_0levelNumber, levelProperty.value.toString() ), FONT_BOLD );
    var scoreText = new Text( StringUtils.format( scoreString, scoreProperty.value.toString() ), FONT );
    var timeText = new Text( StringUtils.format( timeString, GameTimer.formatTime( timeProperty.value ) ), FONT );
    var minWidth = Math.max( levelText.getWidth(), scoreText.getWidth(), timeText.getWidth() );
    var vBox;

    minWidth += minWidth / 10;

    Node.call( this );

    // add background
    this.addChild( background );

    // add control buttons
    this.addChild( vBox = new VBox( {
      spacing: SPACING, children: [
        levelText,
        scoreText,
        timeText,
        // add refresh button
        new RefreshButton( {
          baseColor: CONSTANTS.REFRESH_BUTTON.BASE_COLOR,
          xMargin: CONSTANTS.REFRESH_BUTTON.MARGIN.width,
          yMargin: CONSTANTS.REFRESH_BUTTON.MARGIN.height,
          listener: refreshLevelCallback
        } ).mutate( {scale: 0.75} ),
        new HStrut( minWidth )
      ]} ) );

    // add observers
    levelProperty.lazyLink( function( level ) {
      levelText.setText( StringUtils.format( pattern_level_0levelNumber, level.toString() ) );
    } );

    scoreProperty.lazyLink( function( score ) {
      scoreText.setText( StringUtils.format( scoreString, score.toString() ) );
      updateBackgroundSize( background, vBox );
    } );

    timeProperty.lazyLink( function( time ) {
      timeText.setText( StringUtils.format( timeString, GameTimer.formatTime( time ) ) );
      updateBackgroundSize( background, vBox );
    } );

    // add/remove timeBox and update background size
    timerEnabledProperty.link( function( isTimerEnabled ) {
      if ( isTimerEnabled ) {
        vBox.insertChild( 2, timeText ); // 2 - index of initial place for timeBox
      }
      else {
        vBox.removeChild( timeText );
      }

      updateBackgroundSize( background, vBox );
    } );
  }

  // set background size
  var updateBackgroundSize = function( backgroundNode, controlPanelNode ) {
    backgroundNode.setRect( -BACKGROUND_MARGIN.width / 2, -BACKGROUND_MARGIN.height / 2, controlPanelNode.bounds.width + BACKGROUND_MARGIN.width, controlPanelNode.bounds.height + BACKGROUND_MARGIN.height - SPACING, 5, 5 );
  };

  return inherit( Node, ControlPanelNode );
} );
