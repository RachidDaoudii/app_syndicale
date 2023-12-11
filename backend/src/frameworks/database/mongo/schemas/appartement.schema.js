const mongoose = require("mongoose");
const validator = require("validator");
const appartementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  description: {
    type: String,
    default: null,
    trim: true,
    minlength: 2,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  city: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  postalCode: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  surface: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  rooms: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  bedrooms: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  floor: {
    type: Number,
    required: true,
    trim: true,
    minlength: 2,
  },
  elevator: {
    type: Boolean,
    required: true,
    trim: true,
    minlength: 2,
  },
  parking: {
    type: Boolean,
    required: true,
    trim: true,
    minlength: 2,
  },
  terrace: {
    type: Boolean,
    required: true,
    trim: true,
    minlength: 2,
  },
  garden: {
    type: Boolean,
    required: true,
    trim: true,
    minlength: 2,
  },
  swimmingPool: {
    type: Boolean,
    required: true,
    trim: true,
    minlength: 2,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});

module.exports = appartementSchema;
