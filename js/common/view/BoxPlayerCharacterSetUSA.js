// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_png from '../../../mipmaps/usa/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/usa/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/usa/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/usa/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/usa/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/usa/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/usa/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/usa/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/usa/multiplyLevel3Icon_png.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';

const ExplorerCharacterSetUSA = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_png,
  factorLevel1Icon_png,
  factorLevel2Icon_png,
  factorLevel3Icon_png,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_png,
  USA_REGION_AND_CULTURE_ID
);

export default ExplorerCharacterSetUSA;