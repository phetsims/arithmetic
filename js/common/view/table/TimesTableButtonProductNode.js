// Copyright 2002-2014, University of Colorado Boulder

/**
 * Times table product button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var TimesTableButtonAbstract = require( 'ARITHMETIC/common/view/table/TimesTableButtonAbstract' );

  // constants
  var HOVER_COLOR = 'rgb(145,145,254)';
  var SELECT_COLOR = 'rgb(14,12,70)';
  var NORMAL_COLOR = 'rgb(15,0,255)';

  function TimesTableButtonProductNode( contentText, width, height ) {
    TimesTableButtonAbstract.call( this, {
      fill: NORMAL_COLOR,
      width: width,
      height: height
    } );

    this.setText( contentText );
    this.hideText();
  }

  return inherit( TimesTableButtonAbstract, TimesTableButtonProductNode, {
    select: function() {
      this.setBackgoundFill( SELECT_COLOR );
    },
    hover: function() {
      this.setBackgoundFill( HOVER_COLOR );
    },
    normal: function() {
      this.setBackgoundFill( NORMAL_COLOR );
    }
  } );
} );
