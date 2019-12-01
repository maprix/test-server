const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// routes
const printingRoute = require('./routes/printing');
app.use('/printing', printingRoute);

app.get('/', (req, res) => {
    res.send('Hello Express!!!')
});

// database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!');
});

app.listen(3000);
