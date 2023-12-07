// Copyright 2023, University of Colorado Boulder

/**
 * The BoxPlayerPortrayal defines what is needed for each character set in Arithmetic.
 *
 * @author Luisa Vargas
 *
 */

import RegionAndCulturePortrayal from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import arithmetic from '../../arithmetic.js';

export default class BoxPlayerPortrayal extends RegionAndCulturePortrayal {

  /**
   * @param label { LocalizedStringProperty }
   * @param multiplyLevel1 { HTMLImageElement }
   * @param multiplyLevel2 { HTMLImageElement }
   * @param multiplyLevel3 { HTMLImageElement }
   * @param factorLevel1 { HTMLImageElement }
   * @param factorLevel2 { HTMLImageElement }
   * @param factorLevel3 { HTMLImageElement }
   * @param divideLevel1 { HTMLImageElement }
   * @param divideLevel2 { HTMLImageElement }
   * @param divideLevel3 { HTMLImageElement }
   * @param queryParameterValue { string }
   */
  constructor( label,
               multiplyLevel1, multiplyLevel2, multiplyLevel3,
               factorLevel1, factorLevel2, factorLevel3,
               divideLevel1, divideLevel2, divideLevel3,
               queryParameterValue ) {

    super( label, queryParameterValue, {} );

    this.multiplyLevel1 = multiplyLevel1;
    this.multiplyLevel2 = multiplyLevel2;
    this.multiplyLevel3 = multiplyLevel3;
    this.factorLevel1 = factorLevel1;
    this.factorLevel2 = factorLevel2;
    this.factorLevel3 = factorLevel3;
    this.divideLevel1 = divideLevel1;
    this.divideLevel2 = divideLevel2;
    this.divideLevel3 = divideLevel3;
  }
}

arithmetic.register( 'BoxPlayerPortrayal', BoxPlayerPortrayal );