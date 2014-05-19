// Copyright 2002-2014, University of Colorado Boulder

/**
 * Screen that allows the user to select the game level that they wish to play.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var Constants = require( 'ARITHMETIC/common/model/Constants' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LevelStartButton = require( 'VEGAS/LevelStartButton' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var CHOOSE_LEVEL_TITLE_FONT = new PhetFont( {size: 24} );
  var PERFECT_SCORE = Constants.PERFECT_SCORE;
  var STAR_NUMBER = Constants.STAR_NUMBER;
  var TAB_TITLE_FONT = new PhetFont( {size: 54} );

  // strings
  var chooseYourLevelString = require( 'string!ARITHMETIC/chooseYourLevel' );

  // images
  var phetGirlIcon1Image = require( 'image!ARITHMETIC/phet-girl-icon-1.png' );
  var phetGirlIcon2Image = require( 'image!ARITHMETIC/phet-girl-icon-2.png' );
  var phetGirlIcon3Image = require( 'image!ARITHMETIC/phet-girl-icon-3.png' );

  function StartGameLevelNode( scoreProperty, titleString, simBounds ) {
    Node.call( this );

    // add title
    var tabTitle = new Text( titleString, {
      font: TAB_TITLE_FONT,
      centerX: simBounds.width / 2,
      centerY: simBounds.height / 4
    } );
    this.addChild( tabTitle );

    // add choose level title
    var chooseLevelTitle = new Text( chooseYourLevelString, {
      font: CHOOSE_LEVEL_TITLE_FONT,
      centerX: simBounds.width / 2,
      centerY: tabTitle.bounds.maxY + 30
    } );
    this.addChild( chooseLevelTitle );

    // add select level buttons
    this.addChild( new HBox( {
      spacing: 10,
      children: [
        new LevelStartButton( new Image( phetGirlIcon1Image ), STAR_NUMBER, function() {}, scoreProperty, PERFECT_SCORE ),
        new LevelStartButton( new Image( phetGirlIcon2Image ), STAR_NUMBER, function() {}, scoreProperty, PERFECT_SCORE ),
        new LevelStartButton( new Image( phetGirlIcon3Image ), STAR_NUMBER, function() {}, scoreProperty, PERFECT_SCORE )
      ],
      centerX: simBounds.width / 2,
      top: chooseLevelTitle.bounds.maxY + 20
    } ) );
  }

  return inherit( Node, StartGameLevelNode );
} );
