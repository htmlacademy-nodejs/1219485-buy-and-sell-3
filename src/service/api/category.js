'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../cli/const`);

module.exports = (app, service) => {
  const route = new Router();
  app.use(`/category`, route);

  route.get(`/`, async (req, res) => {
    const categories = await service.findAll();
    res.status(HttpCode.OK)
      .json(categories);
  });
};
