const express = require("express");
const authRouter = require("./auth");
const appartementRouter = require("./appartement");

module.exports = (app) => {
  const routes = express.Router();
  routes.use("/auth", authRouter());
  routes.use("/appartement", appartementRouter());

  return routes;
};
