'use strict';

const fs = require(`fs`).promises;
const logger = require(`./logger`);
const {
  generateOffers,
  readContent
} = require(`./utils`);

const {
  DEFAULT_COUNT,
  FILE_NAME,
} = require(`./const`);

const FILE_SENTENCES_PATH = `./src/data/sentences.txt`;
const FILE_CATEGORIES_PATH = `./src/data/categories.txt`;
const FILE_TITLES_PATH = `./src/data/titles.txt`;
const FILE_COMMENTS_PATH = `./src/data/comments.txt`;

module.exports = {
  name: `--generate`,
  async run(argv) {
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const comments = await readContent(FILE_COMMENTS_PATH);
    const [count] = argv;
    const countOffer = parseFloat(count) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences, comments));

    try {
      await fs.writeFile(FILE_NAME, content);
      logger.success(`Operation success. File created.`);
    } catch (err) {
      logger.error(`Can't write data to file...`);
    }
  }
};


