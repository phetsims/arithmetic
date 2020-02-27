// Copyright 2014-2019, University of Colorado Boulder

/**
 * The 'Multiply' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmeticStrings from '../arithmetic-strings.js';
import arithmetic from '../arithmetic.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import MultiplyModel from './model/MultiplyModel.js';
import MultiplyScreenIconNode from './view/MultiplyScreenIconNode.js';
import MultiplyView from './view/MultiplyView.js';

const multiplyString = arithmeticStrings.multiply;

/**
 * @param {Object} [options]
 * @constructor
 */
function MultiplyScreen( options ) {

  options = merge( {
    name: multiplyString,
    homeScreenIcon: new MultiplyScreenIconNode(),
    backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
    tandem: Tandem.REQUIRED
  }, options );

  Screen.call( this,
    function() { return new MultiplyModel( options.tandem.createTandem( 'model' ) ); },
    function( model ) { return new MultiplyView( model ); },
    options );
}

arithmetic.register( 'MultiplyScreen', MultiplyScreen );

inherit( Screen, MultiplyScreen );
export default MultiplyScreen;