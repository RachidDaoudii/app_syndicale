const jwt = require("jsonwebtoken");
class jsonWebToken {
  static async sign(payload) {
    try {
      const token = await jwt.sign(payload, process.env.SECRET_KEY_TOKEN, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      return token;
    } catch (err) {
      console.log(err);
    }
  }
  static async verify(token) {
    try {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY_TOKEN);
      return decoded;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = jsonWebToken;
