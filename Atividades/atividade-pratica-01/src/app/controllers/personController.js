const Person = require("../models/person");

class PersonController {
  async index(req, res) {
    try {
      const persons = await Person.find();

      return res.json(persons);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const person = await Person.findById(req.params.id);

      return res.json(person);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByName(req, res) {
    try {
      const person = await Person.find({ name: req.params.name });

      return res.json(person);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const person = await Person.create(req.body);

      return res.json(person);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(person);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      await Person.findByIdAndDelete(req.params.id);

      return res.send();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PersonController();
