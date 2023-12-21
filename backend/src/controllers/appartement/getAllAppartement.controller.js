const jsonWebToken = require("../../config/jwt");
const { Response } = require("../../frameworks/common/response");
const { getAllAppartementUseCase } = require("../../useCases/appartement");

module.exports = async (req, res) => {
  try {
    const token = req.cookies._cks_ui;
    const decoded = await jsonWebToken.verify(token);
    const useCaseInstance = getAllAppartementUseCase();
    const response = await useCaseInstance.execute();

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
