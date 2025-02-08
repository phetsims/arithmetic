// Copyright 2014-2025, University of Colorado Boulder

/**
 * Control panel node. Contains refresh button, sound and timer toggle buttons.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import DerivedStringProperty from '../../../../axon/js/DerivedStringProperty.js';
import DynamicProperty from '../../../../axon/js/DynamicProperty.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import Property from '../../../../axon/js/Property.js';
import merge from '../../../../phet-core/js/merge.js';
import StringUtils from '../../../../phetcommon/js/util/StringUtils.js';
import EraserButton from '../../../../scenery-phet/js/buttons/EraserButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import Panel from '../../../../sun/js/Panel.js';
import GameTimer from '../../../../vegas/js/GameTimer.js';
import VegasStrings from '../../../../vegas/js/VegasStrings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import GameState from '../model/GameState.js';

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
    const levelText = new Text(
      new PatternStringProperty(
        ArithmeticStrings.pattern.level[ '0levelNumberStringProperty' ],
        { level: levelNumberProperty },
        {
          formatNames: [ 'level' ],
          maps: {
            level: levelNumber => levelNumber !== null ? ( levelNumber + 1 ).toString() : ''
          }
        }
      ),
      BOLD_TEXT_OPTIONS
    );

    const currentLevelModelProperty = new Property( levelNumberProperty.value !== null ? levelModels[ levelNumberProperty.value ] : null );
    const currentScoreProperty = new DynamicProperty( currentLevelModelProperty, {
      derive: 'currentScoreProperty',
      defaultValue: 0
    } );

    const currentElapsedTimeProperty = new DynamicProperty( currentLevelModelProperty, {
      derive: levelModel => levelModel.gameTimer.elapsedTimeProperty,
      defaultValue: 0
    } );

    const scoreText = new Text(
      new PatternStringProperty(
        VegasStrings.label.scorePatternStringProperty,
        { score: currentScoreProperty },
        { formatNames: [ 'score' ] }
      ),
      TEXT_OPTIONS
    );

    const timeText = new Text(
      new DerivedStringProperty(
        [
          currentElapsedTimeProperty,
          VegasStrings.label.timeStringProperty,

          // used by GameTimer.formatTime
          VegasStrings.pattern[ '0hours' ][ '1minutes' ][ '2secondsStringProperty' ],
          VegasStrings.pattern[ '0minutes' ][ '1secondsStringProperty' ]
        ],
        ( currentElapsedTime, labelTime ) => {
          const formattedTime = GameTimer.formatTime( currentElapsedTime );
          return StringUtils.format( labelTime, formattedTime );
        }
      ),
      TEXT_OPTIONS
    );

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
        new EraserButton( {
          iconHeight: 24,
          xMargin: 14,
          yMargin: 7,
          listener: refreshLevelCallback
        } )
      ]
    } );
    super( vBox, panelOptions );

    levelNumberProperty.lazyLink( level => {

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