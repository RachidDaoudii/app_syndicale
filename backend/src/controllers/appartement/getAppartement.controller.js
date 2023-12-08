const { Response } = require("../../frameworks/common/response");
const { getAppartementUseCase } = require("../../useCases/appartement");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getAppartementUseCase();
    const response = await useCaseInstance.execute(id);

    if (!response) {
      return res.json(
        new Response({
          status: 404,
          message: "Appartement not found",
          data: {},
        })
      );
    }

    return res.json(
      new Response({
        status: 200,
        message: "Appartement found successfully",
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
