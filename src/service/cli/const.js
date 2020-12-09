'use strict';

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const DEFAULT_COMMAND = `--help`;
const USER_ARGV_INDEX = 2;

const ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

module.exports = {
  DEFAULT_COUNT,
  FILE_NAME,
  OfferType,
  SumRestrict,
  PictureRestrict,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
};
