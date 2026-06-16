const http = require('http');

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  // Обробка маршруту /time
  if (req.method === 'GET' && req.url === '/time') {
    const responseBody = {
      now: new Date().toISOString()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseBody));
  } else {
    // Якщо потрібно підтримувати попередній маршрут, можна додати умову для '/'
    res.writeHead(404);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});