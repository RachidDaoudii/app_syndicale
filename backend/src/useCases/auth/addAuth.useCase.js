const bcrypt = require("../../config/bcrypt");
const { Auth } = require("../../entities");
const { authRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!authRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = async (first_name, last_name, email, password) => {
    const user = new Auth({
      first_name,
      last_name,
      email,
      password: await bcrypt.hashPassword(password),
    });

    return authRepository.add(user);
  };
  return { execute };
};
