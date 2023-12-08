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
  const execute = async (
    name,
    description,
    price,
    image,
    city,
    address,
    postalCode,
    type,
    surface,
    rooms,
    bedrooms,
    floor,
    elevator,
    parking,
    terrace,
    garden,
    swimmingPool
  ) => {
    const appartement = new Appartemant({
      name,
      description,
      price,
      image,
      city,
      address,
      postalCode,
      type,
      surface,
      rooms,
      bedrooms,
      floor,
      elevator,
      parking,
      terrace,
      garden,
      swimmingPool,
    });

    const response = await appartementRepository.add(appartement);

    return response;
  };
  return { execute };
};
