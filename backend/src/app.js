const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 4000;
const { connect: connectMongo } = require("./frameworks/database/mongo");
const routes = require("./frameworks/expressSpecific/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

module.exports = {
  start: () => {
    app.use(express.json());
    app.use(cors());
    const apiRoutes = routes();
    app.use("/api/v1", apiRoutes);
    app.use(bodyParser.json());
    // app.use(cookieParser());

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      connectMongo();
    });
  },
};
