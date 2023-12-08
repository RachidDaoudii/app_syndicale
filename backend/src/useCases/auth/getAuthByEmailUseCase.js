const jsonWebToken = require("../../config/jsonWebToken");
const bcrypt = require("../../config/bcrypt");
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
      return new Response({
        status: 404,
        message: `User with email ${email} does not exist.`,
        data: {},
        errors: null,
      });
    }

    const { _id, first_name, last_name, role } = User;

    const isPasswordCorrect = await bcrypt.comparePassword(
      password,
      User.password
    );

    if (!isPasswordCorrect) {
      return new Response({
        status: 401,
        message: `Password is incorrect.`,
        data: {},
        errors: null,
      });
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
        User,
        token,
      },
      errors: null,
    });
  };
  return { execute };
};
