const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
<!DOCTYPE html>
<html>
<head><title>Hello World</title>
<style>
  body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #0f172a; color: #e2e8f0; }
  h1 { font-size: 48px; color: #38bdf8; }
  p { color: #94a3b8; text-align: center; }
</style>
</head>
<body>
<div>
  <h1>It works!</h1>
  <p>Deployed on BIGVPS via git push</p>
</div>
</body>
</html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
