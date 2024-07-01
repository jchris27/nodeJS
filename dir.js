const fs = require("fs");

//* Will throw an error if directory exists.
//* To check or verify if a file or directory exists use a condition using existsSync function

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Created!");
  });
}

//deletes the new directory
//if it exists remove it
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory Removed!");
  });
}
