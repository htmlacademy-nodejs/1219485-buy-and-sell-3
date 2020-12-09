'use strict';

const fs = require(`fs`).promises;
<<<<<<< HEAD
const chalk = require(`chalk`);
=======
const logger = require(`./logger`);
>>>>>>> d5a96b9... M2-T1-A2 Учебный

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
<<<<<<< HEAD
      console.log(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
=======
      logger.success(`Operation success. File created.`);
    } catch (err) {
      logger.error(`Can't write data to file...`);
>>>>>>> d5a96b9... M2-T1-A2 Учебный
    }
  }
};


