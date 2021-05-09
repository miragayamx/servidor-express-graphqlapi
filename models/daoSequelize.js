const { Sequelize, DataTypes, Op } = require('sequelize');

const daoSequelize = (connectData) => {
	const sequelize = new Sequelize(connectData);

	const Producto = sequelize.define(
		'Producto',
		{
			_id: {
				type: DataTypes.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true
			},
			timestamp: {
				type: DataTypes.DATE,
				allowNull: false
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false
			},
			descripcion: {
				type: DataTypes.STRING,
				allowNull: false
			},
			codigo: {
				type: DataTypes.STRING,
				allowNull: false
			},
			foto: {
				type: DataTypes.STRING,
				allowNull: false
			},
			precio: {
				type: DataTypes.DECIMAL,
				allowNull: false
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{
			timestamp: false
		}
	);

	const Carrito = sequelize.define('Carrito', {
		_id: {
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true
		},
		timestamp: {
			type: DataTypes.DATE,
			allowNull: false
		},
		producto: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: Producto,
				key: '_id'
			}
		}
	});

	const productos = {
		async find(filter = {}) {
			return await Producto.findAll({
				where: filter
			});
		},
		async findById(itemId) {
			const item = await Producto.findAll({
				where: {
					_id: {
						[Op.eq]: itemId
					}
				}
			});
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
	return { productos, carrito };
};

module.exports = daoSequelize;