const { Response } = require("../../frameworks/common/response");
const { addAppartementUseCase } = require("../../useCases/appartement");

module.exports = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const useCaseInstance = addAppartementUseCase();
    const response = await useCaseInstance.execute(
      name,
      description,
      price,
      // image,
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
    );

    res.json(
      new Response({
        status: 200,
        message: "Appartement added successfully",
        data: response,
      })
    );
  } catch (err) {
    res.json(
      new Response({
        status: 500,
        message: err.message,
        data: {},
      })
    );
  }
};
