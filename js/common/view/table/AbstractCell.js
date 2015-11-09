// Copyright 2002-2014, University of Colorado Boulder

/**
 * Abstract base type for the cells that are used in the multiplication table.
 * <p>
 * Since many cells are created during the startup of the Arithmetic simulation, this type has been optimized to create
 * the text node 'lazily' (i.e. not until it is needed).
 * <p>
 * Another optimization is that a fixed set fonts is pre-allocated, and the font is chosen from this list rather than
 * creating a new one for each cell.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
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
  var EXAMPLE_HEIGHT_STRING = '123456789';
  var SMALL_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: SMALL_FONT } ).bounds.height;
  var MEDIUM_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: MEDIUM_FONT } ).bounds.height;
  var LARGE_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: LARGE_FONT } ).bounds.height;

  /**
   * @param {Object} backgroundOptions - Background options for button.
   * @param {Object} textOptions - Text options for button.
   *
   * @constructor
   */
  function AbstractCell( backgroundOptions, textOptions ) {
    Node.call( this );

    // @private - add background
    this._background = new Rectangle( 0, 0, backgroundOptions.width, backgroundOptions.height, _.extend( {
      fill: 'white',
      stroke: 'white',
      lineWidth: 2.5
    }, backgroundOptions ) );
    this.addChild( this._background );

    // @private - save/define text options for when the text node is created
    this._textOptions = _.extend( {
      font: chooseFont( this.bounds.height ),
      fill: 'white',
      centerY: this.bounds.height / 2,
      initiallyVisible: true
    }, textOptions );

    // @private - define the _text variable, but create it only when needed in order to save time
    this._textNode = null;

    // @private - string to be displayed, used to support lazy creation of the node
    this._text = '';

    // if the text is initially visible, create the text node now, otherwise wait
    if ( this._textOptions.initiallyVisible ) {
      createTextNodeIfNeeded( this );
    }
  }

  // Convenience function for selecting appropriate font size for this cell.  This is done as an optimization so that
  // a new font doesn't need to be created for each cell.  The sizes were empirically determined.
  function chooseFont( cellHeight ) {
    var font;
    if ( cellHeight < 27 ) {
      font = SMALL_FONT;
    }
    else if ( cellHeight < 35 ) {
      font = MEDIUM_FONT;
    }
    else {
      font = LARGE_FONT;
    }
    return font;
  }

  // Convenience function that supports 'lazy' creation of the text node, which is done to minimize startup time.
  function createTextNodeIfNeeded( cell ) {

    if ( cell._textNode ) {
      // the text node already exists
      return;
    }

    cell._textNode = new Text( cell._text, cell._textOptions );
    cell._textNode.centerX = cell.bounds.width / 2;
    cell.addChild( cell._textNode );
  }

  return inherit( Node, AbstractCell, {

    setBackgroundFill: function( fill ) {
      this._background.fill = fill;
    },

    setText: function( text ) {
      this._text = text;
      if ( this._textNode ) {
        this._textNode.text = text;
        this._textNode.centerX = this.width / 2;
      }
    },

    setTextFill: function( fill ) {
      createTextNodeIfNeeded( this );
      this._textNode.setFill( fill );
    },

    showText: function() {
      createTextNodeIfNeeded( this );
      this._textNode.visible = true;
    },

    hideText: function() {
      if ( this._textNode ) {
        this._textNode.visible = false;
      }
    },

    /**
     * Get the text string contained in this cell (not the text node).
     * @returns {string}
     */
    getTextString: function() {
      return this._text;
    },

    isTextVisible: function() {
      return this._textNode ? this._textNode.visible : false;
    },

    getTextHeight: function() {
      var height;
      switch( this._textOptions.font ) {
        case SMALL_FONT:
          height = SMALL_FONT_HEIGHT;
          break;
        case MEDIUM_FONT:
          height = MEDIUM_FONT_HEIGHT;
          break;
        case LARGE_FONT:
          height = LARGE_FONT_HEIGHT;
          break;
        default:
          assert && assert( false, 'unrecognized font' );
      }
      return height;
    }
  } );
} );
