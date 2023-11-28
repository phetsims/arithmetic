// Copyright 2014-2023, University of Colorado Boulder

/**
 * The 'Multiply' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author John Blanco, Andrey Zelenkov (MLearner)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmetic from '../arithmetic.js';
import ArithmeticStrings from '../ArithmeticStrings.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import MultiplyModel from './model/MultiplyModel.js';
import MultiplyScreenIconNode from './view/MultiplyScreenIconNode.js';
import MultiplyView from './view/MultiplyView.js';

class MultiplyScreen extends Screen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @param {Object} [options]
   */
  constructor( preferencesModel, options ) {

    options = merge( {
      name: ArithmeticStrings.multiplyStringProperty,
      homeScreenIcon: new ScreenIcon( new MultiplyScreenIconNode(), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      tandem: Tandem.REQUIRED
    }, options );

    super(
      () => new MultiplyModel( preferencesModel, options.tandem.createTandem( 'model' ) ),
      model => new MultiplyView( model ),
      options
    );
  }
}

arithmetic.register( 'MultiplyScreen', MultiplyScreen );
export default MultiplyScreen;