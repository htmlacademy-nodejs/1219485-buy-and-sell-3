'use strict';

const logger = require(`./logger`);
const fs = require(`fs`).promises;

const {
  OfferType,
  SumRestrict,
  PictureRestrict
} = require(`./const`);

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleCollection = (collection) => {
  for (let i = collection.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [collection[i], collection[randomPosition]] = [collection[randomPosition], collection[i]];
  }

  return collection;
};

const createCollection = (min, max, collection) => {
  const arraySize = getRandomInteger(min, max);
  const collectionItems = [];

  collectionItems.push(collection[getRandomInteger(min - 1, collection.length - 1)]);

  for (let i = 0; i < (arraySize - 1); i++) {
    let choice = collection[getRandomInteger(0, collection.length - 1)];

    if (collectionItems.includes(choice)) {
      i--;
    } else {
      collectionItems.push(choice);
    }
  }

  return collectionItems;
};

const getPictureFileName = (number) => number.toString().padStart(2, `0`);

module.exports.readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    logger.error(err);
    return [];
  }
};

module.exports.generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInteger(0, titles.length - 1)],
    picture: getPictureFileName(getRandomInteger(PictureRestrict.MIN, PictureRestrict.MAX)),
    description: shuffleCollection(sentences).slice(1, 5).join(` `),
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInteger(SumRestrict.MIN, SumRestrict.MAX),
    category: createCollection(1, categories.length, categories),
  }))
);
