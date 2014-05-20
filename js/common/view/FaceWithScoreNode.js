// Copyright 2002-2014, University of Colorado Boulder

/**
 * Node that represents a smiling face with the additional points gained for
 * getting the answer correct shown immediately below it.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var FaceNode = require( 'SCENERY_PHET/FaceNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Text = require( 'SCENERY/nodes/Text' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var FONT = new PhetFont( 28 );
  var FACE_DIAMETER = 100;

  /**
   * @param scoreGameProperty
   * @constructor
   */
  function FaceWithScoreNode( scoreGameProperty ) {
    VBox.call( this );

    // add face node
    var faceNode = new FaceNode( FACE_DIAMETER );
    this.addChild( faceNode );

    // add score text
    var scoreGameText = new Text( '', {font: FONT} );
    this.addChild( scoreGameText );

    this.updateLayout();

    // add observers
    scoreGameProperty.link( function( scoreGame ) {
      if ( scoreGame ) {
        // set score text with plus
        scoreGameText.setText( '+' + scoreGame.toString() );
        // set smile face
        faceNode.smile();
      }
      else {
        // set score text without plus
        scoreGameText.setText( scoreGame.toString() );
        // set frown face
        faceNode.frown();
      }
    } );
  }

  return inherit( VBox, FaceWithScoreNode );
} );