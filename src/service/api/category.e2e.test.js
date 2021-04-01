'use strict';

const express = require(`express`);
const request = require(`supertest`);

const categories = require(`./category`);
const DataService = require(`../data-service/category`);

const {mockData} = require(`./category.test-data`);
const {HttpCode} = require(`../cli/const`);

const app = express();
app.use(express.json());
categories(app, new DataService(mockData));

describe(`API returns category list`, () => {

  let response;

  beforeAll(async () => {
    response = await request(app).get(`/category`);
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`Returns list of 8 categories`, () => expect(response.body.length).toBe(7));

  test(`Category names are "Животные", "Журналы", "Цветы", "Книги", "Разное", "Игры", "Марки"`,
      () => expect(response.body).toEqual(
          expect.arrayContaining([`Животные`, `Журналы`, `Цветы`, `Книги`, `Разное`, `Игры`, `Марки`])
      )
  );

});
