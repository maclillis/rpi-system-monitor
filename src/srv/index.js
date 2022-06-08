/* eslint-disable no-unused-vars */
import express from "express";
const history = require("connect-history-api-fallback");
import cors from "cors";
import { resolve } from "path";
const app = express();

export default (app, http) => {
  app.use(
    cors({
      origin: "*",
    })
  );

  app.get("/", (req, res) => {
    res.console.log("started!");
  });

  app.listen(5000);

  /*const publicPath = resolve(__dirname, "../../dist");
  const staticConf = { maxAge: "1y", etag: false };
  app.use(express.static(publicPath, staticConf));
  app.use("/", history());*/
};
