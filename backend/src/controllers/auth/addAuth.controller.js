const { Response } = require("../../frameworks/common/response");
const { addAuthUseCase } = require("../../useCases/auth");

module.exports = async (req, res) => {
  try {
    const { email, password, first_name, last_name } = req.body;

    const useCaseInstance = addAuthUseCase();
    const response = await useCaseInstance.execute(
      first_name,
      last_name,
      email,
      password
    );

    res.json(
      new Response({
        status: 200,
        message: "User added successfully",
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
