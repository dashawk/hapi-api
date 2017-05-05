'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Types = Schema.Types;

// Create User Schema
const UserSchema = new Schema({
	firstName: { type: Types.String, required: true },
	lastName: { type: Types.String, required: true }
});

// Register the model
const User = Mongoose.model('user', UserSchema);

module.exports = User;