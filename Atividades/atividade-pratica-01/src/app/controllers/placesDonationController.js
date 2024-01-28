const PlacesDonation = require("../models/placesDonation");

class placesDonationController {
  async index(req, res) {
    try {
      const placesDonation = await PlacesDonation.find();

      return res.json(placesDonation);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const placesDonation = await PlacesDonation.findById(req.params.id);

      return res.json(placesDonation);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByName(req, res) {
    try {
      const placesDonation = await PlacesDonation.find({
        name: req.params.name,
      });

      return res.json(placesDonation);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const placesDonation = await PlacesDonation.create(req.body);

      return res.json(placesDonation);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const placesDonation = await PlacesDonation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        },
      );

      return res.json(placesDonation);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      await PlacesDonation.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new placesDonationController();
