const mongoose = require('mongoose');

const Company = mongoose.model('Company');
const Employee = mongoose.model('Employee');

module.exports = {
  async index(request, response) {
    try {
      const companies = await Company.find().populate('employees');

      return response.json(companies);

    } catch (err) {
      return response.status(400).send({ error: 'Error loading Companies'})
    }
  },
  
  async show(request, response){
    try {
      const company = await Company.findById(request.params.id).populate('employees');

      return response.json(company);

    } catch (err) {
      return response.status(400).send({ error: 'Error loading Company'})
    }
  },

  async store(request, response){
    try {
      const { name, trade, cnpj, address, benefits, employees } = request.body;

      const company = await Company.create({ name, trade, cnpj, address, benefits });

      await Promise.all(employees.map(async employee => {
        const companyEmployee = new Employee({...employee, company: company._id });

        await companyEmployee.save();

        company.employees.push(companyEmployee);
      }));

      await company.save();

      return response.json(company);

    } catch (err) {
      console.log(err)
      return response.status(400).send({ error: 'Error creating Company'})
    } 
  },

  async update(request, response){
    try {
      const { name, trade, cnpj, address, benefits, employees } = request.body;

      const company = await Company.findByIdAndUpdate(request.params.id, {
        name,
        trade,
        cnpj,
        address,
        benefits
      }, { new: true });

      company.employees = [];
      await Employee.remove({ company: company._id });

      await Promise.all(employees.map(async employee => {
        const companyEmployee = new Employee({...employee, company: company._id });

        await companyEmployee.save();

        company.employees.push(companyEmployee);
      }));

      await company.save();

      return response.json(company);

    } catch (err) {
      console.log(err)
      return response.status(400).send({ error: 'Error updating new Company'})
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

  async addEmployee(request, response) {
    try {
      const employee = request.body;
      const company = await Company.findById(request.params.id).populate('employees')

      const companyEmployee = new Employee({...employee, company: company._id });

      await companyEmployee.save();

      company.employees.push(companyEmployee);

      await company.save();

      return response.json(company);
      
 
    } catch (err) {
      console.log(err)
      return response.status(400).send({ error: 'Error creating Employee'})
    }
  },

  async showEmployees(request, response) {
    try {
      const company = await Company.findById(request.params.id).populate('employees')

      const employees = await Employee.find().where('company').equals(company._id);

      console.log(employees)

      return response.json(employees);

    } catch (err) {
      console.log(err)
      return response.status(400).send({ error: 'Error loading Employees'})
    }
  }
}
