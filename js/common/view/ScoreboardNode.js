// Copyright 2014-2023, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import DynamicProperty from '../../../../axon/js/DynamicProperty.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import Property from '../../../../axon/js/Property.js';
import merge from '../../../../phet-core/js/merge.js';
import RefreshButton from '../../../../scenery-phet/js/buttons/RefreshButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Text, VBox } from '../../../../scenery/js/imports.js';
import Panel from '../../../../sun/js/Panel.js';
import GameTimer from '../../../../vegas/js/GameTimer.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import GameState from '../model/GameState.js';

const LABEL_SCORE_STRING_PROPERTY = VegasStrings.label.scorePatternStringProperty;
const LABEL_TIME_STRING_PROPERTY = VegasStrings.label.timeStringProperty;
const PATTERN_LEVEL_0_LEVEL_STRING_PROPERTY = ArithmeticStrings.pattern.level[ '0levelNumberStringProperty' ];
console.log( PATTERN_LEVEL_0_LEVEL_STRING_PROPERTY.value );

// constants
const PANEL_OPTIONS = {
  fill: '#dddddd',
  lineWidth: 0.5,
  margin: 15,
  cornerRadius: 5,
  align: 'center'
};
const MAX_TEXT_WIDTH = 120;
const SPACING = 16;
const BOLD_TEXT_OPTIONS = {
  font: new PhetFont( { size: 18, weight: 'bold' } ),
  maxWidth: MAX_TEXT_WIDTH
};
const TEXT_OPTIONS = {
  font: new PhetFont( { size: 18 } ),
  maxWidth: MAX_TEXT_WIDTH
};

class ScoreboardNode extends Panel {

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
    const levelText = new Text( new PatternStringProperty( PATTERN_LEVEL_0_LEVEL_STRING_PROPERTY, {
      level: levelNumberProperty
    }, {
      formatNames: [ 'level' ],
      maps: {
        level: levelNumber => levelNumber !== null ? ( levelNumber + 1 ).toString() : ''
      }
    } ), BOLD_TEXT_OPTIONS );

    const currentLevelModelProperty = new Property( levelNumberProperty.value !== null ? levelModels[ levelNumberProperty.value ] : null );
    const currentScoreProperty = new DynamicProperty( currentLevelModelProperty, {
      derive: 'currentScoreProperty',
      defaultValue: 0
    } );

    const currentElapsedTimeProperty = new DynamicProperty( currentLevelModelProperty, {
      derive: levelModel => levelModel.gameTimer.elapsedTimeProperty,
      defaultValue: 0
    } );

    const scoreText = new Text( new PatternStringProperty( LABEL_SCORE_STRING_PROPERTY, {
      score: currentScoreProperty
    }, {
      formatNames: [ 'score' ]
    } ), TEXT_OPTIONS );

    const timeText = new Text( new PatternStringProperty( LABEL_TIME_STRING_PROPERTY, {
        time: currentElapsedTimeProperty
      },
      {
        formatNames: [ 'time' ],
        maps: {
          time: time => GameTimer.formatTime( time )
        }
      } ), TEXT_OPTIONS );

    const panelOptions = merge( {}, PANEL_OPTIONS, options );

    // add control panel components
    const vBox = new VBox( {
      spacing: SPACING,
      children: [
        new Text( options.title, BOLD_TEXT_OPTIONS ),
        levelText,
        scoreText,
        timeText,
        // add refresh button
        new RefreshButton( {
          iconHeight: 24,
          xMargin: 14,
          yMargin: 7,
          listener: refreshLevelCallback
        } )
      ]
    } );
    super( vBox, panelOptions );

    levelNumberProperty.lazyLink( level => {

      // TODO: Check if this is causing memory leaks, see: https://github.com/phetsims/arithmetic/issues/199
      if ( stateProperty.value === GameState.SELECTING_LEVEL && levelModels[ level ] ) {
        currentLevelModelProperty.set( levelModels[ level ] );
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