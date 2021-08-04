const productosDAO = require('../../models/DAO/productoDAO');
const logger = require('../../winstonConfig');

const productoResolver = {
	Query: {
		getProductos: async (parent, args, context, info) => {
			try {
				const filter = args || {};
				const productos = await productosDAO.find(filter);
				return await productosDAO.find(filter);
			} catch (err) {
				logger.info(err);
				logger.error(err.message);
			}
		},
		getProducto: async (parent, args, context, info) => {
			try {
				return await productosDAO.findById(args.id);
			} catch (err) {
				logger.info(err);
				logger.error(err.message);
			}
		}
	},
	Mutation: {
		createProducto: async (parent, args, context, info) => {
			try {
				let producto = args.data;
        producto.timestamp = Date.now();
        return await productosDAO.insert(producto);
			} catch (err) {
				logger.info(err);
				logger.error(err.message);
			}
		},
		updateProducto: async (parent, args, context, info) => {
			try {
				const id = args.id;
				const producto = args.data;
				await productosDAO.update(id, producto);
			} catch (err) {
				logger.info(err);
				logger.error(err.message);
			}
		},
		removeProducto: async (parent, args, context, info) => {
			try {
				await productosDAO.delete(args.id);
			} catch (err) {
				logger.info(err);
				logger.error(err.message);
			}
		}
	}
};

module.exports = productoResolver;
