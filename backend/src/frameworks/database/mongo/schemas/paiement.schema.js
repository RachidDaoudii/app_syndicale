const mongoose = require("mongoose");
const validator = require("validator");

const entityNameappartement = "appartement";
const appartementSchema = require("../schemas/appartement.schema");
const appartement = mongoose.model(entityNameappartement, appartementSchema);
const entityNameclient = "client";
const clientSchema = require("../schemas/client.schema");
const client = mongoose.model(entityNameclient, clientSchema);
const paiementSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  montant: {
    type: Number,
    required: true,
    trim: true,
  },
  appartement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appartement",
    required: true,
  },
  datePaiement: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

module.exports = paiementSchema;
