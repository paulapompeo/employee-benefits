const mongoose = require('mongoose');

const Company = mongoose.model('Company');

module.exports = {
  async index(request, response) {
    const companies = await Company.find();

    return response.json(companies);
  },
  
  async store(request, response){
    const company = await Company.create(request.body);

    return response.json(company);
  },

  async show(request, response){
    const company = await Company.findById(request.params.id);

    return response.json(company);
  }
}
