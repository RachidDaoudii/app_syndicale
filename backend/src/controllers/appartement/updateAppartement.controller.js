const { Response } = require("../../frameworks/common/response");

const { updateAppartementUseCase } = require("../../useCases/appartement");
module.exports = async (req, res) => {
  try {
    const { id, ...updates } = req.body;
    const updateCategory = updateAppartementUseCase();
    const response = await updateCategory.execute({
      id,
      updates,
    });

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
        message: "update Appartement successfully",
        data: response,
      })
    );
  } catch (err) {
    return res.json(
      new Response({
        status: 500,
        message: err.message,
        data: {},
      })
    );
  }
};
