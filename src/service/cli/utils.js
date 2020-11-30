'use strict';

const {
  TITLES,
  SENTENCES,
  CATEGORIES,
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

const createCategories = (min, max, category) => {
  const arraySize = getRandomInteger(min, max);
  const categoryItems = [];

  categoryItems.push(category[getRandomInteger(min - 1, category.length - 1)]);

  for (let i = 0; i < (arraySize - 1); i++) {
    let choice = category[getRandomInteger(0, category.length - 1)];

    if (categoryItems.includes(choice)) {
      i--;
    } else {
      categoryItems.push(choice);
    }
  }

  return categoryItems;
};

const getPictureFileName = (number) => number.toString().padStart(2, `0`);

module.exports.generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInteger(0, TITLES.length - 1)],
    picture: getPictureFileName(getRandomInteger(PictureRestrict.MIN, PictureRestrict.MAX)),
    description: shuffleCollection(SENTENCES).slice(1, 5).join(` `),
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInteger(SumRestrict.MIN, SumRestrict.MAX),
    category: createCategories(1, CATEGORIES.length, CATEGORIES),
  }))
);
