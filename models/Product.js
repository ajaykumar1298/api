const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: null,
  },
});

module.exports = mongoose.model("Product", ProductSchema, "reactapi");
