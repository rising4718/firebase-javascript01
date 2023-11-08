const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
