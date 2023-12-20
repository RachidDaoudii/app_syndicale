const { Request } = require("../../config/request");
const { Appartemant } = require("../../entities/appartement");
const {
  appartementRepository,
} = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!appartementRepository) {
    throw new Error(
      "The appartement repository should be exist in dependancies"
    );
  }

  const execute = async (
    number,
    price,
    status,
    city,
    address,
    surface,
    rooms,
    bedrooms,
    parking,
    garden
  ) => {
    const appartement = new Appartemant({
      number,
      price,
      status,
      city,
      address,
      surface,
      rooms,
      bedrooms,
      parking,
      garden,
    });

    const request = new Request();
    const validation = request.appartement().validate(appartement);

    if (validation.error) {
      throw new Error(validation.error.message);
    }

    const response = await appartementRepository.add(appartement);
    return response;
  };
  return { execute };
};
