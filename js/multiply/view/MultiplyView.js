// Copyright 2014-2019, University of Colorado Boulder

/**
 * View for 'Multiply' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import inherit from '../../../../phet-core/js/inherit.js';
import arithmeticStrings from '../../arithmetic-strings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import MultiplyEquationNode from './MultiplyEquationNode.js';
import MultiplyScreenTableNode from './MultiplyScreenTableNode.js';

const multiplyString = arithmeticStrings.multiply;

/**
 * @param {MultiplyModel} model - Main model for screen.
 * @constructor
 */
function MultiplyView( model ) {
  ArithmeticView.call(
    this,
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
      titleString: multiplyString,
      levelSelectButtonColor: '#D8F58A',
      levelSelectIconSet: 'multiply'
    }
  );
}

arithmetic.register( 'MultiplyView', MultiplyView );

inherit( ArithmeticView, MultiplyView );
export default MultiplyView;