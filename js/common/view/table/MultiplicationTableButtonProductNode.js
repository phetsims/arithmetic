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
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableButtonAbstract = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonAbstract' );

  function MultiplicationTableButtonProductNode( contentText, width, height ) {
    MultiplicationTableButtonAbstract.call( this, {
      fill: Constants.NORMAL_COLOR,
      width: width,
      height: height
    } );

    this.setText( contentText );
    this.hideText();
  }

  return inherit( MultiplicationTableButtonAbstract, MultiplicationTableButtonProductNode, {
    active: function() {
      this.setBackgoundFill( Constants.ACTIVE_COLOR );
    },
    hover: function() {
      this.setBackgoundFill( Constants.HOVER_COLOR );
    },
    normal: function() {
      this.setBackgoundFill( Constants.NORMAL_COLOR );
    },
    select: function() {
      this.setBackgoundFill( Constants.SELECT_COLOR );
    }
  } );
} );
