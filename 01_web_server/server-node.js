const http = require('http');
const hostname = '127.0.0.1';
const port = 9000

const server =http.createServer((req,res) => {
    if (req.url === "/") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.end("Hello take cols drink");
    } else if (req.url === "/ice-tea") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");
      res.end("Thanks for ordering the tea");
    } else  {
      res.statusCode = 404;
      res.setHeader("Content-type", "text/plain");
      res.end("404 Not found");
    }
})

server.listen(port,hostname,() => {
    console.log(`servere is listening at http://${hostname}:${port}`)
})