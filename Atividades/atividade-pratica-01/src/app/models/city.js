const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: String,
    estado_id: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("City", citySchema);
