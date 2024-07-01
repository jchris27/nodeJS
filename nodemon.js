// shortcut for install dev dependencies
// npm i <package name> -D

// install a specific version
// npm i <package name>@<version>

// uninstall packages
// npm uninstall <package name> -g -D *none depending on where you install as a dev dependency or a product dependency

// package.json symbols
// ^ = use/install minor and patch if needed but not the major version
// * = use/install always the the absolute version every time (not to safe)
// ~ = use/install patch only version
// none = use/install only the specific version

// Import your modeule
const logEvents = require("./logEvents");

// Events Common Core Module
const EventEmitter = require("events");

// define a class
class MyEmitter extends EventEmitter {} // read docs for information

//initialize the object
const myEmitter = new MyEmitter();

// add listener for the log events
myEmitter.on("logs", (msg, d) => logEvents(msg, d));

// emit the event
setTimeout(() => {
  myEmitter.emit("logs", "Log event emitted!", "Details");
}, 2000);
