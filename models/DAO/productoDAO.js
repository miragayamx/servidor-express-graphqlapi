const Producto = require('../producto');
const productoDTO = require('../DTO/productoDTO');
require("../mongoConnect");

const productosDAO = {
	async find(filter = {}) {
		try {
			return await Producto.find(filter).lean();
		} catch (err) {
			throw err;
		}
	},
	async findById(id) {
		try {
			return await Producto.findById(id).lean();
		} catch (err) {
			throw err;
		}
	},
	async insert(item) {
		try {
			const producto = new Producto(productoDTO(item));
			await producto.save();
		} catch (err) {
			throw err;
		}
	},
	async update(id, data) {
		try {
			return await Producto.findByIdAndUpdate(id, data);
		} catch (err) {
			throw err;
		}
	},
	async delete(id) {
		try {
			return await Producto.findByIdAndDelete(id);
		} catch (err) {
			throw err;
		}
	}
};

module.exports = productosDAO;
