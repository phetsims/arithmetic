// Copyright 2014-2018, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const GameState = require( 'ARITHMETIC/common/model/GameState' );
  const GameTimer = require( 'VEGAS/GameTimer' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Node = require( 'SCENERY/nodes/Node' );
  const Panel = require( 'SUN/Panel' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const RefreshButton = require( 'SCENERY_PHET/buttons/RefreshButton' );
  const StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  const Text = require( 'SCENERY/nodes/Text' );
  const VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  const labelScoreString = require( 'string!VEGAS/label.score' );
  const labelTimeString = require( 'string!VEGAS/label.time' );
  const patternLevel0LevelNumberString = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );

  // constants
  const FONT = new PhetFont( { size: 18 } );
  const FONT_BOLD = new PhetFont( { size: 18, weight: 'bold' } );
  const PANEL_OPTIONS = {
    fill: '#dddddd',
    lineWidth: 0.5,
    xMargin: 23,
    yMargin: 23,
    cornerRadius: 5,
    align: 'center'
  };
  const SPACING = 16;

  /**
   * @param {Property} levelNumberProperty - property for level displaying label.
   * @param {Property} stateProperty - State of game property.
   * @param {Array.<LevelModel>} levelModels - Array of properties for score counter component.
   * @param {Property} timerEnabledProperty - Time enabling flag.
   * @param {Function} refreshLevelCallback - Callback listener for refresh level button.
   * @param {Object} options - optional parameters that control the appearance and behavior of the panel
   * @constructor
   */
  function ScoreboardNode( levelNumberProperty, stateProperty, levelModels, timerEnabledProperty, refreshLevelCallback, options ) {

    options = _.extend( {
      title: ''
    }, options );
    const levelText = new Text( StringUtils.format( patternLevel0LevelNumberString, '' ), { font: FONT_BOLD } );
    const scoreText = new Text( StringUtils.format( labelScoreString, '0' ), { font: FONT } );
    const timeText = new Text( StringUtils.format( labelTimeString, GameTimer.formatTime( 0 ) ), { font: FONT } );

    const panelOptions = _.extend( {}, PANEL_OPTIONS, options );

    Node.call( this );

    // add control panel components
    const vBox = new VBox( {
      spacing: SPACING,
      children: [
        new Text( options.title, { font: FONT_BOLD } ),
        levelText,
        scoreText,
        timeText,
        // add refresh button
        new RefreshButton( {
          iconScale: 0.6,
          xMargin: 14,
          yMargin: 7,
          listener: refreshLevelCallback
        } )
      ]
    } );
    this.addChild( new Panel( vBox, panelOptions ) );

    // add observers
    const updateScore = function( score ) {
      scoreText.text = StringUtils.format( labelScoreString, score.toString() );
    };

    const updateTime = function( time ) {
      timeText.text = StringUtils.format( labelTimeString, GameTimer.formatTime( time ) );
    };

    levelNumberProperty.lazyLink( function( levelNew, levelPrevious ) {
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

  arithmetic.register( 'ScoreboardNode', ScoreboardNode );

  return inherit( Node, ScoreboardNode );
} );
