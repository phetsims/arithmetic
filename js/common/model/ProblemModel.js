// Copyright 2014-2021, University of Colorado Boulder

/**
 * Model for single problem in the 'Arithmetic' simulation. This model contains properties necessary for each challenge
 * at the current level.  This works well as a component that can be passed to the various view elements.
 *
 * @author Andrey Zelenkov (MLearner)
 */

import Property from '../../../../axon/js/Property.js';
import arithmetic from '../../arithmetic.js';

class ProblemModel {

  /**
   */
  constructor() {

    // @public - model properties, initialized to undefined, but only ever set to {number}
    this.multiplicandProperty = new Property( undefined );
    this.multiplierProperty = new Property( undefined );
    this.productProperty = new Property( undefined ); // product of multiplication
    this.possiblePointsProperty = new Property( 1 ); // points for correct completion of current task, can go down on incorrect answers
  }

  // @public
  reset() {
    this.multiplicandProperty.reset();
    this.multiplierProperty.reset();
    this.productProperty.reset();
    this.possiblePointsProperty.reset();
  }
}

arithmetic.register( 'ProblemModel', ProblemModel );

export default ProblemModel;