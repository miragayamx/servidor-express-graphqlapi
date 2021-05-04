const Producto = require('./mongodb/productoModel');
const Carrito = require('./mongodb/carrito');

const producto = {
	async find(opt = {}) {
		return await Producto.find(opt);
	},
	async findById(id) {
		return await Producto.findById(id);
	},
	async insert(id, item) {
		return await Producto.findByIdAndUpdate(id, item);
	},
	async delete(id) {
		return await Producto.findByIdAndDelete(id);
	}
};

const carrito = {
	async find(opt = {}) {
		return await Carrito.find(opt);
	},
	async findById(id) {
		return await Carrito.findById(id);
	},
	async insert(id, item) {
		return await Carrito.findByIdAndUpdate(id, item);
	},
	async delete(id) {
		return await Carrito.findByIdAndDelete(id);
	}
};

module.exports = { producto, carrito };
