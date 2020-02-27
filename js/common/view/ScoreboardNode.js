// Copyright 2014-2020, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import inherit from '../../../../phet-core/js/inherit.js';
import merge from '../../../../phet-core/js/merge.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import RefreshButton from '../../../../scenery-phet/js/buttons/RefreshButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import Panel from '../../../../sun/js/Panel.js';
import GameTimer from '../../../../vegas/js/GameTimer.js';
import vegasStrings from '../../../../vegas/js/vegas-strings.js';
import arithmeticStrings from '../../arithmetic-strings.js';
import arithmetic from '../../arithmetic.js';
import GameState from '../model/GameState.js';

const labelScorePatternString = vegasStrings.label.scorePattern;
const labelTimeString = vegasStrings.label.time;
const patternLevel0LevelNumberString = arithmeticStrings.pattern.level[ '0levelNumber' ];

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
 * @param {Object} [options] - optional parameters that control the appearance and behavior of the panel
 * @constructor
 */
function ScoreboardNode( levelNumberProperty, stateProperty, levelModels, timerEnabledProperty, refreshLevelCallback, options ) {

  options = merge( {
    title: ''
  }, options );
  const levelText = new Text( StringUtils.format( patternLevel0LevelNumberString, '' ), { font: FONT_BOLD } );
  const scoreText = new Text( StringUtils.format( labelScorePatternString, '0' ), { font: FONT } );
  const timeText = new Text( StringUtils.format( labelTimeString, GameTimer.formatTime( 0 ) ), { font: FONT } );

  const panelOptions = merge( {}, PANEL_OPTIONS, options );

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
    scoreText.text = StringUtils.format( labelScorePatternString, score.toString() );
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

inherit( Node, ScoreboardNode );
export default ScoreboardNode;