// Copyright 2014-2021, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import arithmeticStrings from '../../arithmeticStrings.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import DivideEquationNode from './DivideEquationNode.js';
import DivideScreenTableNode from './DivideScreenTableNode.js';

class DivideView extends ArithmeticView {

  /**
   * @param {DivideModel} model
   */
  constructor( model ) {

    super(
      model,
      new DivideScreenTableNode( model ),
      new DivideEquationNode(
        model.stateProperty,
        model.problemModel.multiplicandProperty,
        model.problemModel.multiplierProperty,
        model.problemModel.productProperty,
        model.inputProperty,
        model.activeInputProperty
      ),
      {
        titleString: arithmeticStrings.divide,
        levelSelectButtonColor: '#BC76A5',
        levelSelectIconSet: 'divide'
      }
    );
  }
}

arithmetic.register( 'DivideView', DivideView );
export default DivideView;