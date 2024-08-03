const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://52.78.188.110:8001",
      changeOrigin: true,
    })
  );
};
