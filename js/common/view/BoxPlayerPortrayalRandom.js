// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates randomly chosen region and culture portrayals for each screen.
 *
 * @author Luisa Vargas
 *
 */

import dotRandom from '../../../../dot/js/dotRandom.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';
import BoxPlayerPortrayalAfrica from './BoxPlayerPortrayalAfrica.js';
import BoxPlayerPortrayalAfricaModest from './BoxPlayerPortrayalAfricaModest.js';
import BoxPlayerPortrayalAsia from './BoxPlayerPortrayalAsia.js';
import BoxPlayerPortrayalLatinAmerica from './BoxPlayerPortrayalLatinAmerica.js';
import BoxPlayerPortrayalOceania from './BoxPlayerPortrayalOceania.js';
import BoxPlayerPortrayalUSA from './BoxPlayerPortrayalUSA.js';


const PORTRAYALS = [
  BoxPlayerPortrayalUSA,
  BoxPlayerPortrayalAfrica,
  BoxPlayerPortrayalAfricaModest,
  BoxPlayerPortrayalAsia,
  BoxPlayerPortrayalLatinAmerica,
  BoxPlayerPortrayalOceania
];
const MULTIPLY_RANDOM_PORTRAYAL = dotRandom.sample( PORTRAYALS );
const FACTOR_RANDOM_PORTRAYAL = dotRandom.sample( PORTRAYALS.filter( set => set !== MULTIPLY_RANDOM_PORTRAYAL ) );
const DIVIDE_RANDOM_PORTRAYAL = dotRandom.sample( PORTRAYALS.filter( set => set !== FACTOR_RANDOM_PORTRAYAL ) );

const BoxPlayerPortrayalRandom = new BoxPlayerPortrayal(
  'random',
  MULTIPLY_RANDOM_PORTRAYAL.multiplyLevel1,
  MULTIPLY_RANDOM_PORTRAYAL.multiplyLevel2,
  MULTIPLY_RANDOM_PORTRAYAL.multiplyLevel3,
  FACTOR_RANDOM_PORTRAYAL.factorLevel1,
  FACTOR_RANDOM_PORTRAYAL.factorLevel2,
  FACTOR_RANDOM_PORTRAYAL.factorLevel3,
  DIVIDE_RANDOM_PORTRAYAL.divideLevel1,
  DIVIDE_RANDOM_PORTRAYAL.divideLevel2,
  DIVIDE_RANDOM_PORTRAYAL.divideLevel3
);

export default BoxPlayerPortrayalRandom;