const addClientUseCase = require("./addClient.useCase");
const getAllClientUseCase = require("./getAllClient.useCase");
const deleteClientUseCase = require("./deleteClient.useCase");
const updateClientUseCase = require("./updateClient.useCase");
const getClientById = require("./getClientById.useCase");
const updateStatusClientUseCase = require("./updateStatusClient.useCase");
const getAllClientByStatusUseCase = require("./getClientByStatus.useCase");

module.exports = {
  addClientUseCase,
  getAllClientUseCase,
  deleteClientUseCase,
  updateClientUseCase,
  getClientById,
  updateStatusClientUseCase,
  getAllClientByStatusUseCase,
};
