const { Request } = require("../../config/request");
const { Client } = require("../../entities/client");
const { clientRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!clientRepository) {
    throw new Error(
      "The appartement repository should be exist in dependancies"
    );
  }
  const execute = async (cin, image, first_name, last_name, email, phone) => {
    const client = new Client({
      cin,
      //   image,
      first_name,
      last_name,
      email,
      phone,
    });

    const request = new Request();
    const validation = request.client().validate(client);

    if (validation.error) {
      throw new Error(validation.error.message);
    }

    const response = await clientRepository.add(client);
    return response;
  };
  return { execute };
};
