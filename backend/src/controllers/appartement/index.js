const addAppartementController = require("./addAppartement.controller");
const getAllAppartementController = require("./getAllAppartement.controller");
const getAppartementController = require("./getAppartement.controller");
const updateAppartementController = require("./updateAppartement.controller");
const deleteAppartementController = require("./deleteAppartement.controller");

module.exports = () => {
  return {
    addAppartementController,
    getAllAppartementController,
    getAppartementController,
    updateAppartementController,
    deleteAppartementController,
  };
};
