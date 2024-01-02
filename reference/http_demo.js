const http = require("http");

// Create Server

http
  .createServer((req, res) => {
    res.write("Hello, world");
    res.end();
  })
  .listen(5000, () => console.log("Server Running..."));
