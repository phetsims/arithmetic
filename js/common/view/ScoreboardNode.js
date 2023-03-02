// Copyright 2014-2023, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import merge from '../../../../phet-core/js/merge.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import RefreshButton from '../../../../scenery-phet/js/buttons/RefreshButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Node, Text, VBox } from '../../../../scenery/js/imports.js';
import Panel from '../../../../sun/js/Panel.js';
import GameTimer from '../../../../vegas/js/GameTimer.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import GameState from '../model/GameState.js';

const labelScorePatternString = VegasStrings.label.scorePattern;
const labelTimeString = VegasStrings.label.time;
const patternLevel0LevelNumberString = ArithmeticStrings.pattern.level[ '0levelNumber' ];

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

class ScoreboardNode extends Node {

  /**
   * @param {Property} levelNumberProperty - property for level displaying label.
   * @param {Property} stateProperty - State of game property.
   * @param {Array.<LevelModel>} levelModels - Array of properties for score counter component.
   * @param {Property} timerEnabledProperty - Time enabling flag.
   * @param {Function} refreshLevelCallback - Callback listener for refresh level button.
   * @param {Object} [options] - optional parameters that control the appearance and behavior of the panel
   */
  constructor( levelNumberProperty, stateProperty, levelModels, timerEnabledProperty, refreshLevelCallback, options ) {

    options = merge( {
      title: ''
    }, options );
    const levelText = new Text( StringUtils.format( patternLevel0LevelNumberString, '' ), { font: FONT_BOLD } );
    const scoreText = new Text( StringUtils.format( labelScorePatternString, '0' ), { font: FONT } );
    const timeText = new Text( StringUtils.format( labelTimeString, GameTimer.formatTime( 0 ) ), { font: FONT } );

    const panelOptions = merge( {}, PANEL_OPTIONS, options );

    super();

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
    const updateScore = score => {
      scoreText.string = StringUtils.format( labelScorePatternString, score.toString() );
    };

    const updateTime = time => {
      timeText.string = StringUtils.format( labelTimeString, GameTimer.formatTime( time ) );
    };

    levelNumberProperty.lazyLink( ( levelNew, levelPrevious ) => {
      if ( levelNew !== null ) {
        levelText.string = StringUtils.format( patternLevel0LevelNumberString, ( levelNew + 1 ).toString() );
      }
      else {
        levelText.string = '';
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
    timerEnabledProperty.link( isTimerEnabled => {
      if ( isTimerEnabled ) {
        vBox.insertChild( 2, timeText ); // 2 - index of initial place for time
      }
      else {
        vBox.removeChild( timeText );
      }
    } );
  }
}

arithmetic.register( 'ScoreboardNode', ScoreboardNode );

export default ScoreboardNode;