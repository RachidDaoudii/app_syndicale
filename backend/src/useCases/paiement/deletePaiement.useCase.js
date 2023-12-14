const { Paiement } = require("../../entities/paiement");

const { paiementRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!paiementRepository) {
    throw new Error("The client repository should be exist in dependancies");
  }
  const execute = async (id) => {
    const paiement = new Paiement({
      id,
    });

    const response = await paiementRepository.delete(paiement);

    return response;
  };
  return { execute };
};
