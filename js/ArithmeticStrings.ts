// Copyright 2021-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import arithmetic from './arithmetic.js';

type StringsType = {
  'arithmetic': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'check': string;
  'checkStringProperty': LocalizedStringProperty;
  'chooseYourLevel': string;
  'chooseYourLevelStringProperty': LocalizedStringProperty;
  'divide': string;
  'divideStringProperty': LocalizedStringProperty;
  'factor': string;
  'factorStringProperty': LocalizedStringProperty;
  'multiply': string;
  'multiplyStringProperty': LocalizedStringProperty;
  'pattern': {
    'level': {
      '0levelNumber': string;
      '0levelNumberStringProperty': LocalizedStringProperty;
    }
  };
  'tryAgain': string;
  'tryAgainStringProperty': LocalizedStringProperty;
  'unknownValueIndicator': string;
  'unknownValueIndicatorStringProperty': LocalizedStringProperty;
};

const ArithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'ArithmeticStrings', ArithmeticStrings );

export default ArithmeticStrings;
