const Usuario = require("../../models/usuario");
const logger = require("../../winstonConfig");

const productoResolver = {
  Query: {
    getUser: async (args, context) => {
      return context.getUser();
    },
  },
  Mutation: {
    login: async (parent, { username, password }, context) => {
      try {
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return { user };
      } catch (err) {
        throw err;
      }
    },
    singup: async (args, context) => {
      try {
        const userExists = await Usuario.findOne({ email: args.email });
        if (userExists) throw new Error("El nombre de usuario ya existe");
        const newUser = new Usuario({
          ...args,
          avatar: "/uploads/" + req.file.filename,
        });
        await newUser.save();
        await context.login(newUser);
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = productoResolver;
