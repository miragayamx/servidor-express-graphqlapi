const typeDef = `
    type Carrito {
        _id: ID!,
        usuario: String!,
        producto: String!,
        timestamp: Int!
    }
    input carritoInput {
        usuario: String!,
        producto: String!,
        timestamp: Int!
    }
    type Query {
        getCarrito() : [Producto!]!,
        getItem(data: ID!) : Producto!
    }
    type Mutation {
        addProducto(data: carritoInput): Carrito,
        removeProducto(data: ID!): Carrito,
        buy(data: usuario!): [Carrito!]
    }
`;

module.exports = typeDef;