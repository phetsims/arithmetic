// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table product button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // modules
  var Constants = require( 'ARITHMETIC/common/model/Constants' ).MULTIPLICATION_TABLE.PRODUCT_BUTTON;
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableButtonAbstract = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonAbstract' );

  // images
  var pointingHandImage = require( 'image!ARITHMETIC/pointing-hand.png' );

  function MultiplicationTableButtonProductNode( contentText, width, height ) {
    MultiplicationTableButtonAbstract.call( this, {
      fill: Constants.NORMAL_COLOR,
      width: width,
      height: height
    } );

    // create pointer for active state
    this._pointer = new Image( pointingHandImage, {visible: false} );

    // set position and size for pointer
    this._pointer.scale( width / this._pointer.getWidth() * 0.75, height / this._pointer.getHeight() * 0.75 );
    this._pointer.centerX = width / 2;
    this._pointer.centerY = height / 2;

    // add pointer to node
    this.addChild( this._pointer );

    this.setText( contentText );
    this.hideText();
  }

  return inherit( MultiplicationTableButtonAbstract, MultiplicationTableButtonProductNode, {
    active: function() {
      this.setBackgoundFill( Constants.ACTIVE_COLOR );
      this._pointer.visible = false;
    },
    hover: function() {
      this.setBackgoundFill( Constants.HOVER_COLOR );
      this._pointer.visible = true;
    },
    normal: function() {
      this.setBackgoundFill( Constants.NORMAL_COLOR );
      this._pointer.visible = false;
    },
    select: function() {
      this.setBackgoundFill( Constants.SELECT_COLOR );
      this._pointer.visible = false;
    }
  } );
} );
