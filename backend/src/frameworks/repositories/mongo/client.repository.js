const mongoose = require("mongoose");
const entityName = "Client";

const {
  schemas: { client: clientSchema },
} = require("../../database/mongo");

const repository = () => {
  const Client = mongoose.model(entityName, clientSchema);
  return {
    add: async (client) => {
      const mongoObject = new Client(client);
      return mongoObject.save();
    },
    update: async (client) => {
      const { _id, updates } = client;
      const _client = Client.findByIdAndUpdate(
        _id,
        {
          ...updates,
          updatedAt: new Date(),
        },
        {
          new: true,
        }
      );

      return _client;
    },
    delete: async (client) => {
      const { id } = client;
      const _client = await Client.findByIdAndDelete(
        id,
        {
          deletedAt: new Date(),
        },
        {
          new: true,
        }
      );

      return _client;
    },
    getById: async (id) => {
      const client = await Client.findOne({
        _id: id,
        deletedAt: {
          $exists: false,
        },
      });
      return client;
    },
    getAll: async () => {
      const client = await Client.find();

      return client;
    },
    updateStatus: async (client) => {
      const { _id } = client;
      const _client = await Client.findByIdAndUpdate(
        _id,
        {
          status: true,
        },
        {
          new: true,
        }
      );
      return _client;
    },
    getAllByStatus: async () => {
      const client = await Client.find({
        status: false,
      });

      return client;
    },
  };
};

module.exports = repository();
