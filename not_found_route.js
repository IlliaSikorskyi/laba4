const http = require('http');
const { URL } = require('url');

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${port}`);

  // Ваш роутер
  if (req.method === 'GET' && parsedUrl.pathname === '/sum') {
    // ... логіка для /sum, яку ви робили раніше ...
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: 'OK' }));
  } 
  // Обробка "не знайдено" (404)
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(port);