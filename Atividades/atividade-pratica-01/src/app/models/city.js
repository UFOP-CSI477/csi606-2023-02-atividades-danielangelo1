const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: String,
    estado_id: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("City", citySchema);
