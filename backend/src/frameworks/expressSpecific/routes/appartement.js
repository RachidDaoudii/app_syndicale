const express = require("express");
const { appartementController } = require("../../../controllers");

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
    .post(addAppartementController)
    .get(getAllAppartementController)
    .delete(deleteAppartementController)
    .patch(updateAppartementController);

  router.route("/:id").get(getAppartementController);

  return router;
};
