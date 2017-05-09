'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Types = Schema.Types;

// Create User Schema
const UserSchema = new Schema({
	firstName: { type: Types.String, required: true },
	lastName: { type: Types.String, required: true },
	email: { type: Types.String, required: true, unique: true },
	password: { type:Types.String, required: true },
	mobileNumber: { type: Types.String, required: false },
	licenseNumber: { type: Types.String, required: false },
	userType: { type: Types.String, required: true }
});

// Register the model
const User = Mongoose.model('User', UserSchema, 'Users');

module.exports = User;