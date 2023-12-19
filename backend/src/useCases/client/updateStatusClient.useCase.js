const { clientRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!clientRepository) {
    throw new Error("The client repository should be exist in dependancies");
  }
  const execute = async (client) => {
    const response = await clientRepository.updateStatus(client);

    return response;
  };
  return { execute };
};
