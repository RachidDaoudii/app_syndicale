const express = require("express");
const { clientController } = require("../../../controllers");
const { isAuthenticated, isSyndicale } = require("../middlewares/auth");

module.exports = (ded) => {
  const router = express.Router();

  const {
    addClientController,
    getAllClientController,
    deleteClientController,
    updateClientController,
    getClientByIdController,
    getAllClientByStatusController,
  } = clientController(ded);

  router
    .route("/")
    .get(isAuthenticated, getAllClientController)
    .post(isAuthenticated, addClientController)
    .delete(isAuthenticated, deleteClientController)
    .patch(isAuthenticated, updateClientController);
  router.route("/status").get(isAuthenticated, getAllClientByStatusController);
  router.route("/:id").get(isAuthenticated, getClientByIdController);

  return router;
};
