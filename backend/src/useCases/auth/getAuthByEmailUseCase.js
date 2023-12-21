const jsonWebToken = require("../../config/jwt");
const bcrypt = require("../../config/_bcrypt");
const { Auth } = require("../../entities");
const { Response } = require("../../frameworks/common/response");
const { authRepository } = require("../../frameworks/repositories/mongo");

module.exports = () => {
  if (!authRepository) {
    throw new Error("The users repository should be exist in dependancies");
  }
  const execute = async (email, password) => {
    const user = new Auth({
      email,
      password,
    });

    const User = await authRepository.getByEmail(user);

    if (!User) {
      return false;
    }

    const { _id, first_name, last_name, isAuth, status } = User;

    const isPasswordCorrect = await bcrypt.comparePassword(
      password,
      User.password
    );

    if (!isPasswordCorrect) {
      return false;
    }

    const token = await jsonWebToken.sign({
      _id,
      first_name,
      last_name,
      email,
    });

    return new Response({
      status: 200,
      message: `User with email ${email} exist.`,
      data: {
        User: {
          _id,
          first_name,
          last_name,
          email,
          status,
          isAuth: true,
        },
        token,
      },
      errors: null,
    });
  };
  return { execute };
};
