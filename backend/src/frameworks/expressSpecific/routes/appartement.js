const express = require("express");
const { appartementController } = require("../../../controllers");
const { isAuthenticated, isSyndicale } = require("../middlewares/auth");

module.exports = (ded) => {
  const router = express.Router();

  const {
    addAppartementController,
    getAllAppartementController,
    getAppartementController,
    deleteAppartementController,
    updateAppartementController,
    getAppartementByStatusController,
  } = appartementController(ded);

  router
    .route("/")
    .post(isAuthenticated, addAppartementController)
    .get(isAuthenticated, getAllAppartementController)
    .delete(isAuthenticated, deleteAppartementController)
    .patch(isAuthenticated, updateAppartementController);
  router
    .route("/status")
    .get(isAuthenticated, getAppartementByStatusController);

  router.route("/:id").get(isAuthenticated, getAppartementController);

  return router;
};
