const bcryptjs = require("bcryptjs");
const { Response } = require("../frameworks/common/response");

class bcrypt {
  static async hashPassword(password) {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      return new Response({
        status: 500,
        message: err.message,
        data: {},
      });
    }
  }
  static async comparePassword(password, hashedPassword) {
    try {
      const isMatch = await bcryptjs.compare(password, hashedPassword);
      return isMatch;
    } catch (err) {
      return new Response({
        status: 500,
        message: err.message,
        data: {},
      });
    }
  }
}

module.exports = bcrypt;
