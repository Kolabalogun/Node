// const person = require("./person");

// console.log(person);

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "/public", "index.html"),
      "utf8",
      (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      {
        name: "John",
        age: 34,
      },
      {
        name: "Smith",
        age: 56,
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`listening on ${PORT}`));
