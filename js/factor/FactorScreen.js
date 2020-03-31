// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmeticStrings from '../arithmeticStrings.js';
import arithmetic from '../arithmetic.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import FactorModel from './model/FactorModel.js';
import FactorScreenIconNode from './view/FactorScreenIconNode.js';
import FactorView from './view/FactorView.js';

const factorString = arithmeticStrings.factor;

/**
 * @param {Object} [options]
 * @constructor
 */
function FactorScreen( options ) {

  options = merge( {
    name: factorString,
    homeScreenIcon: new FactorScreenIconNode(),
    backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
    tandem: Tandem.REQUIRED
  }, options );

  Screen.call( this,
    function() { return new FactorModel( options.tandem.createTandem( 'model' ) ); },
    function( model ) { return new FactorView( model ); },
    options );
}

arithmetic.register( 'FactorScreen', FactorScreen );

inherit( Screen, FactorScreen );
export default FactorScreen;