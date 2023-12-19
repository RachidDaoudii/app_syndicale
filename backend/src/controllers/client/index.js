const addClientController = require("./addClient.controller");
const getAllClientController = require("./getAllClient.controller");
const deleteClientController = require("./deleteClient.controller");
const updateClientController = require("./updateClient.controller");
const getClientByIdController = require("./getClientById.controller");
const getAllClientByStatusController = require("./getAllClientByStatus.controller");

module.exports = () => {
  return {
    addClientController,
    getAllClientController,
    deleteClientController,
    updateClientController,
    getClientByIdController,
    getAllClientByStatusController,
  };
};
