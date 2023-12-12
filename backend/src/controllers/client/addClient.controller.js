const { Response } = require("../../frameworks/common/response");
const { addClientUseCase } = require("../../useCases/client");

module.exports = async (req, res) => {
  try {
    const { cin, image, first_name, last_name, email, phone } = req.body;

    const useCaseInstance = addClientUseCase();
    const response = await useCaseInstance.execute(
      cin,
      image,
      first_name,
      last_name,
      email,
      phone
    );

    return res.status(201).json(
      new Response({
        status: 200,
        message: "Client added successfully",
        data: response,
      })
    );
  } catch (err) {
    return res.status(400).json(
      new Response({
        status: 400,
        message: err.message,
        data: {},
      })
    );
  }
};
