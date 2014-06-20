// Copyright 2002-2014, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var GameTimer = require( 'VEGAS/GameTimer' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SUN/HStrut' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var RefreshButton = require( 'SCENERY_PHET/RefreshButton' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var pattern_level_0levelNumber = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );
  var scoreString = require( 'string!ARITHMETIC/score' );
  var timeString = require( 'string!ARITHMETIC/time' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).CONTROL_PANEL;
  var BACKGROUND_MARGIN = CONSTANTS.BACKGROUND.MARGIN;
  var FONT = new PhetFont( { size: 18, family: 'Comic Sans MS' } );
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
    var HSpacing = CONSTANTS.HSPASING;
    var levelText = new Text( StringUtils.format( pattern_level_0levelNumber, levelProperty.value.toString() ), {font: FONT} );
    var scoreTextValue = new Text( scoreProperty.value.toString(), {font: FONT} );
    var scoreTextString = new Text( scoreString + ':', {font: FONT} );
    var timeBox;
    var timeTextValue = new Text( GameTimer.formatTime( timeProperty.value ), {font: FONT} );
    var timeTextString = new Text( timeString + ':', {font: FONT} );
    var maxTextWidth = Math.max( timeTextString.getWidth(), scoreTextString.getWidth() );
    var maxValueWidth = Math.max( scoreTextValue.getWidth(), timeTextValue.getWidth() );
    var vBox;

    Node.call( this );

    // add background
    this.addChild( background );

    // add control buttons
    this.addChild( vBox = new VBox( {spacing: SPACING, children: [
      // add level text
      levelText,
      // add refresh button
      new RefreshButton( {
        baseColor: CONSTANTS.REFRESH_BUTTON.BASE_COLOR,
        stroke: CONSTANTS.REFRESH_BUTTON.STROKE,
        xMargin: CONSTANTS.REFRESH_BUTTON.MARGIN.width,
        yMargin: CONSTANTS.REFRESH_BUTTON.MARGIN.height,
        listener: refreshLevelCallback
      } ).mutate( {scale: 0.75} ),
      timeBox = new HBox( {children: [
        timeTextString,
        new HStrut( maxTextWidth - timeTextString.getWidth() + HSpacing + maxValueWidth - timeTextValue.getWidth() ),
        timeTextValue
      ]} ),
      new HBox( {children: [
        scoreTextString,
        new HStrut( maxTextWidth - scoreTextString.getWidth() + HSpacing + maxValueWidth - scoreTextValue.getWidth() ),
        scoreTextValue
      ]} )
    ]} ) );

    // add observers
    levelProperty.lazyLink( function( level ) {
      levelText.setText( StringUtils.format( pattern_level_0levelNumber, level.toString() ) );
    } );

    scoreProperty.lazyLink( function( score ) {
      scoreTextValue.setText( score.toString() );
    } );

    timeProperty.lazyLink( function( time ) {
      timeTextValue.setText( GameTimer.formatTime( time ) );
    } );

    // add/remove timeBox and update background size
    timerEnabledProperty.link( function( isTimerEnabled ) {
      if ( isTimerEnabled ) {
        vBox.insertChild( 2, timeBox ); // 2 - index of initial place for timeBox
      }
      else {
        vBox.removeChild( timeBox );
      }

      updateBackgroundSize( background, vBox );
    } );
  }

  // set background size
  var updateBackgroundSize = function( backgroundNode, controlPanelNode ) {
    backgroundNode.setRect( -BACKGROUND_MARGIN.width / 2, -BACKGROUND_MARGIN.height / 2, controlPanelNode.bounds.width + BACKGROUND_MARGIN.width, controlPanelNode.bounds.height + BACKGROUND_MARGIN.height, 5, 5 );
  };

  return inherit( Node, ControlPanelNode );
} );
