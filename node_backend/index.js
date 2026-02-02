const http = require("http");
const PORT = 4007;
const server = http.createServer((req, res) => {
  // res.setHeader('content-type','text/html')
  // res.end("<h2 style=color:red> Hello Welcome to Node Server </h2>");

  if (req.url == "/msg" && req.method == "GET") {
    res.setHeader("content-type", "text/html");
    res.end("<h2 style=color:red> Hello Welcome to Node Server </h2>");
  }

  if (req.url == "/data" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON data" }));
  }

  if (req.url == "/data" && req.method == "POST") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON POST data" }));
  }

  if (req.url == "/data" && req.method == "DELETE") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON delete data" }));
  }
});

server.listen(PORT, () => {
  console.log(`Service is availabe at ${PORT}`);
});
