const mongoose = require("mongoose");

const PlacesDonationSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    cidade_id: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PlacesDonation", PlacesDonationSchema);
