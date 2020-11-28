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

const shuffleAnyEntity = (entities) => {
  for (let i = entities.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [entities[i], entities[randomPosition]] = [entities[randomPosition], entities[i]];
  }

  return entities;
};

const createCategoriesArray = (min, max, category) => {
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

const getPictureFileName = (number) => number > 10 ? `item${number}.jpg` : `item0${number}.jpg`;

module.exports.generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInteger(0, TITLES.length - 1)],
    picture: getPictureFileName(getRandomInteger(PictureRestrict.MIN, PictureRestrict.MAX)),
    description: shuffleAnyEntity(SENTENCES).slice(1, 5).join(` `),
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInteger(SumRestrict.MIN, SumRestrict.MAX),
    category: createCategoriesArray(1, CATEGORIES.length, CATEGORIES),
  }))
);
