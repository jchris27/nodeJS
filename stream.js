// reading a big file
// using stream to break down into chunks

const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"));

// read stream
rs.on("data", (dataChunk) => {
  console.log(dataChunk);
});

// create new stream
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// piping is more efficient when writing
rs.pipe(ws);
