// Copyright 2014-2022, University of Colorado Boulder

/**
 * The 'Divide' screen. Conforms to the contract specified in joist/Screen.
 *
 * Andrey Zelenkov (MLearner)
 * @author John Blanco
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import arithmetic from '../arithmetic.js';
import ArithmeticStrings from '../ArithmeticStrings.js';
import ArithmeticConstants from '../common/ArithmeticConstants.js';
import DivideModel from './model/DivideModel.js';
import DivideScreenIconNode from './view/DivideScreenIconNode.js';
import DivideView from './view/DivideView.js';

class DivideScreen extends Screen {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {
      name: ArithmeticStrings.divideStringProperty,
      backgroundColorProperty: new Property( ArithmeticConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new ScreenIcon( new DivideScreenIconNode(), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: Tandem.REQUIRED
    }, options );

    super(
      () => new DivideModel( options.tandem.createTandem( 'model' ) ),
      model => new DivideView( model ),
      options
    );
  }
}

arithmetic.register( 'DivideScreen', DivideScreen );
export default DivideScreen;