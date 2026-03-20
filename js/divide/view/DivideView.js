// Copyright 2014-2026, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import ArithmeticImages from '../../ArithmeticImages.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
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
      [ ArithmeticImages.divideLevel1ImageProperty, ArithmeticImages.divideLevel2ImageProperty, ArithmeticImages.divideLevel3ImageProperty ],
      {
        titleString: ArithmeticStrings.divideStringProperty,
        levelSelectButtonColor: '#BC76A5'
      }
    );
  }
}

export default DivideView;
