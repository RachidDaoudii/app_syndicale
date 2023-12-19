const { clientRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!clientRepository) {
    throw new Error("The client repository should be exist in dependancies");
  }
  const execute = async (id) => {
    const response = await clientRepository.getById(id);

    return response;
  };
  return { execute };
};
