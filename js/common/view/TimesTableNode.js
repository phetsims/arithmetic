// Copyright 2002-2014, University of Colorado Boulder

/**
 * Times table node.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  // constants

  function TimesTableNode( levelProperty ) {
    Node.call( this );
  }

  return inherit( Node, TimesTableNode );
} );
