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
  var FONT = new PhetFont( 18 );
  var SPACING = CONSTANTS.SPACING;

  /**
   * @param levelProperty {Property} property for level displaying label
   * @param scoreProperty {Property} property for score counter component
   * @param timeProperty {Property} property for elapsed time
   * @param refreshLevelCallback {Function} callback listener for refresh level button
   *
   * @constructor
   */
  function ControlPanelNode( levelProperty, scoreProperty, timeProperty, refreshLevelCallback ) {
    var background = new Rectangle( 0, 0, 0, 0, {fill: CONSTANTS.BACKGROUND.COLOR} );
    var levelText = new Text( '?', {font: FONT} );
    var scoreText = new Text( '?', {font: FONT} );
    var timeText = new Text( '?', {font: FONT} );
    Node.call( this );

    // add background
    this.addChild( background );

    // add control buttons
    this.addChild( new VBox( {spacing: SPACING, children: [
      // add level text
      levelText,
      // add refresh button
      new RefreshButton( {
        baseColor: CONSTANTS.REFRESH_BUTTON_COLOR,
        listener: refreshLevelCallback
      } ),
      new HBox( {spacing: SPACING, children: [
        new VBox( {spacing: SPACING, align: 'left', children: [
          new Text( timeString + ':', {font: FONT} ),
          new Text( scoreString + ':', {font: FONT} )
        ]} ),
        new VBox( {spacing: SPACING, align: 'right', children: [
          timeText,
          scoreText
        ]} )
      ]} )
    ]} ) );

    // add observers
    levelProperty.link( function( level ) {
      levelText.setText( StringUtils.format( pattern_level_0levelNumber, level.toString() ) );
    } );

    scoreProperty.link( function( score ) {
      scoreText.setText( score.toString() );
    } );

    timeProperty.link( function( time ) {
      timeText.setText( GameTimer.formatTime( time ) );
    } );

    // set background size
    background.setRect( -BACKGROUND_MARGIN.width / 2, -BACKGROUND_MARGIN.height / 2, this.bounds.width + BACKGROUND_MARGIN.width, this.bounds.height + BACKGROUND_MARGIN.height, 5, 5 );
  }

  return inherit( Node, ControlPanelNode );
} );
