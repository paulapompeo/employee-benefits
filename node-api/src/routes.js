const express = require('express');
const routes = express.Router();

const CompanyController = require("./controllers/CompanyController");
const EmployeeController = require("./controllers/EmployeeController");

routes.get('/companies', CompanyController.index);

routes.get('/companies/:id', CompanyController.show);
routes.post('/companies', CompanyController.store);
routes.post('/companies/:id/employees', CompanyController.addEmployee);
routes.get('/companies/:id/employees', CompanyController.showEmployees);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.destroy);

routes.get('/employees', EmployeeController.index);
routes.get('/employees/:id', EmployeeController.show);
// routes.post('/employees', EmployeeController.store);
// routes.post('/companies/:id/employees', EmployeeController.store);
routes.put('/employees/:id', EmployeeController.update);
routes.delete('/employees/:id', EmployeeController.destroy);

module.exports = routes;
