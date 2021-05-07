const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../db-connect-data/sequelize');

const Producto = sequelize.define('Producto', {
	id: {
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
},{
	timestamp: false
});

module.exports = Producto;
