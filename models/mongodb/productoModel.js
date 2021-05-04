const mongoose = require('mongoose');
const productoSchema = require('./productoSchema');

const Producto = mongoose.model('producto', productoSchema);

module.exports = Producto;