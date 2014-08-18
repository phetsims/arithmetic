// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelStartButton = require( 'VEGAS/LevelStartButton' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var CHOOSE_LEVEL_TITLE_FONT = new PhetFont( {size: 24} );
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );
  var STAR_NUMBER = CONSTANTS.STAR_NUMBER;
  var TAB_TITLE_FONT = new PhetFont( {size: 54} );

  // strings
  var chooseYourLevelString = require( 'string!ARITHMETIC/chooseYourLevel' );

  /**
   * @param levelModels {Array} array of descriptions for each level.
   * For each level will be created LevelStartButton node
   * @param levelProperty {Property} level difficulty property
   * @param stateProperty {Property} current state property.
   * Need to control visibility of this component
   * @param timerEnabledProperty {Property} timer enable property.
   * Need to control visibility of best time label
   * @param titleString {String} title string for given screen
   * @param options {Object} title string for given screen
   *
   * @constructor
   */
  function StartGameLevelNode( levelModels, levelProperty, stateProperty, timerEnabledProperty, titleString, options ) {
    var self = this;
    Node.call( this );

    // add title
    var tabTitle = new Text( titleString, { font: TAB_TITLE_FONT } );
    this.addChild( tabTitle );

    // add choose level title
    var chooseLevelTitle = new Text( chooseYourLevelString, { font: CHOOSE_LEVEL_TITLE_FONT } );
    this.addChild( chooseLevelTitle );

    // add select level buttons
    var selectLevelButtons = new HBox( {spacing: 50} );
    levelModels.forEach( function( level, levelIndex ) {
      selectLevelButtons.addChild( new LevelStartButton(
        new Image( level.icon ),
        STAR_NUMBER,
        function() {
          levelProperty.value = levelIndex + 1;
        },
        levelModels[levelIndex].property( 'displayScore' ),
        level.perfectScore,
        {
          buttonWidth: 135,
          buttonHeight: 135,
          backgroundColor: 'white',
          highlightedBackgroundColor: 'white',
          bestTimeProperty: levelModels[levelIndex].property( 'bestTime' ),
          bestTimeVisibleProperty: timerEnabledProperty
        }
      ) );
    } );
    selectLevelButtons.updateLayout();
    selectLevelButtons.top = chooseLevelTitle.bounds.maxY + 20;
    this.addChild( selectLevelButtons );

    // layout
    tabTitle.centerX = selectLevelButtons.width / 2;
    chooseLevelTitle.centerX = selectLevelButtons.width / 2;
    chooseLevelTitle.top = tabTitle.bottom + 20; // Spacing empirically determined
    selectLevelButtons.top = chooseLevelTitle.bottom + 20;  // Spacing empirically determined

    stateProperty.link( function( state ) {
      self.visible = ( state === GAME_STATE.LEVEL_SELECT );
    } );

    // pass options through to superclass
    this.mutate( options );
  }

  return inherit( Node, StartGameLevelNode );
} );
