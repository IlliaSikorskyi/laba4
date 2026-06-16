const http = require('http');
const { URL } = require('url');

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method === 'GET' && parsedUrl.pathname === '/sum') {
    // Отримуємо значення параметрів
    const a = parseFloat(parsedUrl.searchParams.get('a'));
    const b = parseFloat(parsedUrl.searchParams.get('b'));

    // Перевіряємо, чи є обидва значення числами (isNaN перевіряє на "не число")
    if (!isNaN(a) && !isNaN(b)) {
      const sum = a + b;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ sum: sum }));
    } else {
      // Якщо хоча б одне не число або відсутнє
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "Invalid numbers" }));
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);