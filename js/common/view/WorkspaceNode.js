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
  var EquationNode = require( 'ARITHMETIC/common/view/EquationNode' );
  var FaceWithScoreConfiguredNode = require( 'ARITHMETIC/common/view/FaceWithScoreConfiguredNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var TimesTableNode = require( 'ARITHMETIC/common/view/table/TimesTableNode' );

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
        model.property( 'scoreTotal' ),
        model.property( 'time' ),
        model.property( 'isTimer' ),
        model.property( 'isSound' ),
        model.refreshLevel
      ).mutate( {right: layoutBounds.maxX * 0.98, top: layoutBounds.maxY * 0.02} )
    );

    // add back button
    this.addChild( new BackButtonNode(
        model.property( 'level' )
      ).mutate( {left: layoutBounds.maxX * 0.02, top: layoutBounds.maxY * 0.02} )
    );

    // add times table
    this.addChild( new TimesTableNode(
        model.property( 'level' ),
        model.levels
      ).mutate( {top: layoutBounds.maxY * 0.02, centerX: layoutBounds.width * 0.43} )
    );

    // add equation
    this.addChild( new EquationNode(
      model.game.property( 'multiplierLeft' ),
      model.game.property( 'multiplierRight' ),
      model.game.property( 'product' )
    ).mutate( {bottom: layoutBounds.maxY * 0.95, centerX: layoutBounds.width * 0.45} ) );

    // add smile face
    this.addChild( new FaceWithScoreConfiguredNode(
        model.game.property( 'scoreGame' ),
        model.game.property( 'isFaceVisible' )
      ).mutate( {bottom: layoutBounds.maxY * 0.95, left: layoutBounds.maxX * 0.04} )
    );

    model.property( 'level' ).link( function( level ) {
      self.visible = level;
    } );
  }

  return inherit( Node, WorkspaceNode );
} );
