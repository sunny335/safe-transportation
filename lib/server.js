const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const http = require('http');
const path = require('path');
const isDocker = require('is-docker');

const { REACT_BACKEND_PROD_API } = process.env;

const app = express();

// if (!isDocker()) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: REACT_BACKEND_PROD_API,
//       changeOrigin: true,

//       // rewrite path
//       // so http://localhost:1234/api/instances
//       // becomes http://localhost:3000/instances
//       pathRewrite: {
//         '^/api': '/',
//       },
//     })
//   );
// }

const port = process.env.PORT || 3000;

const server = http.createServer({}, app);
app.use(express.static(`${__dirname}/../dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../dist/index.html`));
});

server.listen(port, () => {
  console.debug(`Client server running at ${port}`);
});
