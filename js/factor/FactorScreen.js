// Copyright 2014-2020, University of Colorado Boulder

/**
 * The 'Factor' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmetic from '../arithmetic.js';
import arithmeticStrings from '../arithmeticStrings.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import FactorModel from './model/FactorModel.js';
import FactorScreenIconNode from './view/FactorScreenIconNode.js';
import FactorView from './view/FactorView.js';

class FactorScreen extends Screen {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {
      name: arithmeticStrings.factor,
      homeScreenIcon: new ScreenIcon( new FactorScreenIconNode(), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: Tandem.REQUIRED
    }, options );

    super(
      function() { return new FactorModel( options.tandem.createTandem( 'model' ) ); },
      function( model ) { return new FactorView( model ); },
      options
    );
  }
}

arithmetic.register( 'FactorScreen', FactorScreen );
export default FactorScreen;