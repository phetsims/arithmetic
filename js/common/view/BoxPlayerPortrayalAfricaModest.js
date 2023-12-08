// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa Modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_svg from '../../../images/africa-modest/divideLevel1Icon_svg.js';
import divideLevel3Icon_svg from '../../../images/africa-modest/divideLevel3Icon_svg.js';
import factorLevel3Icon_svg from '../../../images/africa-modest/factorLevel3Icon_svg.js';
import multiplyLevel3Icon_svg from '../../../images/africa-modest/multiplyLevel3Icon_svg.js';
import divideLevel2Icon_svg from '../../../images/africa/divideLevel2Icon_svg.js';
import factorLevel1Icon_svg from '../../../images/africa/factorLevel1Icon_svg.js';
import factorLevel2Icon_svg from '../../../images/africa/factorLevel2Icon_svg.js';
import multiplyLevel1Icon_svg from '../../../images/africa/multiplyLevel1Icon_svg.js';
import multiplyLevel2Icon_svg from '../../../images/africa/multiplyLevel2Icon_svg.js';

import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAfricaModest = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty,
  multiplyLevel1Icon_svg,
  multiplyLevel2Icon_svg,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_svg,
  factorLevel3Icon_svg,
  divideLevel1Icon_svg,
  divideLevel2Icon_svg,
  divideLevel3Icon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAfricaModest;