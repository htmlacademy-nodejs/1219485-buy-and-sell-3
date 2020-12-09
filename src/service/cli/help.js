'use strict';

<<<<<<< HEAD
const chalk = require(`chalk`);
=======
const logger = require(`./logger`);
>>>>>>> d5a96b9... M2-T1-A2 Учебный

module.exports = {
  name: `--help`,
  run() {
    const text = `
    Программа запускает http-сервер и формирует файл с данными для api.
    Гайд:

      server <command>

      Команды:
      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate <count>    формирует файл mocks.json
    `;

<<<<<<< HEAD
    console.log(chalk.gray(text));
=======
    logger.help(text);
>>>>>>> d5a96b9... M2-T1-A2 Учебный
  }
};
