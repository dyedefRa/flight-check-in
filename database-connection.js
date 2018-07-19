const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connectionString = process.env.DB_URL || 'mongodb://localhost/fligth-check-in';
mongoose.connect('mongodb://localhost/flight-check-in');
