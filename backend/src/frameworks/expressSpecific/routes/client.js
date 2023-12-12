const express = require("express");
const { clientController } = require("../../../controllers");

module.exports = (ded) => {
  const router = express.Router();

  const { addClientController, getAllClientController } = clientController(ded);

  router.post("/", addClientController);
  router.get("/", getAllClientController);

  return router;
};
