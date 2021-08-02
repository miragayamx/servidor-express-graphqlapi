const productosDAO = require('../../models/DAO/productoDAO');
const logger = require("../../winstonConfig");

const productoResolver = {
  Query: {
    getProductos: async (args) => {
      try {
        const filter = args || {};
        return await productosDAO.find(filter);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    getProducto: async (args) => {
        try {
          return await productosDAO.findById(args.id);
        } catch (err) {
          logger.info(err);
          logger.error(err.message);
        }
      },
  },
  Mutation: {
    addProducto: async (args) => {
      try {
        const producto = args;
        producto.timestamp = Date.now();
        await productosDAO.insert(producto);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    updateProducto: async (args) => {
      try {
        const id = args.id;
        const producto = args.data;
        await productosDAO.update(id, producto);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    removeProducto: async (args) => {
      try {
        await productosDAO.delete(args.id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
  },
};

module.exports = productoResolver;
