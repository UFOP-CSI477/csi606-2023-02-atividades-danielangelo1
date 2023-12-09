const Donation = require("../models/donation");

class DonationController {
  async index(req, res) {
    try {
      const donations = await Donation.find();

      return res.json(donations);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async show(req, res) {
    try {
      const donation = await Donation.findById(req.params.id);

      return res.json(donation);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async showByPerson(req, res) {
    try {
      const donation = await Donation.find({ person_id: req.params.person_id });

      return res.json(donation);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async showByLocal(req, res) {
    try {
      const donation = await Donation.find({ local_id: req.params.local_id });

      return res.json(donation);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async store(req, res) {
    try {
      const donation = await Donation.create(req.body);

      return res.json(donation);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async update(req, res) {
    try {
      const donation = await Donation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      return res.json(donation);
    } catch (e) {
      return res.status(400).send(e);
    }
  }

  async destroy(req, res) {
    try {
      await Donation.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (e) {
      return res.status(400).send(e);
    }
  }
}

module.exports = new DonationController();
