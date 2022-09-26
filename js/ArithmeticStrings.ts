// Copyright 2021-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import arithmetic from './arithmetic.js';

type StringsType = {
  'arithmetic': {
    'title': string;
    'titleStringProperty': LinkableProperty<string>;
  };
  'check': string;
  'checkStringProperty': LinkableProperty<string>;
  'chooseYourLevel': string;
  'chooseYourLevelStringProperty': LinkableProperty<string>;
  'divide': string;
  'divideStringProperty': LinkableProperty<string>;
  'factor': string;
  'factorStringProperty': LinkableProperty<string>;
  'multiply': string;
  'multiplyStringProperty': LinkableProperty<string>;
  'pattern': {
    'level': {
      '0levelNumber': string;
      '0levelNumberStringProperty': LinkableProperty<string>;
    }
  };
  'tryAgain': string;
  'tryAgainStringProperty': LinkableProperty<string>;
  'unknownValueIndicator': string;
  'unknownValueIndicatorStringProperty': LinkableProperty<string>;
};

const ArithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'ArithmeticStrings', ArithmeticStrings );

export default ArithmeticStrings;
