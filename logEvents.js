// Logging Module
const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");

//ways of importing UUID
// const uuid = require('uuid');
// const {v4} = require('uuid');
// Similar to es6 import v4 as uuid from 'uuid';
const { v4: uuid } = require("uuid");

const logEvents = async (message, details) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\t${details}\n`;

  try {
    if (!details) throw new Error("details parameter required");
    // create a directory to store the logs
    if (!fs.existsSync("./logs")) {
      await fsPromises.mkdir(path.join(__dirname, "./logs"));
    }
    // append the logs but will not create the directory
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLogs.txt"),
      logItem
    );
    console.log(logItem);
  } catch (err) {
    const errItem = `${dateTime}\t${uuid()}\t${err.toString()}\n`;
    if (!fs.existsSync("./logs")) {
      await fsPromises.mkdir(path.join(__dirname, "./logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "errorLogs.txt"),
      errItem
    );
  }
};

module.exports = logEvents;
