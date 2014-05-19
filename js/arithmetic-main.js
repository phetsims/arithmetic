// Copyright 2002-2014, University of Colorado Boulder

/**
 * Main entry point for the 'Arithmetic' sim.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // imports
  var MultiplyScreen = require( 'ARITHMETIC/multiply/view/MultiplyScreen' );
  var FactorScreen = require( 'ARITHMETIC/factor/view/FactorScreen' );
  var DivideScreen = require( 'ARITHMETIC/divide/view/DivideScreen' );
  var DivideScreenIconNode = require( 'ARITHMETIC/divide/view/DivideScreenIconNode' );
  var MultiplyScreenIconNode = require( 'ARITHMETIC/multiply/view/MultiplyScreenIconNode' );
  var FactorScreenIconNode = require( 'ARITHMETIC/factor/view/FactorScreenIconNode' );
  var ArithmeticModel = require( 'ARITHMETIC/common/model/ArithmeticModel' );
  var Screen = require( 'JOIST/Screen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings and images
  var simTitle = require( 'string!ARITHMETIC/arithmetic.name' );

  // constants
  var BACKGROUND_COLOR = 'rgb( 255, 245, 236 )';

  var simOptions = {
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
        function() {return new ArithmeticModel();},
        function( model ) {return new MultiplyScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      ),
      new Screen( '', new FactorScreenIconNode(),
        function() {return new ArithmeticModel();},
        function( model ) {return new FactorScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      ),
      new Screen( '', new DivideScreenIconNode(),
        function() {return new ArithmeticModel();},
        function( model ) {return new DivideScreen( model );},
        { backgroundColor: BACKGROUND_COLOR }
      )
    ], simOptions ).start();
  } );
} );