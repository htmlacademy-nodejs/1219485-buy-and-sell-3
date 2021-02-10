'use strict';

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const DEFAULT_PORT = 3000;
const MAX_ID_LENGTH = 6;
const MAX_COMMENTS = 4;

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

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  DEFAULT_COUNT,
  DEFAULT_PORT,
  FILE_NAME,
  MAX_ID_LENGTH,
  MAX_COMMENTS,
  OfferType,
  SumRestrict,
  PictureRestrict,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  HttpCode
};
