const http = require('http');
const { URL } = require('url'); // Вбудований модуль для роботи з URL

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  // Створюємо об'єкт URL для парсингу шляху та параметрів
  const parsedUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method === 'GET' && parsedUrl.pathname === '/echo') {
    // Отримуємо значення параметра "msg"
    const message = parsedUrl.searchParams.get('msg') || '';

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);