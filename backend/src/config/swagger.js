const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API",
      description: "API Application Syndicale",

      contact: {
        name: "Rachid Daoudi",
      },
      servers: [
        {
          url: "http://localhost:4000/api/v1",
        },
      ],

      version: "1.0.0",
    },
  },

  apis: ["../frameworks/expressSpecific/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
