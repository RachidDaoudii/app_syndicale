const { Response } = require("../../frameworks/common/response");
const {
  appartementRepository,
} = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!appartementRepository) {
    throw new Error(
      "The appartement repository should be exist in dependancies"
    );
  }
  const execute = async (id) => {
    const response = await appartementRepository.getById(id);

    return response;
  };
  return { execute };
};
