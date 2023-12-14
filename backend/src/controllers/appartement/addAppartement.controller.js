const { Response } = require("../../frameworks/common/response");
const { addAppartementUseCase } = require("../../useCases/appartement");

module.exports = async (req, res) => {
  try {
    const {
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
      user,
    } = req.body;

    const useCaseInstance = addAppartementUseCase();
    const response = await useCaseInstance.execute(
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
      user
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
