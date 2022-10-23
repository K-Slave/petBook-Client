import express from "express";
import next from "next";
import { createProxyMiddleware } from "http-proxy-middleware";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// const handle = app.getRequestHandler();

const apiPaths = {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {
      "^/api": `${process.env.NEXT_PUBLIC_SPR_URL as string}`,
    },
    changeOrigin: true,
  },
};
const middleWare = () => {
  app
    .prepare()
    .then(() => {
      const server = express();

      if (dev) {
        server.use("/api", createProxyMiddleware(apiPaths["/api"]));
      }

      // server.all("*", (req, res) => {
      //    return handle(req, res);
      // });

      server.listen(port, () => {
        console.log(`> Proxy Ready on http://localhost:${port} `);
      });
    })
    .catch((err) => {
      console.log("Error:::::");
    });
};

export default middleWare;
