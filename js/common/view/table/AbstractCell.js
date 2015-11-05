// Copyright 2002-2014, University of Colorado Boulder

/**
 * Abstract base type for the cells that are used in the multiplication table.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );

  // constants
  var SMALL_FONT = new PhetFont( 17 );
  var MEDIUM_FONT = new PhetFont( 22 );
  var LARGE_FONT = new PhetFont( 30 );

  /**
   * @param {Object} backgroundOptions - Background options for button.
   * @param {Object} textOptions - Text options for button.
   *
   * @constructor
   */
  function AbstractCell( backgroundOptions, textOptions ) {
    Node.call( this );

    // add background
    this._background = new Rectangle( 0, 0, backgroundOptions.width, backgroundOptions.height, _.extend( {
      fill: 'white',
      stroke: 'white',
      lineWidth: 2.5
    }, backgroundOptions ) );
    this.addChild( this._background );

    // Choose the font.  This is an optimization done so that the font doesn't have to be recreated for each cell.  The
    // thresholds and the font sizes were empirically determined.
    var font;
    if ( this.bounds.height < 27 ) {
      font = SMALL_FONT;
    }
    else if ( this.bounds.height < 35 ) {
      font = MEDIUM_FONT;
    }
    else {
      font = LARGE_FONT;
    }

    // add content text
    this._text = new Text( '', _.extend( {
      font: font,
      fill: 'white',
      centerY: this.bounds.height / 2
    }, textOptions ) );
    this.addChild( this._text );
  }

  return inherit( Node, AbstractCell, {

    setBackgroundFill: function( fill ) {
      this._background.fill = fill;
    },

    setText: function( text ) {
      this._text.setText( text );
      this._text.centerX = this.bounds.width / 2 - 1;
    },

    setTextFill: function( fill ) {
      this._text.setFill( fill );
    },

    showText: function() {
      if ( !this._text.visible ) {
        this._text.visible = true;
      }
    },

    hideText: function() {
      this._text.visible = false;
    },

    /**
     * Get the text string contained in this cell (not the text node).
     * @returns {string}
     */
    getTextString: function() {
      return this._text.text;
    },

    isTextVisible: function() {
      return this._text.visible;
    },

    getTextWidth: function() {
      return this._text.width;
    }
  } );
} );
