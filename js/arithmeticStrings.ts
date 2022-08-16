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
    'titleProperty': TReadOnlyProperty<string>;
  };
  'check': string;
  'checkProperty': TReadOnlyProperty<string>;
  'chooseYourLevel': string;
  'chooseYourLevelProperty': TReadOnlyProperty<string>;
  'divide': string;
  'divideProperty': TReadOnlyProperty<string>;
  'factor': string;
  'factorProperty': TReadOnlyProperty<string>;
  'multiply': string;
  'multiplyProperty': TReadOnlyProperty<string>;
  'pattern': {
    'level': {
      '0levelNumber': string;
      '0levelNumberProperty': TReadOnlyProperty<string>;
    }
  };
  'tryAgain': string;
  'tryAgainProperty': TReadOnlyProperty<string>;
  'unknownValueIndicator': string;
  'unknownValueIndicatorProperty': TReadOnlyProperty<string>;
};

const arithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'arithmeticStrings', arithmeticStrings );

export default arithmeticStrings;
