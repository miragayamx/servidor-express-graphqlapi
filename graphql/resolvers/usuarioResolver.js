const Usuario = require('../../models/usuario');
const logger = require('../../winstonConfig');
const { storeFS } = require('../../utils/fileManager');

const productoResolver = {
	Query: {
		getUsuario: async (parent, args, context, info) => {
			return context.getUser();
		}
	},
	Mutation: {
		login: async (parent, { username, password }, context, info) => {
			try {
				const { user } = await context.authenticate('graphql-local', {
					username,
					password
				});
				await context.login(user);
				return { user };
			} catch (err) {
				throw err;
			}
		},
		singup: async (parent, args, context, info) => {
			try {
				const userExists = await Usuario.findOne({ email: args.data.email });
				if (userExists) throw new Error('El nombre de usuario ya existe');
				// const { filename, mimetype, createReadStream } = await args.file;
				// const stream = createReadStream();
				// const pathObj = await storeFS({ stream, filename });
				// const fileLocation = pathObj.path;
				const fileLocation = 'hola';
				const newUser = new Usuario({
					...args.data,
					avatar: fileLocation
				});
				await newUser.save();
				const { user } = context.authenticate('graphql-local', {
					email: args.data.email,
					password: args.data.password
				});
				await context.login(user);
			} catch (err) {
				throw err;
			}
		}
	}
};

module.exports = productoResolver;
