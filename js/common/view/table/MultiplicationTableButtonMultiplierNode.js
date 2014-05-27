// Copyright 2002-2014, University of Colorado Boulder

/**
 * Multiplication table multiplier button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var MultiplicationTableButtonAbstract = require( 'ARITHMETIC/common/view/table/MultiplicationTableButtonAbstract' );

  // constants
  var SELECT_COLOR = 'rgb(244,133,9)';
  var NORMAL_COLOR = 'rgb(218,36,5)';

  function MultiplicationTableButtonMultiplierNode( contentText, width, height ) {
    MultiplicationTableButtonAbstract.call( this, {
      fill: NORMAL_COLOR,
      width: width,
      height: height
    } );

    this.setText( contentText );
  }

  return inherit( MultiplicationTableButtonAbstract, MultiplicationTableButtonMultiplierNode, {
    select: function() {
      this.setBackgoundFill( SELECT_COLOR );
    },
    normal: function() {
      this.setBackgoundFill( NORMAL_COLOR );
    }
  } );
} );
