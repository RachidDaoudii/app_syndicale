const express = require("express");
const authRouter = require("./auth");

module.exports = (app) => {
  const routes = express.Router();
  routes.use("/auth", authRouter());

  return routes;
};
