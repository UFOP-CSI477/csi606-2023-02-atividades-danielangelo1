const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    rg: String,
    cidade_id: Number,
    tipo_id: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Person", PersonSchema);
