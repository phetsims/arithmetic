// Copyright 2021-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import arithmetic from './arithmetic.js';

type StringsType = {
  'arithmetic': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'check': string;
  'checkStringProperty': TReadOnlyProperty<string>;
  'chooseYourLevel': string;
  'chooseYourLevelStringProperty': TReadOnlyProperty<string>;
  'divide': string;
  'divideStringProperty': TReadOnlyProperty<string>;
  'factor': string;
  'factorStringProperty': TReadOnlyProperty<string>;
  'multiply': string;
  'multiplyStringProperty': TReadOnlyProperty<string>;
  'pattern': {
    'level': {
      '0levelNumber': string;
      '0levelNumberStringProperty': TReadOnlyProperty<string>;
    }
  };
  'tryAgain': string;
  'tryAgainStringProperty': TReadOnlyProperty<string>;
  'unknownValueIndicator': string;
  'unknownValueIndicatorStringProperty': TReadOnlyProperty<string>;
};

const ArithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'ArithmeticStrings', ArithmeticStrings );

export default ArithmeticStrings;
