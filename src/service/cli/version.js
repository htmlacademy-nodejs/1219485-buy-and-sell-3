'use strict';

<<<<<<< HEAD
const chalk = require(`chalk`);
=======
const logger = require(`./logger`);
>>>>>>> d5a96b9... M2-T1-A2 Учебный

const packageJsonFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
<<<<<<< HEAD
    console.info(chalk.blue(version));
=======
    logger.version(version);
>>>>>>> d5a96b9... M2-T1-A2 Учебный
  }
};

