// How NodeJS differs from Vanilla JS

// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is in the terminal window
// console.log("Hello World");

// 3) global object instead of window object
// console.log(global);

// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// ES6 modules - import something from '';
//CommonJS Modules

/*
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname); //directory name with the whole path
console.log(__filename); // filename with the whole path

console.log(path.dirname(__filename)); //same as __filename
console.log(path.basename(__filename)); //will just output the name of the file
console.log(path.extname(__filename)); //will output the extension name only

console.log(path.parse(__filename)); //return an object that holds all the information on the file
*/

// if it is not a common core module we have to add the path directory of the module
// const math = require("./math");

// using destructure instead of using . notation.
const { add, subtract, multiply, divide } = require("./math");

console.log(add(1, 1));

// 6) Missing some JS API like fetch
