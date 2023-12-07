// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates randomly chosen region and culture portrayals for each screen.
 *
 * @author Luisa Vargas
 *
 */

import dotRandom from '../../../../dot/js/dotRandom.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { MULTICULTURAL_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';
import BoxPlayerCharacterSetAfrica from './BoxPlayerCharacterSetAfrica.js';
import BoxPlayerCharacterSetAfricaModest from './BoxPlayerCharacterSetAfricaModest.js';
import BoxPlayerCharacterSetAsia from './BoxPlayerCharacterSetAsia.js';
import BoxPlayerCharacterSetLatinAmerica from './BoxPlayerCharacterSetLatinAmerica.js';
import BoxPlayerCharacterSetOceania from './BoxPlayerCharacterSetOceania.js';
import BoxPlayerCharacterSetUSA from './BoxPlayerCharacterSetUSA.js';


const CHARACTER_SETS = [
  BoxPlayerCharacterSetUSA,
  BoxPlayerCharacterSetAfrica,
  BoxPlayerCharacterSetAfricaModest,
  BoxPlayerCharacterSetAsia,
  BoxPlayerCharacterSetLatinAmerica,
  BoxPlayerCharacterSetOceania
];
const MULTIPLY_RANDOM_CHARACTER_SET = dotRandom.sample( CHARACTER_SETS );
const FACTOR_RANDOM_CHARACTER_SET = dotRandom.sample( CHARACTER_SETS.filter( set => set !== MULTIPLY_RANDOM_CHARACTER_SET ) );
const DIVIDE_RANDOM_CHARACTER_SET = dotRandom.sample( CHARACTER_SETS.filter( set => set !== FACTOR_RANDOM_CHARACTER_SET ) );

const BoxPlayerCharacterSetMulticultural = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.multiculturalStringProperty,
  MULTIPLY_RANDOM_CHARACTER_SET.multiplyLevel1,
  MULTIPLY_RANDOM_CHARACTER_SET.multiplyLevel2,
  MULTIPLY_RANDOM_CHARACTER_SET.multiplyLevel3,
  FACTOR_RANDOM_CHARACTER_SET.factorLevel1,
  FACTOR_RANDOM_CHARACTER_SET.factorLevel2,
  FACTOR_RANDOM_CHARACTER_SET.factorLevel3,
  DIVIDE_RANDOM_CHARACTER_SET.divideLevel1,
  DIVIDE_RANDOM_CHARACTER_SET.divideLevel2,
  DIVIDE_RANDOM_CHARACTER_SET.divideLevel3,
  MULTICULTURAL_REGION_AND_CULTURE_ID
);

export default BoxPlayerCharacterSetMulticultural;