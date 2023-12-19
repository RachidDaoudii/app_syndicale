const { Response } = require("../../frameworks/common/response");
const { clientRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!clientRepository) {
    throw new Error(
      "The appartement repository should be exist in dependancies"
    );
  }
  const execute = async () => {
    const response = await clientRepository.getAllByStatus();

    return response;
  };
  return { execute };
};
