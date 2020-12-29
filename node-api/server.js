const connectDB = require('./src/config/connection')

const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());


//para uso local: 
// mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
// requireDir('./src/models');


//conecta com mongoDB Atlas
connectDB();
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3333, () => {
    console.log('🚀 Servidor rodando na porta 3333')
});
