const fs = require("fs");

const path = require("path");

// Create Folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;

//   console.log("Folders created");
// });

// Create and Write File

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world",
//   (err) => {
//     if (err) throw err;
//     console.log("File created");

//     // Append FIle
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       ". I love Node",
//       (err) => {
//         if (err) throw err;
//         console.log("File created");
//       }
//     );
//   }
// );

// Append FIle
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   ". I love Node",
//   (err) => {
//     if (err) throw err;
//     console.log("File created");
//   }
// );

// Read File
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// Rename File
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "Renamed.txt"),
//   (err) => {
//     if (err) throw err;

//     console.log("File renamed");
//   }
// );

fs.writeFile(path.join(__dirname, "url_Demo.js"), "", (err) => {
  if (err) throw err;

  console.log("os file created");
});
