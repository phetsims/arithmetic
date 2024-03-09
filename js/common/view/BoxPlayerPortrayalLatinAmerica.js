// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import latinAmericaDivideLevel1Icon_svg from '../../../images/localized/latinAmericaDivideLevel1Icon_svg.js';
import latinAmericaDivideLevel2Icon_svg from '../../../images/localized/latinAmericaDivideLevel2Icon_svg.js';
import latinAmericaDivideLevel3Icon_svg from '../../../images/localized/latinAmericaDivideLevel3Icon_svg.js';
import latinAmericaFactorLevel1Icon_svg from '../../../images/localized/latinAmericaFactorLevel1Icon_svg.js';
import latinAmericaFactorLevel2Icon_svg from '../../../images/localized/latinAmericaFactorLevel2Icon_svg.js';
import latinAmericaFactorLevel3Icon_svg from '../../../images/localized/latinAmericaFactorLevel3Icon_svg.js';
import latinAmericaMultiplyLevel1Icon_svg from '../../../images/localized/latinAmericaMultiplyLevel1Icon_svg.js';
import latinAmericaMultiplyLevel2Icon_svg from '../../../images/localized/latinAmericaMultiplyLevel2Icon_svg.js';
import latinAmericaMultiplyLevel3Icon_svg from '../../../images/localized/latinAmericaMultiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalLatinAmerica = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty,
  latinAmericaMultiplyLevel1Icon_svg,
  latinAmericaMultiplyLevel2Icon_svg,
  latinAmericaMultiplyLevel3Icon_svg,
  latinAmericaFactorLevel1Icon_svg,
  latinAmericaFactorLevel2Icon_svg,
  latinAmericaFactorLevel3Icon_svg,
  latinAmericaDivideLevel1Icon_svg,
  latinAmericaDivideLevel2Icon_svg,
  latinAmericaDivideLevel3Icon_svg,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalLatinAmerica;