const { Response } = require("../../frameworks/common/response");
const { getClientById } = require("../../useCases/client");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const useCaseInstance = getClientById();
    const response = await useCaseInstance.execute(id);

    if (!response) {
      return res.json(
        new Response({
          status: 404,
          message: "client not found",
          data: {},
        })
      );
    }

    return res.json(
      new Response({
        status: 200,
        message: "client found successfully",
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
