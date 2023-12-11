const jwtToken = require("../../../config/jsonWebToken");

class auth {
  static isSyndicale = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    const { role } = await jwtToken.verify(token);
    switch (role.role) {
      case "syndicale":
        next();
        break;

      default:
        return res.status(401).json({
          status: "error",
          message: "you are not authorized",
        });
    }
  };

  static isAdmin = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    const { role } = await jwtToken.verify(token);
    switch (role.role) {
      case "ADMIN":
        next();
        break;

      default:
        return res.status(401).json({
          status: "error",
          message: "you are not authorized",
        });
    }
  };

  static isAuthenticated = async (req, res, next) => {
    try {
      const token = req.cookies._cks_ui;
      const user = await jwtToken.verify(token);
      if (!token && !user)
        return res.status(401).json({
          status: "error",
          message: "Please log in first",
        });
      next();
    } catch (error) {
      return res.status(401).json({
        status: "error",
        message: "Invalid or expired token",
      });
    }
  };
}

module.exports = auth;
