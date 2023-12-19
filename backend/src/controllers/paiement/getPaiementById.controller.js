const { Response } = require("../../frameworks/common/response");
const { getPaiementById } = require("../../useCases/paiement");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getPaiementById();
    const response = await useCaseInstance.execute(id);

    if (!response) {
      return res.json(
        new Response({
          status: 404,
          message: "paiement not found",
          data: {},
        })
      );
    }

    return res.json(
      new Response({
        status: 200,
        message: "paiement found successfully",
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
