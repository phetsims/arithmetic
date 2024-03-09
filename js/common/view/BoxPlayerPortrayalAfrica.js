// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaDivideLevel1Icon_svg from '../../../images/africa/africaDivideLevel1Icon_svg.js';
import africaDivideLevel2Icon_svg from '../../../images/africa/africaDivideLevel2Icon_svg.js';
import africaDivideLevel3Icon_svg from '../../../images/africa/africaDivideLevel3Icon_svg.js';
import africaFactorLevel1Icon_svg from '../../../images/africa/africaFactorLevel1Icon_svg.js';
import africaFactorLevel2Icon_svg from '../../../images/africa/africaFactorLevel2Icon_svg.js';
import africaFactorLevel3Icon_svg from '../../../images/africa/africaFactorLevel3Icon_svg.js';
import africaMultiplyLevel1Icon_svg from '../../../images/africa/africaMultiplyLevel1Icon_svg.js';
import africaMultiplyLevel2Icon_svg from '../../../images/africa/africaMultiplyLevel2Icon_svg.js';
import africaMultiplyLevel3Icon_svg from '../../../images/africa/africaMultiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAfrica = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty,
  africaMultiplyLevel1Icon_svg,
  africaMultiplyLevel2Icon_svg,
  africaMultiplyLevel3Icon_svg,
  africaFactorLevel1Icon_svg,
  africaFactorLevel2Icon_svg,
  africaFactorLevel3Icon_svg,
  africaDivideLevel1Icon_svg,
  africaDivideLevel2Icon_svg,
  africaDivideLevel3Icon_svg,
  AFRICA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAfrica;