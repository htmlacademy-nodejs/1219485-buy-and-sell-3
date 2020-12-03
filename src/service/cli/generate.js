'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {
  DEFAULT_COUNT,
  FILE_NAME
} = require(`./const`);

const {
  generateOffers
} = require(`./utils`);

module.exports = {
  name: `--generate`,
  async run(argv) {
    const [count] = argv;
    const countOffer = parseFloat(count) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};


