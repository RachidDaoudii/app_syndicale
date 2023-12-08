const express = require("express");
const app = express();
const PORT = 4000;

const routes = require("./frameworks/expressSpecific/routes");

module.exports = {
  start: () => {
    app.use(express.json());
    const apiRoutes = routes();
    app.use("/api/v1", apiRoutes);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  },
};
