// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Divide' screen. Conforms to the contract specified in joist/Screen.
 *
 * Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmeticStrings from '../arithmeticStrings.js';
import arithmetic from '../arithmetic.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import DivideModel from './model/DivideModel.js';
import DivideScreenIconNode from './view/DivideScreenIconNode.js';
import DivideView from './view/DivideView.js';

const divideString = arithmeticStrings.divide;

/**
 * @param {Object} [options]
 * @constructor
 */
function DivideScreen( options ) {

  options = merge( {
    name: divideString,
    backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
    homeScreenIcon: new DivideScreenIconNode(),
    tandem: Tandem.REQUIRED
  }, options );

  Screen.call( this,
    function() { return new DivideModel( options.tandem.createTandem( 'model' ) ); },
    function( model ) { return new DivideView( model ); },
    options );
}

arithmetic.register( 'DivideScreen', DivideScreen );

inherit( Screen, DivideScreen );
export default DivideScreen;