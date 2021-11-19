// Copyright 2021, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import arithmetic from './arithmetic.js';

type StringsType = {
  'arithmetic': {
    'title': string
  },
  'check': string,
  'chooseYourLevel': string,
  'divide': string,
  'factor': string,
  'multiply': string,
  'pattern': {
    'level': {
      '0levelNumber': string
    }
  },
  'tryAgain': string,
  'unknownValueIndicator': string
};

const arithmeticStrings = getStringModule( 'ARITHMETIC' ) as StringsType;

arithmetic.register( 'arithmeticStrings', arithmeticStrings );

export default arithmeticStrings;
