const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Предположим, что ttyd работает на порту 7681
const ttydPort = 7681;

// Настройка прокси для перенаправления запросов на ttyd
const ttydProxy = createProxyMiddleware({
  target: `http://localhost:${ttydPort}`,
  ws: true, // включение поддержки WebSocket, т.к. ttyd использует WebSockets
  logLevel: 'debug',
  changeOrigin: true,
  pathRewrite: {
    '^/terminal': '/', // переписывание пути /terminal на / для ttyd
  },
});

// Применение прокси-мидлвари
app.use('/terminal', ttydProxy);

// Основной маршрут
app.get('/', (req, res) => {
  res.send('Welcome to the Web Terminal Service');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});