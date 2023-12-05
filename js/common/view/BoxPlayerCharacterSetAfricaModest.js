// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa Modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_png from '../../../mipmaps/africa-modest/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/africa/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/africa-modest/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/africa/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/africa/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/africa-modest/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/africa/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/africa/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/africa-modest/multiplyLevel3Icon_png.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';

const ExplorerCharacterSetAfricaModest = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_png,
  factorLevel1Icon_png,
  factorLevel2Icon_png,
  factorLevel3Icon_png,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_png,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default ExplorerCharacterSetAfricaModest;