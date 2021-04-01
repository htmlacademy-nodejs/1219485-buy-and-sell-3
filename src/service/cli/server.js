'use strict';

const express = require(`express`);
const {
  DEFAULT_PORT,
  HttpCode,
  ExitCode,
  API_PREFIX
} = require(`./const`);
const routes = require(`../api`);
const {getLogger} = require(`../lib/logger`);
const logger = getLogger({name: `api`});

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  logger.debug(`Request on route ${req.url}`);
  res.on(`finish`, () => {
    logger.info(`Response status code ${res.statusCode}`);
  });
  next();
});

app.use(API_PREFIX, routes);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND)
    .send(`Not found`);
  logger.error(`Route not found: ${req.url}`);
});

app.use((err, _req, _res, _next) => {
  logger.error(`An error occured on processing request: ${err.message}`);
});

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = parseFloat(customPort, 10) || DEFAULT_PORT;

    try {
      app.listen(port, (err) => {
        if (err) {
          logger.error(`An error occured on server creation: ${err.message}`);
          process.exit(ExitCode.ERROR);
        }

        return logger.info(`Listening to connections on ${port}`);
      });
    } catch (err) {
      logger.error(`An error occured: ${err.message}`);
      process.exit(ExitCode.ERROR);
    }
  }
};
