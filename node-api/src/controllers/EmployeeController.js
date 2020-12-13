const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

module.exports = {
  async index(request, response) {
    const employees = await Employee.find();

    return response.json(employees);
  },
 
  async show(request, response){
    const employee = await Employee.findById(request.params.id);

    return response.json(employee);
  },

  async store(request, response){
    const employee = await Employee.create({...request.body});

    return response.json(employee);
  },

  async update(request, response){
    const employee = await Employee.findByIdAndUpdate(request.params.id, request.body, { new: true });

    return response.json(employee)
  },

  async destroy(request, response) {
    await Employee.findByIdAndRemove(request.params.id);

    return response.send()
  },
}
