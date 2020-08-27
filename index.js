const path = require('path');
const fs = require('fs');
const colors = require('colors');
const dateFormat = require('dateformat');
const root = path.dirname(require.main.filename)

function write(file, text) {
  if (fs.existsSync(`${root}/log`) == false) {
    fs.mkdirSync(`${root}/log`)
  }

  if (fs.existsSync(`${root}/log/${file}` == false)) {
    fs.createFileSync(file);
  }

  fs.appendFileSync(file, text);
}
dateFormat.masks.logDate = 'dd/mm/yyyy HH:MM:ss'
dateFormat.masks.fileDate = '"date-"dd-mm-yyyy"-time-"HH"h-"MM"m-"ss"s"'

function dateFull() {
  const date = new Date();
  const dateFull = dateFormat(date, 'logDate');
  console.log(dateFormat(date, 'fileDate'))
  return dateFull;
}


let date = new Date();
const pathToLog = `${root}/log/${dateFormat(date, 'fileDate')}-bot.log`;

module.exports = {
  info: (text) => {
    const log = `[${dateFull()} - INFO]: ${text}\n`;
    console.log(log);
    write(pathToLog, log);
  },
  warn: (text) => {
    const log = `[${dateFull()} - WARN]: ${text}\n`;
    console.log(log.brightYellow);
    write(pathToLog, log);
  },
  err: (text, error_code) => {
    if (typeof error_code === 'undefined') {
      var log = `[${dateFull()} - ERROR]: ${text}\n`;
    } else {
      var log = `[${dateFull()} - ERROR (CODE: "${error_code}")]: ${text}\n`;
    }
    console.log(log.red);
    write(pathToLog, log);
  },
  error: (text, error_code) => {
    if (typeof error_code === 'undefined') {
      var log = `[${dateFull()} - ERROR]: ${text}\n`;
    } else {
      var log = `[${dateFull()} - ERROR (CODE: "${error_code}")]: ${text}\n`;
    }
    console.log(log.red);
    write(pathToLog, log);
  },
  fatal: (text, error_code) => {
    if (typeof error_code === 'undefined') {
      var log = `[${dateFull()} - FATAL ERROR]: ${text}\n`;
    } else {
      var log = `[${dateFull()} - FATAL ERROR (CODE: "${error_code}")]: ${text}\n`;
    }
    console.log(log.red);
    write(pathToLog, log);
  },
  trace: (text) => {
    const log = `[${dateFull()} - TRACE]: ${text}\n`;
    console.log(log.brightBlue);
    write(pathToLog, log);
  },
  debug: (text) => {
    const log = `[${dateFull()} - DEBUG]: ${text}\n`;
    console.log(log.green);
    write(pathToLog, log);
  },
};
