const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const Company = mongoose.model('Company');
const Employee = mongoose.model('Employee');

app.get('/', (request, response) => {
  Company.create({
    name: "Flash",
    trade: "Como um Flash",
    cnpj: 123456,
    address: "Rua das Flores",
    benefits: [1, 2, 3, 4]
    });

  Employee.create({
    company: "5fd432a02e413a0eaf385f7f",
    name: "Paula",
    lastName: "Pompeo",
    cpf: 1234567,
    email: "paulapompo@gmail.com"
    });


    return response.send('Paulino Teste Real')
});

app.listen(3333, () => {
    console.log('🚀 Servidor rodando na porta 3333')
});