// Copyright 2014-2021, University of Colorado Boulder

/**
 * This Scenery node represents one cell in the body (as opposed to the headers) of the multiplication table.
 *
 * @author Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import merge from '../../../../../phet-core/js/merge.js';
import arithmetic from '../../../arithmetic.js';
import AbstractCell from './AbstractCell.js';

// constants
const HOVER_COLOR = 'rgb(238,253,77)';
const NORMAL_COLOR = 'rgb(50,70,255)';
const SELECT_COLOR = 'rgb(77,0,153)';

class MultiplicationTableBodyCell extends AbstractCell {

  /**
   * @param {Text} contentText - Text label for button.
   * @param {Object} backgroundOptions - Background options for button.
   */
  constructor( contentText, backgroundOptions ) {
    backgroundOptions = merge( {
      fill: NORMAL_COLOR
    }, backgroundOptions );
    super( backgroundOptions, { initiallyVisible: false } );

    this.setText( contentText );
  }

  // @public - set cell into the state that indicates that the user is hovering over it
  setHover() {
    this.setBackgroundFill( HOVER_COLOR );
  }

  // @public - set cell to normal, default appearance state
  setNormal() {
    this.setBackgroundFill( NORMAL_COLOR );
  }

  // @public - set cell to the selected state
  setSelected() {
    this.setBackgroundFill( SELECT_COLOR );
  }
}

arithmetic.register( 'MultiplicationTableBodyCell', MultiplicationTableBodyCell );

export default MultiplicationTableBodyCell;