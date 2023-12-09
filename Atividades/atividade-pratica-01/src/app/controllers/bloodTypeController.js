const BloodType = require("../models/bloodType");

class bloodTypeController {
  async index(req, res) {
    try {
      const bloodTypes = await BloodType.find();

      return res.json(bloodTypes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const bloodTypes = await BloodType.findById(req.params.id);

      return res.json(bloodTypes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByType(req, res) {
    try {
      const bloodTypes = await BloodType.find({ type: req.params.type });

      return res.json(bloodTypes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const bloodTypes = await BloodType.create(req.body);

      return res.json(bloodTypes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const bloodTypes = await BloodType.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      return res.json(bloodTypes);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      await BloodType.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new bloodTypeController();
