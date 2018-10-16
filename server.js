const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tokenAuth')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json())

app.use('/users', require('./routes/user'))
const port = process.env.port || 3000;

app.listen(port);
console.log(`Server listening at ${port}`)