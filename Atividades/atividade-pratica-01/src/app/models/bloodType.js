const mongoose = require("mongoose");

const bloodTypeSchema = new mongoose.Schema(
  {
    type: String,
    factor: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BloodType", bloodTypeSchema);
