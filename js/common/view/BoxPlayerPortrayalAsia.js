// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaDivideLevel1Icon_svg from '../../../images/asia/asiaDivideLevel1Icon_svg.js';
import asiaDivideLevel2Icon_svg from '../../../images/asia/asiaDivideLevel2Icon_svg.js';
import asiaDivideLevel3Icon_svg from '../../../images/asia/asiaDivideLevel3Icon_svg.js';
import asiaFactorLevel1Icon_svg from '../../../images/asia/asiaFactorLevel1Icon_svg.js';
import asiaFactorLevel2Icon_svg from '../../../images/asia/asiaFactorLevel2Icon_svg.js';
import asiaFactorLevel3Icon_svg from '../../../images/asia/asiaFactorLevel3Icon_svg.js';
import asiaMultiplyLevel1Icon_svg from '../../../images/asia/asiaMultiplyLevel1Icon_svg.js';
import asiaMultiplyLevel2Icon_svg from '../../../images/asia/asiaMultiplyLevel2Icon_svg.js';
import asiaMultiplyLevel3Icon_svg from '../../../images/asia/asiaMultiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAsia = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty,
  asiaMultiplyLevel1Icon_svg,
  asiaMultiplyLevel2Icon_svg,
  asiaMultiplyLevel3Icon_svg,
  asiaFactorLevel1Icon_svg,
  asiaFactorLevel2Icon_svg,
  asiaFactorLevel3Icon_svg,
  asiaDivideLevel1Icon_svg,
  asiaDivideLevel2Icon_svg,
  asiaDivideLevel3Icon_svg,
  ASIA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAsia;