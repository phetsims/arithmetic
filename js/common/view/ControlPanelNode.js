// Copyright 2014-2015, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var Dimension2 = require( 'DOT/Dimension2' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var GameTimer = require( 'VEGAS/GameTimer' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RefreshButton = require( 'SCENERY_PHET/buttons/RefreshButton' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var patternLevel0LevelNumberString = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );
  var labelScoreString = require( 'string!VEGAS/label.score' );
  var labelTimeString = require( 'string!VEGAS/label.time' );

  // constants
  var FONT = new PhetFont( { size: 18 } );
  var FONT_BOLD = new PhetFont( { size: 18, weight: 'bold' } );
  var PANEL_OPTIONS = {
    fill: '#dddddd',
    lineWidth: 0.5,
    xMargin: 23,
    yMargin: 23,
    cornerRadius: 5,
    align: 'center'
  };
  var REFRESH_BUTTON_BASE_COLOR = '#F2E916';
  var REFRESH_BUTTON_MARGIN = new Dimension2( 20, 10 );
  var SPACING = 18;

  /**
   * @param {Property} levelProperty - property for level displaying label.
   * @param {Property} stateProperty - State of game property.
   * @param {Array.<LevelModel>} levelModels - Array of properties for score counter component.
   * @param {Property} timerEnabledProperty - Time enabling flag.
   * @param {Function} refreshLevelCallback - Callback listener for refresh level button.
   * @param {Object} options - optional parameters that control the appearance and behavior of the panel
   * @constructor
   */
  function ControlPanelNode( levelProperty, stateProperty, levelModels, timerEnabledProperty, refreshLevelCallback, options ) {
    var levelText = new Text( StringUtils.format( patternLevel0LevelNumberString, '' ), FONT_BOLD );
    var scoreText = new Text( StringUtils.format( labelScoreString, '0' ), FONT );
    var timeText = new Text( StringUtils.format( labelTimeString, GameTimer.formatTime( 0 ) ), FONT );

    var panelOptions = _.extend( {}, PANEL_OPTIONS, options );

    Node.call( this );

    // add control panel components
    var vBox = new VBox( {
      spacing: SPACING,
      children: [
        new Text( 'Multiply', { font: FONT_BOLD } ),
        levelText,
        scoreText,
        timeText,
        // add refresh button
        new RefreshButton( {
          baseColor: REFRESH_BUTTON_BASE_COLOR,
          xMargin: REFRESH_BUTTON_MARGIN.width,
          yMargin: REFRESH_BUTTON_MARGIN.height,
          listener: refreshLevelCallback,
          scale: 0.75
        } )
      ]
    } );
    this.addChild( new Panel( vBox, panelOptions ) );

    // add observers
    var updateScore = function( score ) {
      scoreText.text = StringUtils.format( labelScoreString, score.toString() );
    };

    var updateTime = function( time ) {
      timeText.text = StringUtils.format( labelTimeString, GameTimer.formatTime( time ) );
    };

    levelProperty.lazyLink( function( levelNew, levelPrevious ) {
      if ( levelNew !== null ) {
        levelText.text = StringUtils.format( patternLevel0LevelNumberString, ( levelNew + 1 ).toString() );
      }
      else {
        levelText.text = '';
      }

      // unlink observers for previous level
      if ( levelModels[ levelPrevious ] ) {
        levelModels[ levelPrevious ].currentScoreProperty.unlink( updateScore );
        levelModels[ levelPrevious ].gameTimer.elapsedTimeProperty.unlink( updateTime );
      }

      // link observers for new level
      if ( stateProperty.value === GameState.SELECTING_LEVEL && levelModels[ levelNew ] ) {
        levelModels[ levelNew ].currentScoreProperty.link( updateScore );
        levelModels[ levelNew ].gameTimer.elapsedTimeProperty.link( updateTime );
      }
    } );

    // add/remove time readout
    timerEnabledProperty.link( function( isTimerEnabled ) {
      if ( isTimerEnabled ) {
        vBox.insertChild( 2, timeText ); // 2 - index of initial place for time
      }
      else {
        vBox.removeChild( timeText );
      }
    } );
  }

  return inherit( Node, ControlPanelNode );
} );
