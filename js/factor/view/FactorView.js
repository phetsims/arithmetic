[object Promise]

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import arithmeticStrings from '../../arithmeticStrings.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import FactorEquationNode from './FactorEquationNode.js';
import FactorScreenTableNode from './FactorScreenTableNode.js';

class FactorView extends ArithmeticView {

  /**
   * @param {FactorModel} model
   */
  constructor( model ) {
    super(
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
        titleString: arithmeticStrings.factor,
        levelSelectButtonColor: '#FFC266',
        levelSelectIconSet: 'factor'
      }
    );
  }
}

arithmetic.register( 'FactorView', FactorView );
export default FactorView;