// Copyright 2002-2014, University of Colorado Boulder

/**
 * Times table multiplier button node.
 *
 * @author Andrey Zelenkov (MLearner)
 */

define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var TimesTableButtonAbstract = require( 'ARITHMETIC/common/view/table/TimesTableButtonAbstract' );

  // constants
  var SELECT_COLOR = 'rgb(244,133,9)';
  var NORMAL_COLOR = 'rgb(218,36,5)';

  function TimesTableButtonMultiplierNode( contentText, width, height ) {
    TimesTableButtonAbstract.call( this, {
      fill: NORMAL_COLOR,
      width: width,
      height: height
    } );

    this.setText( contentText );
  }

  return inherit( TimesTableButtonAbstract, TimesTableButtonMultiplierNode, {
    select: function() {
      this.setBackgoundFill( SELECT_COLOR );
    },
    normal: function() {
      this.setBackgoundFill( NORMAL_COLOR );
    }
  } );
} );
