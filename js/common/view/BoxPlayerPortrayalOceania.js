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
import divideLevel1Icon_svg from '../../../images/oceania/divideLevel1Icon_svg.js';
import divideLevel2Icon_svg from '../../../images/oceania/divideLevel2Icon_svg.js';
import factorLevel2Icon_svg from '../../../images/oceania/factorLevel2Icon_svg.js';
import multiplyLevel1Icon_svg from '../../../images/oceania/multiplyLevel1Icon_svg.js';
import multiplyLevel2Icon_svg from '../../../images/oceania/multiplyLevel2Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalOceania = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  multiplyLevel1Icon_svg,
  multiplyLevel2Icon_svg,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_svg,
  factorLevel3Icon_svg,
  divideLevel1Icon_svg,
  divideLevel2Icon_svg,
  divideLevel3Icon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalOceania;