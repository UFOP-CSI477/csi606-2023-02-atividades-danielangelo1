const City = require("../models/city");

class CityController {
  async index(req, res) {
    try {
      const cities = await City.find();

      return res.json(cities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const cities = await City.findById(req.params.id);

      return res.json(cities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByName(req, res) {
    try {
      const cities = await City.find({ name: req.params.name });

      return res.json(cities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const cities = await City.create(req.body);

      return res.json(cities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const cities = await City.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(cities);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      await City.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new CityController();
