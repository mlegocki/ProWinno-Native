const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;
const mongoose = require('mongoose');
// initialize http server
const app = express();

mongoose.connect('mongodb://localhost/ProWinno')
.then(() => {
  console.log('Successfully connected to MongoDB')
}).catch(err => {
  console.log('Could not connect to MongoDB');
  process.exit()
})

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', require('/api'));
app.use('/api', require('./api'));


const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app