'use strict';

const colorLogger = require(`./logger`);

const packageJsonFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    colorLogger.version(version);
  }
};

