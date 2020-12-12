const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  trade: {
    type: String, 
    required: true,
  },
  cnpj: {
    type: Number, 
    required: true,
  },
  address: {
    type: String, 
    required: true,
  },
  benefits: {
    type: [[]], 
    required: true,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  },
});

//registrando model na aplicacao
mongoose.model('Company', CompanySchema);