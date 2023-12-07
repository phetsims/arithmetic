// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel3Icon_svg from '../../../images/asia/divideLevel3Icon_svg.js';
import factorLevel1Icon_svg from '../../../images/asia/factorLevel1Icon_svg.js';
import factorLevel3Icon_svg from '../../../images/asia/factorLevel3Icon_svg.js';
import multiplyLevel3Icon_svg from '../../../images/asia/multiplyLevel3Icon_svg.js';
import divideLevel1Icon_png from '../../../mipmaps/oceania/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/oceania/divideLevel2Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/oceania/factorLevel2Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/oceania/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/oceania/multiplyLevel2Icon_png.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalOceania = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_png,
  factorLevel3Icon_svg,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalOceania;