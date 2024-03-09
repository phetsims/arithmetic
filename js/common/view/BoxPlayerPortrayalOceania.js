// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaDivideLevel3Icon_svg from '../../../images/localized/asiaDivideLevel3Icon_svg.js';
import asiaFactorLevel1Icon_svg from '../../../images/localized/asiaFactorLevel1Icon_svg.js';
import asiaFactorLevel3Icon_svg from '../../../images/localized/asiaFactorLevel3Icon_svg.js';
import asiaMultiplyLevel3Icon_svg from '../../../images/localized/asiaMultiplyLevel3Icon_svg.js';
import oceaniaDivideLevel1Icon_svg from '../../../images/localized/oceaniaDivideLevel1Icon_svg.js';
import oceaniaDivideLevel2Icon_svg from '../../../images/localized/oceaniaDivideLevel2Icon_svg.js';
import oceaniaFactorLevel2Icon_svg from '../../../images/localized/oceaniaFactorLevel2Icon_svg.js';
import oceaniaMultiplyLevel1Icon_svg from '../../../images/localized/oceaniaMultiplyLevel1Icon_svg.js';
import oceaniaMultiplyLevel2Icon_svg from '../../../images/localized/oceaniaMultiplyLevel2Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalOceania = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  oceaniaMultiplyLevel1Icon_svg,
  oceaniaMultiplyLevel2Icon_svg,
  asiaMultiplyLevel3Icon_svg,
  asiaFactorLevel1Icon_svg,
  oceaniaFactorLevel2Icon_svg,
  asiaFactorLevel3Icon_svg,
  oceaniaDivideLevel1Icon_svg,
  oceaniaDivideLevel2Icon_svg,
  asiaDivideLevel3Icon_svg,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalOceania;