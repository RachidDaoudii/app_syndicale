const express = require("express");
const { paiementController } = require("../../../controllers");
const { isAuthenticated, isSyndicale } = require("../middlewares/auth");

module.exports = (ded) => {
  const router = express.Router();

  const {
    addPaiementController,
    getAllPaiementController,
    deletePaiementController,
    updatePaiementController,
    getPaiementByIdController,
  } = paiementController(ded);

  router
    .route("/")
    .post(isAuthenticated, addPaiementController)
    .get(isAuthenticated, getAllPaiementController)
    .delete(isAuthenticated, deletePaiementController)
    .patch(isAuthenticated, updatePaiementController);

  router.route("/:id").get(isAuthenticated, getPaiementByIdController);

  return router;
};
