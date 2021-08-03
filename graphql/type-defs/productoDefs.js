const typeDef = `
    type Producto {
        _id: ID!,
        nombre: String!,
        descripcion: String!,
        codigo: String!,
        foto: String!,
        precio: Float!,
        stock: Int!,
        timestamp: Int!
    }
    input productoInput {
        nombre: String!,
        descripcion: String!,
        codigo: String!,
        foto: String!,
        precio: Float!,
        stock: Int!,
        timestamp: Int!
    }
    type Query {
        getProductos() : [Producto!]!,
        getProducto(data: ID!) : Producto!
    }
    type Mutation {
        addProducto(data: productoInput): Producto!,
        updateProducto(data: productoInput): Producto,
        removeProducto(data: ID!): Producto
    }
`;

module.exports = typeDef;