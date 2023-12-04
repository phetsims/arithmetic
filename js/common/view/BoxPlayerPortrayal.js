// Copyright 2023, University of Colorado Boulder

/**
 * The BoxPlayerPortrayal creates the images  of each version of the 'level' box player ( multiply level 1,
 * multiply level 2, multiply level 3, factor level 1, factor level 2, factor level 3, divide level 1, divide level 2,
 * and divide level 3), as well as defines the visibility of each individual image based on the
 * regionAndCulturePortrayalProperty.
 *
 * @author Luisa Vargas
 *
 */

import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import { Image, Node } from '../../../../scenery/js/imports.js';
import arithmetic from '../../arithmetic.js';
import BoxPlayerImages from './BoxPlayerImages.js';

export default class BoxPlayerPortrayal {

  /**
   * @param { ArithmeticModel } sceneModel
   */
  constructor( sceneModel ) {

    const boxPlayerSets = BoxPlayerImages.BOX_PLAYER_CHARACTER_SETS;
    const regionAndCulturePortrayalProperty = sceneModel.regionAndCulturePortrayalProperty;

    const createVisibleProperty = set => {
      return new DerivedProperty( [ regionAndCulturePortrayalProperty ], portrayal => {
        return portrayal === set;
      } );
    };

    const multiplyLevel1Images = boxPlayerSets.map( set => new Image( set.multiplyLevel1,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const multiplyLevel2Images = boxPlayerSets.map( set => new Image( set.multiplyLevel2,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const multiplyLevel3Images = boxPlayerSets.map( set => new Image( set.multiplyLevel3,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const factorLevel1Images = boxPlayerSets.map( set => new Image( set.factorLevel1,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const factorLevel2Images = boxPlayerSets.map( set => new Image( set.factorLevel2,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const factorLevel3Images = boxPlayerSets.map( set => new Image( set.factorLevel3,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const divideLevel1Images = boxPlayerSets.map( set => new Image( set.divideLevel1,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const divideLevel2Images = boxPlayerSets.map( set => new Image( set.divideLevel2,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );
    const divideLevel3Images = boxPlayerSets.map( set => new Image( set.divideLevel3,
      {
        visibleProperty: createVisibleProperty( set )
      } ) );

    const multiplyLevel1Node = new Node( { children: multiplyLevel1Images } );
    const multiplyLevel2Node = new Node( { children: multiplyLevel2Images } );
    const multiplyLevel3Node = new Node( { children: multiplyLevel3Images } );
    const factorLevel1Node = new Node( { children: factorLevel1Images } );
    const factorLevel2Node = new Node( { children: factorLevel2Images } );
    const factorLevel3Node = new Node( { children: factorLevel3Images } );
    const divideLevel1Node = new Node( { children: divideLevel1Images } );
    const divideLevel2Node = new Node( { children: divideLevel2Images } );
    const divideLevel3Node = new Node( { children: divideLevel3Images } );

    /**
     * @public
     * @type {{divide: Node[], multiply: Node[], factor: Node[]}}
     */
    this.boxPlayerNodes = {
      multiply: [
        multiplyLevel1Node,
        multiplyLevel2Node,
        multiplyLevel3Node
      ],
      factor: [
        factorLevel1Node,
        factorLevel2Node,
        factorLevel3Node
      ],
      divide: [
        divideLevel1Node,
        divideLevel2Node,
        divideLevel3Node
      ]
    };
  }
}

arithmetic.register( 'BoxPlayerPortrayal', BoxPlayerPortrayal );