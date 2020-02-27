// Copyright 2014-2019, University of Colorado Boulder

/**
 * View for 'Divide' tab in the 'Arithmetic' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import inherit from '../../../../phet-core/js/inherit.js';
import arithmeticStrings from '../../arithmetic-strings.js';
import arithmetic from '../../arithmetic.js';
import ArithmeticView from '../../common/view/ArithmeticView.js';
import DivideEquationNode from './DivideEquationNode.js';
import DivideScreenTableNode from './DivideScreenTableNode.js';

const divideString = arithmeticStrings.divide;

/**
 * @param {DivideModel} model - Main model for screen.
 * @constructor
 */
function DivideView( model ) {

  ArithmeticView.call(
    this,
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
      titleString: divideString,
      levelSelectButtonColor: '#BC76A5',
      levelSelectIconSet: 'divide'
    }
  );
}

arithmetic.register( 'DivideView', DivideView );

inherit( ArithmeticView, DivideView );
export default DivideView;