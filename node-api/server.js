const { request } = require('express');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3333, () => {
    console.log('🚀 Servidor rodando na porta 3333')
});