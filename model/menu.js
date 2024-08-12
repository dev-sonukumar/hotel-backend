const mongoose = require("mongoose");

const menuSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    required: true,
    enum: ["sweet", "spicy", "sour"],
  },
  isDrink: {
    type: Boolean,
    required: true,
    default: false,
  },
  ingredients: {
    type: [String],
    required: true,
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const menu = mongoose.model("menu", menuSchemas);

module.exports = menu;
