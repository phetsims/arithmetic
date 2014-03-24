// Copyright 2002-2014, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var ArithmeticScreen = require( 'ARITHMETIC/common/view/ArithmeticScreen' ),
    DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' ),
    MultiplyScreenIconNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenIconNode' ),
    FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' ),
    Screen = require( 'JOIST/Screen' ),
    Sim = require( 'JOIST/Sim' ),
    SimLauncher = require( 'JOIST/SimLauncher' ),

  // strings and images
    simTitle = require( 'string!ARITHMETIC/arithmetic.name' ),

  // constants
    BACKGROUND_COLOR = 'rgb( 255, 245, 236 )',

    simOptions = {
      credits: {
        leadDesign: 'Mike Dubson, Bryce Gruneich',
        softwareDevelopment: 'John Blanco, Mike Dubson',
        designTeam: 'Karina Hensberry, Trish Loeblein, Ariel Paul, Kathy Perkins, Beth Stade',
        thanks: 'Thanks to Mobile Learner Labs for working with the PhET development team to convert this simulation to HTML5.'
      }
    };

  // Appending '?dev' to the URL will enable developer-only features.
  if ( window.phetcommon.getQueryParameter( 'dev' ) ) {
    simOptions = _.extend( {
      // add dev-specific options here
      showHomeScreen: false,
      screenIndex: 0
    }, simOptions );
  }

  SimLauncher.launch( function() {
    // create and start the sim
    new Sim( simTitle, [
      new Screen( '', new MultiplyScreenIconNode(),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      ),
      new Screen( '', new FactorScreenIconNode(),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      ),
      new Screen( '', new DivideScreenIconNode(),
        function() {return {}},
        function( model ) {return new ArithmeticScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      )
    ], simOptions ).start();
  } );
} );