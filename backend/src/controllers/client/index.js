const addClientController = require("./addClient.controller");
const getAllClientController = require("./getAllClient.controller");

module.exports = () => {
  return {
    addClientController,
    getAllClientController,
  };
};
