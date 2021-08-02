const productosDAO = require("../../models/DAO/productoDAO");
const carritoDAO = require("../../models/DAO/carritoDAO");
const logger = require("../../winstonConfig");

const productoResolver = {
  Query: {
    getCarrito: async (args) => {
      try {
        const filter = args || {};
        return await carritoDAO.find(filter);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    getCarritoByID: async (args) => {
      try {
        return await carritoDAO.findById(args.id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
  },
  Mutation: {
    addProducto: async (args, context) => {
      try {
        const producto = await productosDAO.findById(args.id_producto);
        const item = {
          timestamp: Date.now(),
          producto: producto._id,
          usuario: context.getUser()._id,
        };
        await carritoDAO.insert(item);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    buy: async (args, context) => {
      try {
        await carritoDAO.deleteAll(context.getUser()._id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    removeProducto: async (args) => {
      try {
        await carritoDAO.delete(args.id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
  },
};

module.exports = productoResolver;
