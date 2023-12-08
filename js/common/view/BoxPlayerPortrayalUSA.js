// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_svg from '../../../images/usa/divideLevel1Icon_svg.js';
import divideLevel2Icon_svg from '../../../images/usa/divideLevel2Icon_svg.js';
import divideLevel3Icon_svg from '../../../images/usa/divideLevel3Icon_svg.js';
import factorLevel1Icon_svg from '../../../images/usa/factorLevel1Icon_svg.js';
import factorLevel2Icon_svg from '../../../images/usa/factorLevel2Icon_svg.js';
import factorLevel3Icon_svg from '../../../images/usa/factorLevel3Icon_svg.js';
import multiplyLevel1Icon_svg from '../../../images/usa/multiplyLevel1Icon_svg.js';
import multiplyLevel2Icon_svg from '../../../images/usa/multiplyLevel2Icon_svg.js';
import multiplyLevel3Icon_svg from '../../../images/usa/multiplyLevel3Icon_svg.js';
import BoxPlayerPortrayal from './BoxPlayerPortrayal.js';

const BoxPlayerPortrayalUSA = new BoxPlayerPortrayal(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty,
  multiplyLevel1Icon_svg,
  multiplyLevel2Icon_svg,
  multiplyLevel3Icon_svg,
  factorLevel1Icon_svg,
  factorLevel2Icon_svg,
  factorLevel3Icon_svg,
  divideLevel1Icon_svg,
  divideLevel2Icon_svg,
  divideLevel3Icon_svg,
  USA_REGION_AND_CULTURE_ID
);

export default BoxPlayerPortrayalUSA;