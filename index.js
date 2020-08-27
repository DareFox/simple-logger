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

function dateFull() {
  const date = new Date();
  const dateFull = dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
  return dateFull;
}

let date, hour, minute, second, dateDMY;

date = new Date();
hour = dateFormat(date, 'hh');
minute = dateFormat(date, 'MM'); // MM - For minutes
second = dateFormat(date, 'ss');
dateDMY = dateFormat(date, 'dd-mm-yyyy'); // mm - For month

const pathToLog = `${root}/log/date-${dateDMY}-time-${hour}h-${minute}m-${second}s-bot.log`;

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
