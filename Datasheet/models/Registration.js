
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const RegistrationSchema = new Schema({
    	courseid: Number,
	regno: String,
	gradeid: Number,
});

module.exports = model('Registration', RegistrationSchema);

