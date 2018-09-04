var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
	exercise_no: {
		type: String,
		required: 'Name cannont bei blank'
	},
	name: {
		type: String,
		required: 'Name cannont bei blank'
	},
	beschreibung: {
		type: String,
		required: 'Name cannont bei blank'
	},
	image_patch: {
		type: String,
		required: 'Name cannont bei blank'
	},
	alter: {
		type: String,
		required: 'Name cannont bei blank'
	},
	ort: {
		type: String,
		required: 'Name cannont bei blank'
	},
	organisationsform: {
		type: String,
		required: 'Name cannont bei blank'
	},
	teil: {
		type: String,
		required: 'Name cannont bei blank'
	},
	gruppengrösse: {
		type: String,
		required: 'Name cannont bei blank'
	},
	schwerpunkt_technik: {
		type: String,
		required: 'Name cannont bei blank'
	},
	schwerpunkt_taktik: {
		type: String,
		required: 'Name cannont bei blank'
	},
	schwerpunkt_fitness: {
		type: String,
		required: 'Name cannont bei blank'
	},
	schwerpunkt_psycho_social: {
		type: String,
		required: 'Name cannont bei blank'
	},
	schwerpunkt_sdg: {
		type: String,
		required: 'Name cannont bei blank'
	},
	input: {
		type: String,
		required: 'Name cannont bei blank'
	},
	output: {
		type: String,
		required: 'Name cannont bei blank'
	},
	file_to_pdf: {
		type: String,
		required: 'Name cannont bei blank'
	}

});

var Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;