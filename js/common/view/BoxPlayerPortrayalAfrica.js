// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_svg from '../../../images/africa/divideLevel1Icon_svg.js';
import divideLevel2Icon_svg from '../../../images/africa/divideLevel2Icon_svg.js';
import divideLevel3Icon_svg from '../../../images/africa/divideLevel3Icon_svg.js';
import factorLevel1Icon_svg from '../../../images/africa/factorLevel1Icon_svg.js';
import factorLevel2Icon_svg from '../../../images/africa/factorLevel2Icon_svg.js';
import factorLevel3Icon_svg from '../../../images/africa/factorLevel3Icon_svg.js';
import multiplyLevel1Icon_svg from '../../../images/africa/multiplyLevel1Icon_svg.js';
import multiplyLevel2Icon_svg from '../../../images/africa/multiplyLevel2Icon_svg.js';
import multiplyLevel3Icon_svg from '../../../images/africa/multiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAfrica = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty,
  multiplyLevel1Icon_svg,
  multiplyLevel2Icon_svg,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_svg,
  factorLevel3Icon_svg,
  divideLevel1Icon_svg,
  divideLevel2Icon_svg,
  divideLevel3Icon_svg,
  AFRICA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAfrica;