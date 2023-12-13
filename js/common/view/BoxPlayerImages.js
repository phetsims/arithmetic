// Copyright 2023, University of Colorado Boulder
/**
 * BoxPlayer images contains an array of portrayals, each representing a different region/culture.
 *
 * @author Luisa Vargas
 *
 */

import arithmetic from '../../arithmetic.js';
import BoxPlayerPortrayalAfricaModest from './BoxPlayerPortrayalAfricaModest.js';
import BoxPlayerPortrayalAsia from './BoxPlayerPortrayalAsia.js';
import BoxPlayerPortrayalLatinAmerica from './BoxPlayerPortrayalLatinAmerica.js';
import BoxPlayerPortrayalMulticultural from './BoxPlayerPortrayalMulticultural.js';
import BoxPlayerPortrayalAfrica from './BoxPlayerPortrayalAfrica.js';
import BoxPlayerPortrayalOceania from './BoxPlayerPortrayalOceania.js';
import BoxPlayerPortrayalUSA from './BoxPlayerPortrayalUSA.js';


const BoxPlayerImages = {
  BOX_PLAYER_PORTRAYALS: [
    BoxPlayerPortrayalMulticultural,
    BoxPlayerPortrayalAfrica,
    BoxPlayerPortrayalAfricaModest,
    BoxPlayerPortrayalAsia,
    BoxPlayerPortrayalLatinAmerica,
    BoxPlayerPortrayalOceania,
    BoxPlayerPortrayalUSA
  ]
};

arithmetic.register( 'BoxPlayerImages', BoxPlayerImages );
export default BoxPlayerImages;