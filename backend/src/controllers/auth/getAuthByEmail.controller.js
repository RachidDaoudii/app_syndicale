const { Response } = require("../../frameworks/common/response");
const { getAuthByEmailUseCase } = require("../../useCases/auth");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const useCaseInstance = getAuthByEmailUseCase();
    const response = await useCaseInstance.execute(email, password);

    if (!response) {
      return res.status(404).json(
        new Response({
          status: 404,
          message: "User not found",
          data: response,
        })
      );
    }

    if (!response.data.User.status) {
      return res.status(404).json(
        new Response({
          status: 404,
          message: "User not active",
        })
      );
    }

    await res.cookie("_cks_ui", response.data.token, {
      secure: true,
    });

    return res.status(201).json(
      new Response({
        status: 201,
        message: "User added successfully",
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
