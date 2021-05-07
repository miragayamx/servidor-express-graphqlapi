const { Op } = require("sequelize");
const Producto = require('./sequelize/producto');
const Carrito = require('./sequelize/carrito');

const productos = {
	async find(filter = {}) {
		return await Producto.findAll({
			where: filter
		});
	},
	async findById(itemId) {
		return await Producto.findAll({
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async insert(item) {
		return await Producto.create(item);
	},
	async update(itemId, data) {
		return await Producto.update(data, {
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async delete(itemId) {
		return await Producto.destroy({
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	}
};

const carrito = {
	async find(filter = {}) {
		return await Carrito.findAll({
			where: filter
		});
	},
	async findById(id) {
		return await Carrito.findAll({
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async insert(item) {
		return await Carrito.create(item);
	},
	async update(itemId, data) {
		return await Carrito.update(data, {
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async delete(id) {
		return await Carrito.destroy({
			where: {
				id: {
					[Op.eq]: itemId
				}
			}
		});
	}
};

module.exports = { productos, carrito };
