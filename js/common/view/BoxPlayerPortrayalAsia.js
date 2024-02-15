// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_svg from '../../../images/asia/divideLevel1Icon_svg.js';
import divideLevel2Icon_svg from '../../../images/asia/divideLevel2Icon_svg.js';
import divideLevel3Icon_svg from '../../../images/asia/divideLevel3Icon_svg.js';
import factorLevel1Icon_svg from '../../../images/asia/factorLevel1Icon_svg.js';
import factorLevel2Icon_svg from '../../../images/asia/factorLevel2Icon_svg.js';
import factorLevel3Icon_svg from '../../../images/asia/factorLevel3Icon_svg.js';
import multiplyLevel1Icon_svg from '../../../images/asia/multiplyLevel1Icon_svg.js';
import multiplyLevel2Icon_svg from '../../../images/asia/multiplyLevel2Icon_svg.js';
import multiplyLevel3Icon_svg from '../../../images/asia/multiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAsia = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty,
  multiplyLevel1Icon_svg,
  multiplyLevel2Icon_svg,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_svg,
  factorLevel3Icon_svg,
  divideLevel1Icon_svg,
  divideLevel2Icon_svg,
  divideLevel3Icon_svg,
  ASIA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAsia;