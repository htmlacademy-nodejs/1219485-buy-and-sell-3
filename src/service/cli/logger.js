'use strict';

const chalk = require(`chalk`);

const logger = {
  help: (text) => console.log(chalk.gray(text)),
  version: (versionNumber) => console.info(chalk.blue(versionNumber)),
  success: (msg) => console.log(chalk.green(msg)),
  error: (msg) => console.error(chalk.red(msg)),
  info: (msg) => console.info(chalk.red(msg))
};

module.exports = logger;

