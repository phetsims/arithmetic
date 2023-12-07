// Copyright 2023, University of Colorado Boulder
/**
 * BoxPlayer images contains an array of character sets, each representing a different region/culture.
 *
 * @author Luisa Vargas
 *
 */

import arithmetic from '../../arithmetic.js';
import BoxPlayerCharacterSetAfrica from './BoxPlayerCharacterSetAfrica.js';
import BoxPlayerCharacterSetAfricaModest from './BoxPlayerCharacterSetAfricaModest.js';
import BoxPlayerCharacterSetAsia from './BoxPlayerCharacterSetAsia.js';
import BoxPlayerCharacterSetLatinAmerica from './BoxPlayerCharacterSetLatinAmerica.js';
import BoxPlayerCharacterSetMulticultural from './BoxPlayerCharacterSetMulticultural.js';
import BoxPlayerCharacterSetOceania from './BoxPlayerCharacterSetOceania.js';
import BoxPlayerCharacterSetUSA from './BoxPlayerCharacterSetUSA.js';


const BoxPlayerImages = {
  BOX_PLAYER_CHARACTER_SETS: [
    BoxPlayerCharacterSetMulticultural,
    BoxPlayerCharacterSetAfrica,
    BoxPlayerCharacterSetAfricaModest,
    BoxPlayerCharacterSetAsia,
    BoxPlayerCharacterSetLatinAmerica,
    BoxPlayerCharacterSetOceania,
    BoxPlayerCharacterSetUSA
  ]
};

arithmetic.register( 'BoxPlayerImages', BoxPlayerImages );
export default BoxPlayerImages;