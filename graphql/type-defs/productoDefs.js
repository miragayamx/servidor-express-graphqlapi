const typeDef = `
    type Producto {
        id: String!,
        title: String!,
        price: float!,
        thumbnail: String!
    }
    input AddProductoInput {
        title: String!,
        price: float!,
        thumbnail: String!
    }
    type Mutation {
        addProducto(data: AddProductoInput) : Producto!
    }
`;

module.exports = typeDef;