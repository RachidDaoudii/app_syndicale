const addPaiementController = require("./addPaiement.controller");
const getAllPaiementController = require("./getAllPaiment.controller");

module.exports = () => {
  return {
    addPaiementController,
    getAllPaiementController,
  };
};
