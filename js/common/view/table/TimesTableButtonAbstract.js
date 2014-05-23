// Copyright 2002-2014, University of Colorado Boulder

/**
 * Times table abstract button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var FONT = new PhetFont( 24 );

  function TimesTableButtonAbstract( backgroundOptions ) {
    Node.call( this );

    // add background
    this._background = new Rectangle( 0, 0, backgroundOptions.width, backgroundOptions.height, _.extend( {
      fill: 'white',
      stroke: 'black',
      strokePosition: 'inside',
      lineWidth: 1.5
    }, backgroundOptions ) );
    this.addChild( this._background );

    // add content text
    this._text = new Text( '?', {
      font: FONT,
      fill: 'white',
      centerX: this.bounds.width / 2,
      centerY: this.bounds.height / 2
    } );
    this.addChild( this._text );
  }

  return inherit( Node, TimesTableButtonAbstract, {
    setBackgoundFill: function( fill ) {
      this._background.fill = fill;
    },
    setText: function( text ) {
      this._text.setText( text );
    },
    showText: function() {
      this._text.visible = true;
    },
    hideText: function() {
      this._text.visible = false;
    }
  } );
} );
