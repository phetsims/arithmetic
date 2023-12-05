// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import divideLevel1Icon_png from '../../../mipmaps/latin-america/divideLevel1Icon_png.js';
import divideLevel2Icon_png from '../../../mipmaps/latin-america/divideLevel2Icon_png.js';
import divideLevel3Icon_png from '../../../mipmaps/latin-america/divideLevel3Icon_png.js';
import factorLevel1Icon_png from '../../../mipmaps/latin-america/factorLevel1Icon_png.js';
import factorLevel2Icon_png from '../../../mipmaps/latin-america/factorLevel2Icon_png.js';
import factorLevel3Icon_png from '../../../mipmaps/latin-america/factorLevel3Icon_png.js';
import multiplyLevel1Icon_png from '../../../mipmaps/latin-america/multiplyLevel1Icon_png.js';
import multiplyLevel2Icon_png from '../../../mipmaps/latin-america/multiplyLevel2Icon_png.js';
import multiplyLevel3Icon_png from '../../../mipmaps/latin-america/multiplyLevel3Icon_png.js';
import BoxPlayerCharacterSet from './BoxPlayerCharacterSet.js';

const ExplorerCharacterSetLatinAmerica = new BoxPlayerCharacterSet(
  JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty,
  multiplyLevel1Icon_png,
  multiplyLevel2Icon_png,
  multiplyLevel3Icon_png,
  factorLevel1Icon_png,
  factorLevel2Icon_png,
  factorLevel3Icon_png,
  divideLevel1Icon_png,
  divideLevel2Icon_png,
  divideLevel3Icon_png,
  LATIN_AMERICA_REGION_AND_CULTURE_ID
);

export default ExplorerCharacterSetLatinAmerica;