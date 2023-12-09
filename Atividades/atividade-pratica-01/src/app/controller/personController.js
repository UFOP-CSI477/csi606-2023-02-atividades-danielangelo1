const Person = require("../model/person");

class PersonController {
  async index(req, res) {
    const persons = await Person.find();

    return res.json(persons);
  }

  async show(req, res) {
    const person = await Person.findById(req.params.id);

    return res.json(person);
  }

  async showByName(req, res) {
    const person = await Person.find({ name: req.params.name });

    return res.json(person);
  }

  async store(req, res) {
    const person = await Person.create(req.body);

    return res.json(person);
  }

  async update(req, res) {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(person);
  }

  async destroy(req, res) {
    await Person.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new PersonController();
