const Carrito = require('../carrito');
const carritoDTO = require('../DTO/carritoDTO');
require("../mongoConnect");

const carritoDAO = {
	async find(filter = {}) {
		try {
			return await Carrito.find(filter).populate('producto').lean();
		} catch (err) {
			throw err;
		}
	},
	async findById(id) {
		try {
			return await Carrito.findById(id).populate('producto').lean();
		} catch (err) {
			throw err;
		}
	},
	async insert(item) {
		try {
			const carrito = new Carrito(carritoDTO(item));
			await carrito.save();
		} catch (err) {
			throw err;
		}
	},
	async update(id, data) {
		try {
			return await Carrito.findByIdAndUpdate(id, data);
		} catch (err) {
			throw err;
		}
	},
	async delete(id) {
		try {
			return await Carrito.findByIdAndDelete(id);
		} catch (err) {
			throw err;
		}
	},
	async deleteAll(id) {
		try {
			return await Carrito.deleteMany({ usuario: id });
		} catch (err) {
			throw err;
		}
	}
};

module.exports = carritoDAO;
