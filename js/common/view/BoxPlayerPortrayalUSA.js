// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import usaDivideLevel1Icon_svg from '../../../images/localized/usaDivideLevel1Icon_svg.js';
import usaDivideLevel2Icon_svg from '../../../images/localized/usaDivideLevel2Icon_svg.js';
import usaDivideLevel3Icon_svg from '../../../images/localized/usaDivideLevel3Icon_svg.js';
import usaFactorLevel1Icon_svg from '../../../images/localized/usaFactorLevel1Icon_svg.js';
import usaFactorLevel2Icon_svg from '../../../images/localized/usaFactorLevel2Icon_svg.js';
import usaFactorLevel3Icon_svg from '../../../images/localized/usaFactorLevel3Icon_svg.js';
import usaMultiplyLevel1Icon_svg from '../../../images/localized/usaMultiplyLevel1Icon_svg.js';
import usaMultiplyLevel2Icon_svg from '../../../images/localized/usaMultiplyLevel2Icon_svg.js';
import usaMultiplyLevel3Icon_svg from '../../../images/localized/usaMultiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalUSA = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty,
  usaMultiplyLevel1Icon_svg,
  usaMultiplyLevel2Icon_svg,
  usaMultiplyLevel3Icon_svg,
  usaFactorLevel1Icon_svg,
  usaFactorLevel2Icon_svg,
  usaFactorLevel3Icon_svg,
  usaDivideLevel1Icon_svg,
  usaDivideLevel2Icon_svg,
  usaDivideLevel3Icon_svg,
  USA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalUSA;