// Copyright 2014-2019, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const arithmetic = require( 'ARITHMETIC/arithmetic' );
  const ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  const ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  const HBox = require( 'SCENERY/nodes/HBox' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LevelSelectionButton = require( 'VEGAS/LevelSelectionButton' );
  const merge = require( 'PHET_CORE/merge' );
  const Node = require( 'SCENERY/nodes/Node' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const Text = require( 'SCENERY/nodes/Text' );
  const TimerToggleButton = require( 'SCENERY_PHET/buttons/TimerToggleButton' );
  const VBox = require( 'SCENERY/nodes/VBox' );

  // images
  const multiplyLevel1Icon = require( 'mipmap!ARITHMETIC/multiply_level_1_icon.png' );
  const multiplyLevel2Icon = require( 'mipmap!ARITHMETIC/multiply_level_2_icon.png' );
  const multiplyLevel3Icon = require( 'mipmap!ARITHMETIC/multiply_level_3_icon.png' );
  const factorLevel1Icon = require( 'mipmap!ARITHMETIC/factor_level_1_icon.png' );
  const factorLevel2Icon = require( 'mipmap!ARITHMETIC/factor_level_2_icon.png' );
  const factorLevel3Icon = require( 'mipmap!ARITHMETIC/factor_level_3_icon.png' );
  const divideLevel1Icon = require( 'mipmap!ARITHMETIC/divide_level_1_icon.png' );
  const divideLevel2Icon = require( 'mipmap!ARITHMETIC/divide_level_2_icon.png' );
  const divideLevel3Icon = require( 'mipmap!ARITHMETIC/divide_level_3_icon.png' );

  // constants
  const CHOOSE_LEVEL_TITLE_FONT = new PhetFont( { size: 24 } );
  const TAB_TITLE_FONT = new PhetFont( { size: 54 } );
  const BUTTON_LENGTH = 150;

  // icon sets, used to place on the buttons
  const ICON_SETS = {
    multiply: [
      multiplyLevel1Icon,
      multiplyLevel2Icon,
      multiplyLevel3Icon
    ],
    factor: [
      factorLevel1Icon,
      factorLevel2Icon,
      factorLevel3Icon
    ],
    divide: [
      divideLevel1Icon,
      divideLevel2Icon,
      divideLevel3Icon
    ]
  };

  // strings
  const chooseYourLevelString = require( 'string!ARITHMETIC/chooseYourLevel' );

  /**
   * @param {ArithmeticModel} model - Main model for screen.
   * @param {string} titleString - Title string for given screen.
   * @param {Function} callback - Callback function call after pressing button.
   * @param {Bounds2} layoutBounds - Bounds of screen on which this will appear, used for layout
   * @param {Object} [options]
   * @constructor
   */
  function LevelSelectionNode( model, titleString, callback, layoutBounds, options ) {
    Node.call( this );

    // Default options
    options = merge( {
      buttonBaseColor: 'white',
      iconSet: 'multiply' // valid values are 'multiply', 'factor', and 'divide'
    }, options );

    // add title
    const tabTitle = new Text( titleString, {
      font: TAB_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: layoutBounds.height * 0.1
    } );
    this.addChild( tabTitle );

    // add choose level title
    const chooseLevelTitle = new Text( chooseYourLevelString, {
      font: CHOOSE_LEVEL_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: tabTitle.bottom + 15
    } );
    this.addChild( chooseLevelTitle );

    // add select level buttons
    assert && assert( model.levelModels.length === ICON_SETS[ options.iconSet ].length, 'Number of icons doesn\'t match number of levels' );
    const levelSelectButtons = model.levelModels.map( function( level, levelIndex ) {
      return new LevelSelectionButton(
        new Image( ICON_SETS[ options.iconSet ][ levelIndex ] ),
        model.levelModels[ levelIndex ].displayScoreProperty,
        {
          buttonWidth: BUTTON_LENGTH,
          buttonHeight: BUTTON_LENGTH,
          baseColor: options.buttonBaseColor,
          bestTimeProperty: model.levelModels[ levelIndex ].bestTimeProperty,
          bestTimeVisibleProperty: ArithmeticGlobals.timerEnabledProperty,
          listener: function() {
            callback( levelIndex );
          },
          scoreDisplayOptions: {
            numberOfStars: ArithmeticConstants.NUM_STARS,
            perfectScore: level.perfectScore
          }
        }
      );
    } );
    const selectLevelButtonsHBox = new HBox( { spacing: 50, children: levelSelectButtons } );
    selectLevelButtonsHBox.top = chooseLevelTitle.bottom + 15;
    selectLevelButtonsHBox.centerX = chooseLevelTitle.centerX;
    this.addChild( selectLevelButtonsHBox );

    // add timer and sound buttons
    const soundAndTimerButtons = new VBox( {
      spacing: 5,
      children: [
        new TimerToggleButton( ArithmeticGlobals.timerEnabledProperty )
      ],
      right: layoutBounds.maxX * 0.08,
      bottom: layoutBounds.maxY * 0.95
    } );
    this.addChild( soundAndTimerButtons );

    // add reset all button
    const resetAllButton = new ResetAllButton( {
      listener: function() {model.reset(); },
      right: layoutBounds.maxX * 0.98,
      bottom: layoutBounds.maxY * 0.95
    } );
    this.addChild( resetAllButton );

    // pass options through to superclass
    this.mutate( options );
  }

  arithmetic.register( 'LevelSelectionNode', LevelSelectionNode );

  return inherit( Node, LevelSelectionNode );
} );
