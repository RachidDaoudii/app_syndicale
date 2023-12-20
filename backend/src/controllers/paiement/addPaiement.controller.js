const { Response } = require("../../frameworks/common/response");
const { addPaiementUseCase } = require("../../useCases/paiement");
const {
  updateStatusAppartementUseCase,
} = require("../../useCases/appartement");
const { updateStatusClientUseCase } = require("../../useCases/client");

module.exports = async (req, res) => {
  try {
    const { appartement, client, datePaiement, montant } = req.body;

    const useCaseInstanceUpdate = updateStatusAppartementUseCase();

    const useCaseInstanceUpdateClient = updateStatusClientUseCase();

    const responseUpdateClient = await useCaseInstanceUpdateClient.execute({
      _id: client,
      status: true,
    });

    if (!responseUpdateClient) {
      throw new Error("Client not found");
    }

    const responseUpdate = await useCaseInstanceUpdate.execute({
      _id: appartement,
      status: true,
    });

    if (!responseUpdate) {
      throw new Error("Appartement not found");
    }
    const useCaseInstance = addPaiementUseCase();
    const response = await useCaseInstance.execute(
      appartement,
      client,
      datePaiement,
      montant
    );

    return res.status(201).json(
      new Response({
        status: 200,
        message: "Paiement added successfully",
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
