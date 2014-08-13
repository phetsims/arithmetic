// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var MultiplicationTableButtonMultiplierNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonMultiplierNode' );
  var MultiplicationTableButtonProductNode = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonProductNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // constants
  var CONSTANTS = require( 'ARITHMETIC/common/ArithmeticConstants' ).MULTIPLICATION_TABLE;
  var GAME_STATE = require( 'ARITHMETIC/common/GameState' );
  var TABLE_SIZE = CONSTANTS.SIZE;

  /**
   * @param levelDescriptions {Array} array of descriptions for each level.
   * For each level will be created multiplication table node
   * Necessary for representing best scores for each level
   * @param levelProperty {Property} level difficulty property
   * @param gameModel {Object} model for single task
   *
   * @constructor
   */
  function MultiplicationTableNode( levelProperty, levelDescriptions, gameModel ) {
    var self = this;
    var backgroundRect;
    Node.call( this );

    // array with views for each level
    this._viewForLevel = [];

    // links to table cells. Indexes: [levelNumber][leftMultiplier][rightMultiplier]
    this.cells = [];

    // add stroke for all multiplication table views
    this.addChild( backgroundRect = new Rectangle( 0, 0, 0, 0, {
      fill: 'white',
      stroke: 'white',
      strokePosition: 'outside'
    } ) );

    // create view of times table for levels
    levelDescriptions.forEach( function( level, levelIndex ) {
      var tableSize = level.tableSize;
      var buttonOptions = {
        lineWidth: 1,
        width: TABLE_SIZE.width / (tableSize + 1),
        height: TABLE_SIZE.height / (tableSize + 1)
      };
      var i;
      var j;
      var hBox;
      var vBox = new VBox( {visible: false} );

      // set equal line width for background rectangle
      backgroundRect.setLineWidth( buttonOptions.lineWidth );

      // init store for cells
      self.cells[levelIndex] = [];

      for ( i = 0; i <= tableSize; i++ ) {
        hBox = new HBox();
        self.cells[levelIndex][i] = [];
        // first row
        if ( i === 0 ) {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is 'X', other - multiplier numbers
            if ( j === 0 ) {
              console.log( 'Math.round( buttonOptions.height * 0.85 ) = ' + Math.round( buttonOptions.height * 0.85 ) );
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( '\u00D7', buttonOptions, {
                font: new PhetFont( { size: Math.round( buttonOptions.height * 0.85 ) } ) // Equation empirically determined, makes font smaller for larger tables.
              } ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( j.toString(), buttonOptions ) );
            }
          }
        }
        // other rows
        else {
          for ( j = 0; j <= tableSize; j++ ) {
            // first cell is multiplier number, other - product numbers
            if ( j === 0 ) {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonMultiplierNode( i.toString(), buttonOptions ) );
            }
            else {
              hBox.addChild( self.cells[levelIndex][i][j] = new MultiplicationTableButtonProductNode( (i * j).toString(), buttonOptions ) );
            }
          }
        }
        vBox.addChild( hBox );
      }

      // add view to node
      self.addChild( vBox );

      // scale for appropriate size
      vBox.scale( TABLE_SIZE.width / vBox.bounds.width, TABLE_SIZE.height / vBox.bounds.height );

      // save view
      self._viewForLevel[levelIndex + 1] = vBox;
    } );

    // set background size
    backgroundRect.setRectWidth( this.bounds.width );
    backgroundRect.setRectHeight( this.bounds.height );

    levelProperty.link( function( levelNumberCurrent, levelNumberPrev ) {
      // show current multiplication table view for level
      if ( self._viewForLevel[levelNumberCurrent] ) {
        self._viewForLevel[levelNumberCurrent].visible = true;
      }

      // hide previous multiplication table view
      if ( self._viewForLevel[levelNumberPrev] ) {
        self._viewForLevel[levelNumberPrev].visible = false;
      }
    } );

    gameModel.property( 'state' ).link( function( state ) {
      if ( state === GAME_STATE.NEXT_TASK && levelProperty.value ) {
        gameModel.answerSheet.forEach( function( multipliersLeft, multipliersLeftIndex ) {
          multipliersLeft.forEach( function( isVisible, multipliersRightIndex ) {
            self.cells[levelProperty.value - 1][multipliersLeftIndex + 1][multipliersRightIndex + 1][ isVisible ? 'showText' : 'hideText' ]();
          } );
        } );
      }
    } );
  }

  return inherit( Node, MultiplicationTableNode, {
    // clear all cells for given level
    clearCells: function( levelNumber ) {
      if ( levelNumber ) {
        this.cells[levelNumber - 1].forEach( function( multipliersLeft ) {
          multipliersLeft.forEach( function( cell ) {
            cell.normal();
          } );
        } );
      }
    }
  } );
} );
