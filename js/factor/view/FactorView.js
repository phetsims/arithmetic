// Copyright 2014-2023, University of Colorado Boulder

/**
 * View for 'Factor' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
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
        titleString: ArithmeticStrings.factorStringProperty,
        levelSelectButtonColor: '#FFC266',
        levelSelectIconSet: 'factor'
      }
    );
  }
}

arithmetic.register( 'FactorView', FactorView );
export default FactorView;