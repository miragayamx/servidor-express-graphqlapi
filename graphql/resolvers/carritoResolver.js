const productosDAO = require("../../models/DAO/productoDAO");
const carritoDAO = require("../../models/DAO/carritoDAO");
const logger = require("../../winstonConfig");

const productoResolver = {
  Query: {
    getCarrito: async (parent, args, context, info) => {
      try {
        const filter = args || {};
        return await carritoDAO.find(filter);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    getItem: async (parent, args, context, info) => {
      try {
        return await carritoDAO.findById(args.id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
  },
  Mutation: {
    addProducto: async (parent, args, context, info) => {
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
    buy: async (parent, args, context, info) => {
      try {
        await carritoDAO.deleteAll(context.getUser()._id);
      } catch (err) {
        logger.info(err);
        logger.error(err.message);
      }
    },
    removeItem: async (parent, args, context, info) => {
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
