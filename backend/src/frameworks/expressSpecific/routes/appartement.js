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
  } = appartementController(ded);

  router
    .route("/")
    .post(isAuthenticated, addAppartementController)
    .get(getAllAppartementController)
    .delete(isAuthenticated, deleteAppartementController)
    .patch(isAuthenticated, updateAppartementController);

  router.route("/:id").get(getAppartementController);

  return router;
};
