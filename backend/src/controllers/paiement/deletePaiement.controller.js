const { Response } = require("../../frameworks/common/response");
const { updateStatusClientUseCase } = require("../../useCases/client");
const {
  updateStatusAppartementUseCase,
} = require("../../useCases/appartement");
const { deletePaiementUseCase } = require("../../useCases/paiement");

module.exports = async (req, res) => {
  try {
    const { id, client, appartement } = req.body;

    const useCaseInstance = deletePaiementUseCase();
    const response = await useCaseInstance.execute(id);

    const useCaseInstanceClient = updateStatusClientUseCase();
    const responseClient = await useCaseInstanceClient.execute({
      _id: client,
      status: false,
    });

    if (!responseClient) {
      return res.json(
        new Response({
          status: 404,
          message: "Client not found",
          data: {},
        })
      );
    }

    const useCaseInstanceAppartement = updateStatusAppartementUseCase();
    const responseAppartement = await useCaseInstanceAppartement.execute({
      _id: appartement,
      status: false,
    });

    if (!responseAppartement) {
      return res.json(
        new Response({
          status: 404,
          message: "Appartement not found",
          data: {},
        })
      );
    }

    if (!response) {
      return res.json(
        new Response({
          status: 404,
          message: "Paiement not found",
          data: {},
        })
      );
    }

    return res.json(
      new Response({
        status: 200,
        message: "Paiement deleted successfully",
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
