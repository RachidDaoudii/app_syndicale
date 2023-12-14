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
  const execute = async () => {
    const response = await appartementRepository.getAll();
    return response;
  };
  return { execute };
};
