const typeDef = `
    type Usuario {
        _id: ID!,
        nombre: String!,
        email: String!,
        edad: Int!,
        telefono: String!,
        direccion: String!,
        avatar: String!,
        password: String!,
        passwordConfirm: String!
    }
    input usuarioInput {
        nombre: String!,
        email: String!,
        edad: Int!,
        telefono: String!,
        direccion: String!,
        avatar: String!,
        password: String!,
        passwordConfirm: String!
    }
    type Query {
        getUsuario() : Usuario!,
    }
    type Mutation {
        singup(data: usuarioInput): Usuario,
        login( email: String!, password: String!): Usuario
    }
`;

module.exports = typeDef;