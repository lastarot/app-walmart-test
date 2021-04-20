const { Schema, model } = require("mongoose");

const Product = Schema({
  id: {
    type: Number,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = model("PRODUCT", Product);
