// Copyright 2021-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
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
