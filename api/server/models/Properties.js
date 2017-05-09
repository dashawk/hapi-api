'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Types = Schema.Types;

// Create User Schema
const PropertySchema = new Schema({
	propertyName: { type: Types.String, required: true },
	description: { type: Types.String, required: true },
	images: { type: Types.Array, required: true }
});

// Register the model
const Property = Mongoose.model('Property', PropertySchema, 'Properties');

module.exports = Property;