const Usuario = require("../../models/usuario");
const logger = require("../../winstonConfig");
const { storeFS } = require("../../utils/fileManager");

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
        const { filename, mimetype, createReadStream } = await args.file;
        const stream = createReadStream();
        const pathObj = await storeFS({ stream, filename });
        const fileLocation = pathObj.path;
        const newUser = new Usuario({
          ...args,
          avatar: fileLocation,
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
