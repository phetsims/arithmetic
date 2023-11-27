// Copyright 2023, University of Colorado Boulder
/**
 * BoxPlayer images contains an array of character sets, each representing a different region/culture.
 *
 * @author Luisa Vargas
 *
 */

import arithmetic from '../../arithmetic.js';
import BoxPlayerCharacterSetUSA from './BoxPlayerCharacterSetUSA.js';


const BoxPlayerImages = {
  BOX_PLAYER_CHARACTER_SETS: [
    BoxPlayerCharacterSetUSA
  ]
};

arithmetic.register( 'BoxPlayerImages', BoxPlayerImages );
export default BoxPlayerImages;