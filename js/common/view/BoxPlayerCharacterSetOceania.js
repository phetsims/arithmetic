// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_png from '../../../mipmaps/oceania/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/oceania/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/asia/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/asia/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/oceania/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/asia/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/oceania/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/oceania/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/asia/multiplyLevel3Icon_png.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';

const ExplorerCharacterSetOceania = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_png,
  factorLevel1Icon_png,
  factorLevel2Icon_png,
  factorLevel3Icon_png,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_png,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default ExplorerCharacterSetOceania;