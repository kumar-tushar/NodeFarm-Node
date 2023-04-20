const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const hostname = req.url;
  if (hostname === "/" || hostname === "/overview") {
    res.end("Overview!");
  } else if (hostname === "/product") {
    res.end("Product!");
  } else if (hostname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page doesn't exist</h1>");
  }
});

server.listen(8000, () => {
  console.log("server is running");
});
