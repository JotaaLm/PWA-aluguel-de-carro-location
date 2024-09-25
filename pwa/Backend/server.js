const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rentalRoutes = require('./routes/rentalRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', rentalRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Servidor rodando na porta 5000')))
  .catch(err => console.error(err));
