const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

/* fs.readFile("./files/starters.txt", (err, data) => {
  if (err) throw err;

  console.log(data); //output Buffer
  console.log(data.toString()); //output decode buff to string
});

// exit on uncaught errors;
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
*/

// to avoid getting error with path on different OS use path commonjs module
// another way to read a file adding utf8 as a 2nd paramterer
/* fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;

    console.log(data);
  }
); */

// how to create/write a file
// ? Will overwrite the file, if file exists.
/* fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("Write complete!");
  }
); */

// avoid 'callback hell' when creating, appending, renaming
/* fs.writeFile(
  path.join(__dirname, "files", "test.txt"),
  "Testing text.",
  (err) => {
    if (err) throw err;
    console.log("Write complete!");

    // update file
    fs.appendFile(
      path.join(__dirname, "files", "test.txt"),
      "\n\nUpdated a file.",
      (err) => {
        if (err) throw err;
        console.log("Write complete!");

        //renameing file
        fs.rename(
          path.join(__dirname, "files", "test.txt"),
          path.join(__dirname, "files", "newTest.txt"),
          (err) => {
            if (err) throw err;

            console.log("Rename complete!");
          }
        );
      }
    );
  }
); */

// delete a file
/* fs.unlink(path.join(__dirname, "files", "newTest.txt"), (err) => {
  if (err) throw err;
  console.log("Deleted complete!");
}); */

// using await and async method

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "newTest.txt"),
      "utf8"
    );
    console.log(data);

    // delete a data
    await fsPromises.unlink(path.join(__dirname, "files", "newTest.txt"));

    // create a new file
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promise.txt"),
      data
    );
    // update a file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promise.txt"),
      "\n\nAsync Await Promise Update!"
    );
    // rename a file
    await fsPromises.rename(
      path.join(__dirname, "files", "promise.txt"),
      path.join(__dirname, "files", "newPromise.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "newPromise.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
