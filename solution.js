const http = require('http');

// Отримуємо порт з аргументів командного рядка
const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  // Перевіряємо метод та шлях
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Manual HTTP Router');
  } else {
    // На випадок інших шляхів, хоча вони не тестуються
    res.writeHead(404);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});