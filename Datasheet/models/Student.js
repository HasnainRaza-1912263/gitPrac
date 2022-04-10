
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const studentSchema = new Schema({
    	regno: String,
	studentname: String,
	fathername: String,
});

module.exports = model('Student', studentSchema);

