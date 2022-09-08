// Copyright 2014-2022, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import arithmetic from '../../arithmetic.js';
import ArithmeticStrings from '../../ArithmeticStrings.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import MultiplyEquationNode from './MultiplyEquationNode.js';
import MultiplyScreenTableNode from './MultiplyScreenTableNode.js';

class MultiplyView extends ArithmeticView {

  /**
   * @param {MultiplyModel} model - Main model for screen.
   */
  constructor( model ) {
    super(
      model,
      new MultiplyScreenTableNode(
        model.problemModel,
        model.stateProperty,
        model.levelNumberProperty,
        model.levelModels
      ),
      new MultiplyEquationNode(
        model.stateProperty,
        model.problemModel.multiplicandProperty,
        model.problemModel.multiplierProperty,
        model.inputProperty
      ),
      {
        titleString: ArithmeticStrings.multiply,
        levelSelectButtonColor: '#D8F58A',
        levelSelectIconSet: 'multiply'
      }
    );
  }
}

arithmetic.register( 'MultiplyView', MultiplyView );
export default MultiplyView;