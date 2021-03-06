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
    }
    type Query {
        getProductos : [Producto!],
        getProducto(data: ID!) : Producto!
    }
    type Mutation {
        createProducto(data: productoInput): Producto!,
        updateProducto(id: String!, data: productoInput): Producto,
        removeProducto(id: ID!): Producto
    }
`;

module.exports = typeDef;