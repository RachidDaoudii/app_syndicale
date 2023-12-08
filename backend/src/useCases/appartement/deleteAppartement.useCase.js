const { Appartemant } = require("../../entities/appartement");
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
    const appartement = new Appartemant({
      id,
    });

    const response = await appartementRepository.delete(appartement);

    return response;
  };
  return { execute };
};
