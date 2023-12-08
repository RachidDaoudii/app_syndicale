const { Response } = require("../../frameworks/common/response");
const { getAuthByEmailUseCase } = require("../../useCases/auth");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const useCaseInstance = getAuthByEmailUseCase();
    const response = await useCaseInstance.execute(email, password);
    res.json(response);
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
