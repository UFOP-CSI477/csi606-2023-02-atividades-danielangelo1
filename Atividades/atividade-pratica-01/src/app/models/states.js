const mongoose = require("mongoose");

const statesSchema = new mongoose.Schema(
  {
    name: String,
    uf: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("States", statesSchema);
