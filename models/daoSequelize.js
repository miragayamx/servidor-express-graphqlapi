const { Op } = require('sequelize');
const Producto = require('./sequelize/producto');
const Carrito = require('./sequelize/carrito');

const productos = {
	async find(filter = {}) {
		return await Producto.findAll({
			where: filter
		});
	},
	async findById(itemId) {
		console.log(itemId);
		const item = await Producto.findAll({
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
		console.log(item);
		return item[0].dataValues;
	},
	async insert(item) {
		return await Producto.create(item);
	},
	async update(itemId, data) {
		return await Producto.update(data, {
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async delete(itemId) {
		return await Producto.destroy({
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
	}
};

const carrito = {
	async find(filter = {}) {
		const carrito = await Carrito.findAll({
			where: filter
		});
		const carritoPopulated = await Promise.all(
			carrito.map(async (el) => {
				const producto = await Producto.findAll({
					where: {
						_id: {
							[Op.eq]: el.dataValues.producto
						}
					}
				});
				el.dataValues.producto = producto[0].dataValues;
				return el.dataValues;
			})
		);
		return carritoPopulated;
	},
	async findById(itemId) {
		const item = await Carrito.findAll({
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
		return item[0].dataValues;
	},
	async insert(item) {
		return await Carrito.create(item);
	},
	async update(itemId, data) {
		return await Carrito.update(data, {
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
	},
	async delete(itemId) {
		return await Carrito.destroy({
			where: {
				_id: {
					[Op.eq]: itemId
				}
			}
		});
	}
};

module.exports = { productos, carrito };
