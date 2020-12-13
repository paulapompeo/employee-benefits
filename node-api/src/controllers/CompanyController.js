const mongoose = require('mongoose');

const Company = mongoose.model('Company');
const Employee = mongoose.model('Employee');

module.exports = {
  async index(request, response) {
    try {
      const companies = await Company.find();

      return response.json(companies);

    } catch (err) {
      return response.status(400).send({ error: 'Error loading Companies'})
    }
  },
  
  async show(request, response){
    try {
      const company = await Company.findById(request.params.id);

      return response.json(company);

    } catch (err) {
      return response.status(400).send({ error: 'Error loading Company'})
    }
  },

  async store(request, response){
    try {
      const company = await Company.create(request.body);

      return response.json(company);

    } catch (err) {
      return response.status(400).send({ error: 'Error creating new Company'})
    }
  },

  async update(request, response){
    try {
      const company = await Company.findByIdAndUpdate(request.params.id, request.body, { new: true });

      return response.json(company)

    } catch (err) {
      return response.status(400).send({ error: 'Error updating Company'})
    }
  },

  async destroy(request, response) {
    try {
      await Company.findByIdAndRemove(request.params.id);

      return response.send()
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting Company'})
    }
  },
}
