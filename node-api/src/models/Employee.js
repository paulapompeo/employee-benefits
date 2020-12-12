const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  company: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company'}],
  name: {
    type: String, 
    required: true,
  },
  lastName: {
    type: String, 
    required: true,
  },
  cpf: {
    type: Number, 
    required: true,
  },
  email: {
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  },
});

//registrando model na aplicacao
mongoose.model('Employee', EmployeeSchema);