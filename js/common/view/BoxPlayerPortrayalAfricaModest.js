// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa Modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaDivideLevel2Icon_svg from '../../../images/africa/africaDivideLevel2Icon_svg.js';
import africaFactorLevel1Icon_svg from '../../../images/africa/africaFactorLevel1Icon_svg.js';
import africaFactorLevel2Icon_svg from '../../../images/africa/africaFactorLevel2Icon_svg.js';
import africaModestDivideLevel1Icon_svg from '../../../images/africaModest/africaModestDivideLevel1Icon_svg.js';
import africaModestDivideLevel3Icon_svg from '../../../images/africaModest/africaModestDivideLevel3Icon_svg.js';
import africaModestFactorLevel3Icon_svg from '../../../images/africaModest/africaModestFactorLevel3Icon_svg.js';
import africaModestMultiplyLevel3Icon_svg from '../../../images/africaModest/africaModestMultiplyLevel3Icon_svg.js';
import africaMultiplyLevel1Icon_svg from '../../../images/africa/africaMultiplyLevel1Icon_svg.js';
import africaMultiplyLevel2Icon_svg from '../../../images/africa/africaMultiplyLevel2Icon_svg.js';

import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalAfricaModest = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty,
  africaMultiplyLevel1Icon_svg,
  africaMultiplyLevel2Icon_svg,
  africaModestMultiplyLevel3Icon_svg,
  africaFactorLevel1Icon_svg,
  africaFactorLevel2Icon_svg,
  africaModestFactorLevel3Icon_svg,
  africaModestDivideLevel1Icon_svg,
  africaDivideLevel2Icon_svg,
  africaModestDivideLevel3Icon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalAfricaModest;