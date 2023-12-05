// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_png from '../../../mipmaps/asia/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/asia/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/asia/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/asia/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/asia/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/asia/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/asia/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/asia/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/asia/multiplyLevel3Icon_png.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';

const ExplorerCharacterSetAsia = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_png,
  factorLevel1Icon_png,
  factorLevel2Icon_png,
  factorLevel3Icon_png,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_png,
  ASIA_REGION_AND_CULTURE_ID
);

export default ExplorerCharacterSetAsia;