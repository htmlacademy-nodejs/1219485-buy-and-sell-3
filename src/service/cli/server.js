'use strict';

const express = require(`express`);
const logger = require(`./logger`);
const {
  DEFAULT_PORT,
  HttpCode,
  ExitCode,
  API_PREFIX
} = require(`./const`);
const routes = require(`../api`);

const app = express();
app.use(express.json());
app.use(API_PREFIX, routes);

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = parseFloat(customPort, 10) || DEFAULT_PORT;

    try {
      app.listen(port, (err) => {
        if (err) {
          logger.error(`Ошибка при создании сервера`, err);
          process.exit(ExitCode.ERROR);
        }

        return logger.success(`Ожидаю соединений на ${port}`);
      });
    } catch (err) {
      console.error(`Произошла ошибка: ${err.message}`);
      process.exit(ExitCode.ERROR);
    }
  }
};
