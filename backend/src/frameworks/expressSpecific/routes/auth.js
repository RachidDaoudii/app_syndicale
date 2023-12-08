const express = require("express");
const { authController } = require("../../../controllers");

module.exports = () => {
  const router = express.Router();

  const { addAuthController, getAuthByEmailController } = authController();

  router.post("/register", addAuthController);

  router.post("/login", getAuthByEmailController);

  return router;
};
