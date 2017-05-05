'use strict';

const Mongoose = require('mongoose');
const config = require('./config');

// Database connection
Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Connection with mongo succeeded!');
});

module.exports = { Mongoose, db };