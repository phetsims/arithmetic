// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var GameState = require( 'ARITHMETIC/common/GameState' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSelectionButton = require( 'VEGAS/LevelSelectionButton' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var CHOOSE_LEVEL_TITLE_FONT = new PhetFont( {size: 24} );
  var TAB_TITLE_FONT = new PhetFont( {size: 54} );

  // strings
  var chooseYourLevelString = require( 'string!ARITHMETIC/chooseYourLevel' );

  /**
   * @param {Array} levelModels - An array of descriptions for each level, where one button is created for each level.
   * @param {Property} timerEnabledProperty - Timer enable property, needed to control visibility of best time label.
   * @param {String} titleString - Title string for given screen.
   * @param {Function} callback - Callback function call after pressing button.
   * @param {Object} [options] - Title string for given screen.
   * @constructor
   */
  function LevelSelectionNode( levelModels, timerEnabledProperty, titleString, callback, options ) {
    var self = this;
    Node.call( this );

    // add title
    var tabTitle = new Text( titleString, { font: TAB_TITLE_FONT } );
    this.addChild( tabTitle );

    // add choose level title
    var chooseLevelTitle = new Text( chooseYourLevelString, { font: CHOOSE_LEVEL_TITLE_FONT } );
    this.addChild( chooseLevelTitle );

    // add select level buttons

    var levelSelectButtons = levelModels.map( function( level, levelIndex ) {
      return new LevelSelectionButton(
        new Image( level.icon ),
        ArithmeticConstants.STAR_NUMBER,
        function() {
          callback( levelIndex );
        },
        levelModels[levelIndex].property( 'displayScore' ),
        level.perfectScore,
        {
          buttonWidth: 135,
          buttonHeight: 135,
          baseColor: '#D8F58A',
          bestTimeProperty: levelModels[levelIndex].property( 'bestTime' ),
          bestTimeVisibleProperty: timerEnabledProperty
        }
      );
    } );
    var selectLevelButtonsHBox = new HBox( { spacing: 50, children: levelSelectButtons } );
    selectLevelButtonsHBox.updateLayout();
    selectLevelButtonsHBox.top = chooseLevelTitle.bounds.maxY + 20;
    this.addChild( selectLevelButtonsHBox );

    // layout
    tabTitle.centerX = selectLevelButtonsHBox.width / 2;
    chooseLevelTitle.centerX = selectLevelButtonsHBox.width / 2;
    chooseLevelTitle.top = tabTitle.bottom + 20; // Spacing empirically determined
    selectLevelButtonsHBox.top = chooseLevelTitle.bottom + 20;  // Spacing empirically determined

    // pass options through to superclass
    this.mutate( options );
  }

  return inherit( Node, LevelSelectionNode );
} );
