const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const productoDefs = require("./type-defs/productoDefs");
const carritoDefs = require("./type-defs/carritoDefs");
const usuarioDefs = require("./type-defs/usuarioDefs");
const productoResolver = require("./resolvers/productoResolver");
const carritoResolver = require("./resolvers/carritoResolver");
const usuarioResolver = require("./resolvers/usuarioResolver");

const typeDefs = mergeTypeDefs([productoDefs, carritoDefs, usuarioDefs]);

const resolvers = mergeResolvers([
  productoResolver,
  carritoResolver,
  usuarioResolver,
]);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
