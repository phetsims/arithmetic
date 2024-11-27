// Copyright 2021-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import arithmetic from './arithmetic.js';

type StringsType = {
  'arithmetic': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'checkStringProperty': LocalizedStringProperty;
  'chooseYourLevelStringProperty': LocalizedStringProperty;
  'divideStringProperty': LocalizedStringProperty;
  'factorStringProperty': LocalizedStringProperty;
  'multiplyStringProperty': LocalizedStringProperty;
  'pattern': {
    'level': {
      '0levelNumberStringProperty': LocalizedStringProperty;
    }
  };
  'tryAgainStringProperty': LocalizedStringProperty;
  'unknownValueIndicatorStringProperty': LocalizedStringProperty;
};

const ArithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'ArithmeticStrings', ArithmeticStrings );

export default ArithmeticStrings;
