const express = require("express");
const { paiementController } = require("../../../controllers");

module.exports = (ded) => {
  const router = express.Router();

  const { addPaiementController, getAllPaiementController } =
    paiementController(ded);

  router.post("/", addPaiementController);
  router.get("/", getAllPaiementController);

  return router;
};
