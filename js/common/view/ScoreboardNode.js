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
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var FontAwesomeNode = require( 'SUN/FontAwesomeNode' );
  var GameState = require( 'ARITHMETIC/common/model/GameState' );
  var GameTimer = require( 'VEGAS/GameTimer' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Panel = require( 'SUN/Panel' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var RectangularPushButton = require( 'SUN/buttons/RectangularPushButton' );
  var StringUtils = require( 'PHETCOMMON/util/StringUtils' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var PhetColorScheme = require( 'SCENERY_PHET/PhetColorScheme' );

  // strings
  var labelScoreString = require( 'string!VEGAS/label.score' );
  var labelTimeString = require( 'string!VEGAS/label.time' );
  var patternLevel0LevelNumberString = require( 'string!ARITHMETIC/pattern.level.0levelNumber' );

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
  var SPACING = 16;

  /**
   * @param {Property} levelProperty - property for level displaying label.
   * @param {Property} stateProperty - State of game property.
   * @param {Array.<LevelModel>} levelModels - Array of properties for score counter component.
   * @param {Property} timerEnabledProperty - Time enabling flag.
   * @param {Function} refreshLevelCallback - Callback listener for refresh level button.
   * @param {Object} options - optional parameters that control the appearance and behavior of the panel
   * @constructor
   */
  function ScoreboardNode( levelProperty, stateProperty, levelModels, timerEnabledProperty, refreshLevelCallback, options ) {

    options = _.extend( {
      title: ''
    }, options );
    var levelText = new Text( StringUtils.format( patternLevel0LevelNumberString, '' ), { font: FONT_BOLD } );
    var scoreText = new Text( StringUtils.format( labelScoreString, '0' ), { font: FONT } );
    var timeText = new Text( StringUtils.format( labelTimeString, GameTimer.formatTime( 0 ) ), { font: FONT } );

    var panelOptions = _.extend( {}, PANEL_OPTIONS, options );

    Node.call( this );

    // add control panel components
    var vBox = new VBox( {
      spacing: SPACING,
      children: [
        new Text( options.title, { font: FONT_BOLD } ),
        levelText,
        scoreText,
        timeText,
        // add refresh button
        new RectangularPushButton( {
          content: new FontAwesomeNode( 'refresh', { scale: 0.6 } ),
          baseColor: PhetColorScheme.PHET_YELLOW,
          xMargin: 14,
          yMargin: 7,
          listener: refreshLevelCallback
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

  arithmetic.register( 'ScoreboardNode', ScoreboardNode );

  return inherit( Node, ScoreboardNode );
} );
