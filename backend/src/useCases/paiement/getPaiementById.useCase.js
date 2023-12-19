const { paiementRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!paiementRepository) {
    throw new Error("The paiement repository should be exist in dependancies");
  }
  const execute = async (id) => {
    const response = await paiementRepository.getById(id);

    return response;
  };
  return { execute };
};
