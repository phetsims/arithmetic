// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaDivideLevel1Icon_svg from '../../../images/localized/asiaDivideLevel1Icon_svg.js';
import asiaDivideLevel2Icon_svg from '../../../images/localized/asiaDivideLevel2Icon_svg.js';
import asiaDivideLevel3Icon_svg from '../../../images/localized/asiaDivideLevel3Icon_svg.js';
import asiaFactorLevel1Icon_svg from '../../../images/localized/asiaFactorLevel1Icon_svg.js';
import asiaFactorLevel2Icon_svg from '../../../images/localized/asiaFactorLevel2Icon_svg.js';
import asiaFactorLevel3Icon_svg from '../../../images/localized/asiaFactorLevel3Icon_svg.js';
import asiaMultiplyLevel1Icon_svg from '../../../images/localized/asiaMultiplyLevel1Icon_svg.js';
import asiaMultiplyLevel2Icon_svg from '../../../images/localized/asiaMultiplyLevel2Icon_svg.js';
import asiaMultiplyLevel3Icon_svg from '../../../images/localized/asiaMultiplyLevel3Icon_svg.js';
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