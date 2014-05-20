// Copyright 2002-2014, University of Colorado Boulder

/**
 * Contains all game components: times table, calculator, equation, smile face, etc.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var CalculatorNode = require( 'ARITHMETIC/common/view/CalculatorNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  function WorkspaceNode( model, layoutBounds ) {
    var self = this;
    Node.call( this );

    this.addChild( new CalculatorNode(
        model.property( 'input' ),
        model.checkInput
      ).mutate( {right: layoutBounds.maxX * 0.98, bottom: layoutBounds.maxY * 0.95} )
    );

    model.property( 'level' ).link( function( level ) {
      self.visible = level;
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
