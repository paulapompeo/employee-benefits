const express = require('express');
const routes = express.Router();

const CompanyController = require("./controllers/CompanyController");
const EmployeeController = require("./controllers/EmployeeController");

routes.get('/companies', CompanyController.index);
routes.get('/companies/:id', CompanyController.show);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.destroy);

routes.get('/employees', EmployeeController.index);
routes.get('/employees/:id', EmployeeController.show);
routes.post('/employees', EmployeeController.store);
routes.put('/employees/:id', EmployeeController.update);
routes.delete('/employees/:id', EmployeeController.destroy);

module.exports = routes;


// const mongoose = require('mongoose');
// const Company = mongoose.model('Company');

// routes.get('/companies', (request, response) => {
//   Company.create({
//       name: "Teste do Array",
//       trade: "Como um Flash",
//       cnpj: 123456,
//       address: "Rua das Flores",
//       benefits: [1, 2, 3, 4, 5, 6]
//       });

//   return response.send("foi")
// });

// module.exports = routes;


      // Company.create({
    //   name: "Flash 2",
    //   trade: "Como um Flash",
    //   cnpj: 123456,
    //   address: "Rua das Flores",
    //   benefits: [1, 2, 3, 4]
    //   });
  
    // Employee.create({
    //   company: "5fd432a02e413a0eaf385f7f",
    //   name: "Livia",
    //   lastName: "Pompeo",
    //   cpf: 1234567,
    //   email: "paulapompo@gmail.com"
    //   });