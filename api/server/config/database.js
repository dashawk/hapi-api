'use strict';

const Mongoose = require('mongoose');
const config = require('./config');

// Database connection
Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db, {
	useNewUrlParser: true,		// Eliminate "URL string parser" deprecation error
	useUnifiedTopology: true	// Eliminate "Server Discovery And Monitoring engine is deprecated" deprecation error
});

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Connection with mongo succeeded!');
});

module.exports = { Mongoose, db };