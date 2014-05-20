// Copyright 2002-2014, University of Colorado Boulder

/**
 * Contains all game components: times table, calculator, equation, smile face, etc.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var BackButtonNode = require( 'ARITHMETIC/common/view/BackButtonNode' );
  var CalculatorNode = require( 'ARITHMETIC/common/view/CalculatorNode' );
  var ControlPanelNode = require( 'ARITHMETIC/common/view/ControlPanelNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  function WorkspaceNode( model, layoutBounds ) {
    var self = this;
    Node.call( this );

    // add calculator
    this.addChild( new CalculatorNode(
        model.property( 'input' ),
        model.checkInput
      ).mutate( {right: layoutBounds.maxX * 0.98, bottom: layoutBounds.maxY * 0.95} )
    );

    // add control panel
    this.addChild( new ControlPanelNode(
        model.property( 'level' ),
        model.property( 'score' ),
        model.property( 'time' ),
        model.property( 'isTimer' ),
        model.property( 'isSound' ),
        model.refreshLevel
      ).mutate( {right: layoutBounds.maxX * 0.98, top: 10} )
    );

    this.addChild( new BackButtonNode( model.property( 'level' ) ).mutate( {left: 10, top: 10} ) );

    model.property( 'level' ).link( function( level ) {
      self.visible = level;
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
