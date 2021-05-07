const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db-connect-data/sequelize');
const Producto = require('./producto');

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

module.exports = Carrito;
