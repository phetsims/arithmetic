// Copyright 2014-2020, University of Colorado Boulder

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import inherit from '../../../../phet-core/js/inherit.js';
import arithmeticStrings from '../../arithmetic-strings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import FactorEquationNode from './FactorEquationNode.js';
import FactorScreenTableNode from './FactorScreenTableNode.js';

const factorString = arithmeticStrings.factor;

/**
 * @param {FactorModel} model - Main model for screen.
 * @constructor
 */
function FactorView( model ) {
  ArithmeticView.call(
    this,
    model,
    new FactorScreenTableNode( model ),
    new FactorEquationNode(
      model.stateProperty,
      model.problemModel.multiplicandProperty,
      model.problemModel.multiplierProperty,
      model.problemModel.productProperty
    ),
    {
      showKeypad: false,
      titleString: factorString,
      levelSelectButtonColor: '#FFC266',
      levelSelectIconSet: 'factor'
    }
  );
}

arithmetic.register( 'FactorView', FactorView );

inherit( ArithmeticView, FactorView );
export default FactorView;