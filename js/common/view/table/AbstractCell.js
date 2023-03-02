// Copyright 2014-2023, University of Colorado Boulder

/**
 * Abstract base type for the cells that are used in the multiplication table.
 *
 * Since many cells are created during the startup of the Arithmetic simulation, this type has been optimized to create
 * the text node 'lazily' (i.e. not until it is needed).
 *
 * Another optimization is that a fixed set fonts is pre-allocated, and the font is chosen from this list rather than
 * creating a new one for each cell.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import merge from '../../../../../phet-core/js/merge.js';
import PhetFont from '../../../../../scenery-phet/js/PhetFont.js';
import { Rectangle, Text } from '../../../../../scenery/js/imports.js';
import arithmetic from '../../../arithmetic.js';

// constants
const SMALL_FONT = new PhetFont( 17 );
const MEDIUM_FONT = new PhetFont( 22 );
const LARGE_FONT = new PhetFont( 30 );
const EXAMPLE_HEIGHT_STRING = '123456789';
const SMALL_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: SMALL_FONT } ).bounds.height;
const MEDIUM_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: MEDIUM_FONT } ).bounds.height;
const LARGE_FONT_HEIGHT = new Text( EXAMPLE_HEIGHT_STRING, { font: LARGE_FONT } ).bounds.height;

class AbstractCell extends Rectangle {

  /**
   * @param {Object} backgroundOptions - Background options for button.
   * @param {Object} textOptions - Text options for button.
   */
  constructor( backgroundOptions, textOptions ) {
    super( 0, 0, backgroundOptions.width, backgroundOptions.height, merge( {
      fill: 'white',
      stroke: 'white',
      lineWidth: 2.5
    }, backgroundOptions ) );

    // @private - save/define text options for when the text node is created
    this._textOptions = merge( {
      font: chooseFont( this.bounds.height ),
      fill: 'white',
      centerY: this.bounds.height / 2,
      initiallyVisible: true
    }, textOptions );

    // @private - define the _text variable, but create it only when needed in order to save time during startup
    this._textNode = null;

    // @private - string to be displayed, used to support lazy creation of the node
    this._text = '';

    // if the text is initially visible, create the text node now, otherwise wait until it is shown
    if ( this._textOptions.initiallyVisible ) {
      createTextNodeIfNeeded( this );
    }
  }

  // @public
  setBackgroundFill( fill ) {
    this.fill = fill;
  }

  // @protected
  setText( text ) {
    this._text = text;
    if ( this._textNode ) {
      this._textNode.string = text;
      this._textNode.centerX = this.width / 2;
    }
  }

  // @public
  setTextFill( fill ) {
    createTextNodeIfNeeded( this );
    this._textNode.setFill( fill );
  }

  // @public
  showText() {
    createTextNodeIfNeeded( this );
    this._textNode.visible = true;
  }

  // @public
  hideText() {
    if ( this._textNode ) {
      this._textNode.visible = false;
    }
  }

  /**
   * Get the text string contained in this cell (not the text node).
   * @public
   * @returns {string}
   */
  getTextString() {
    return this._text;
  }

  // @public
  isTextVisible() {
    return this._textNode ? this._textNode.visible : false;
  }

  // @public
  getTextHeight() {
    let height;
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
}

// Convenience function for selecting appropriate font size for this cell.  This is done as an optimization so that
// a new font doesn't need to be created for each cell.  The sizes were empirically determined.
function chooseFont( cellHeight ) {
  let font;
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

arithmetic.register( 'AbstractCell', AbstractCell );

export default AbstractCell;