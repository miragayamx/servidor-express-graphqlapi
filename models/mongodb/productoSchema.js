const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
	nombre: {
		type: String,
		required: true,
		trim: true
	},
    descripcion: {
		type: String,
		required: true,
		trim: true
	},
    codigo: {
		type: String,
		required: true,
		trim: true
	},
    foto: {
		type: String,
        required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true
	},
    stock: {
		type: Number,
		required: true
	},
});

module.exports = productoSchema;