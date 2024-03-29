const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
  {
    person_id: String,
    local_id: Number,
    data: Date,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Donation", DonationSchema);
