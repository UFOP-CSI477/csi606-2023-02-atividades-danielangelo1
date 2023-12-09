const state = require("../models/states");

class stateController {
  async index(req, res) {
    try {
      const states = await state.find();

      return res.json(states);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const states = await state.findById(req.params.id);

      return res.json(states);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByName(req, res) {
    try {
      const states = await state.find({ name: req.params.name });

      return res.json(states);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const states = await state.create(req.body);

      return res.json(states);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const states = await state.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(states);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      await state.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new stateController();
