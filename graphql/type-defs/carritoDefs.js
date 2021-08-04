const typeDef = `
    type Carrito {
        _id: ID!,
        usuario: String!,
        producto: Producto!,
        timestamp: Int!
    }
    input carritoInput {
        usuario: String!,
        producto: String!,
    }
    type Query {
        getCarrito : [Producto!]!,
        getItem(data: ID!) : Producto!
    }
    type Mutation {
        addProducto(data: carritoInput): Carrito,
        removeItem(data: ID!): Carrito,
        buy(data: String!): [Carrito!]
    }
`;

module.exports = typeDef;