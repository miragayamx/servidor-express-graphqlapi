const mongoose = require('mongoose');
const productoSchema = require('./productoSchema');

const carritoSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    producto: {
        type: productoSchema,
        required: true
    },    
});

const Carrito = mongoose.model('carrito', carritoSchema);

module.exports = Carrito;