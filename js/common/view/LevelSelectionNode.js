// Copyright 2014-2019, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var arithmetic = require( 'ARITHMETIC/arithmetic' );
  var ArithmeticConstants = require( 'ARITHMETIC/common/ArithmeticConstants' );
  var ArithmeticGlobals = require( 'ARITHMETIC/common/ArithmeticGlobals' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelSelectionButton = require( 'VEGAS/LevelSelectionButton' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var Text = require( 'SCENERY/nodes/Text' );
  var TimerToggleButton = require( 'SCENERY_PHET/buttons/TimerToggleButton' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var CHOOSE_LEVEL_TITLE_FONT = new PhetFont( { size: 24 } );
  var TAB_TITLE_FONT = new PhetFont( { size: 54 } );
  var BUTTON_LENGTH = 150;

  // icon sets, used to place on the buttons
  var ICON_SETS = {
    multiply: [
      require( 'mipmap!ARITHMETIC/multiply_level_1_icon.png' ),
      require( 'mipmap!ARITHMETIC/multiply_level_2_icon.png' ),
      require( 'mipmap!ARITHMETIC/multiply_level_3_icon.png' )
    ],
    factor: [
      require( 'mipmap!ARITHMETIC/factor_level_1_icon.png' ),
      require( 'mipmap!ARITHMETIC/factor_level_2_icon.png' ),
      require( 'mipmap!ARITHMETIC/factor_level_3_icon.png' )
    ],
    divide: [
      require( 'mipmap!ARITHMETIC/divide_level_1_icon.png' ),
      require( 'mipmap!ARITHMETIC/divide_level_2_icon.png' ),
      require( 'mipmap!ARITHMETIC/divide_level_3_icon.png' )
    ]
  };

  // strings
  var chooseYourLevelString = require( 'string!ARITHMETIC/chooseYourLevel' );

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
    options = _.extend( {
      buttonBaseColor: 'white',
      iconSet: 'multiply' // valid values are 'multiply', 'factor', and 'divide'
    }, options );

    // add title
    var tabTitle = new Text( titleString, {
      font: TAB_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: layoutBounds.height * 0.1
    } );
    this.addChild( tabTitle );

    // add choose level title
    var chooseLevelTitle = new Text( chooseYourLevelString, {
      font: CHOOSE_LEVEL_TITLE_FONT,
      centerX: layoutBounds.centerX,
      top: tabTitle.bottom + 15
    } );
    this.addChild( chooseLevelTitle );

    // add select level buttons
    assert && assert( model.levelModels.length === ICON_SETS[ options.iconSet ].length, 'Number of icons doesn\'t match number of levels' );
    var levelSelectButtons = model.levelModels.map( function( level, levelIndex ) {
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
    var selectLevelButtonsHBox = new HBox( { spacing: 50, children: levelSelectButtons } );
    selectLevelButtonsHBox.top = chooseLevelTitle.bottom + 15;
    selectLevelButtonsHBox.centerX = chooseLevelTitle.centerX;
    this.addChild( selectLevelButtonsHBox );

    // add timer and sound buttons
    var soundAndTimerButtons = new VBox( {
      spacing: 5,
      children: [
        new TimerToggleButton( ArithmeticGlobals.timerEnabledProperty )
      ],
      right: layoutBounds.maxX * 0.08,
      bottom: layoutBounds.maxY * 0.95
    } );
    this.addChild( soundAndTimerButtons );

    // add reset all button
    var resetAllButton = new ResetAllButton( {
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
