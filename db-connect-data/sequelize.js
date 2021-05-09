const sequelizeConnectData = {
	sqllite: {
		dialect: 'sqlite',
		storage: './data/BD.sqlite'
	},
	mariadb: {
		host: 'localhost',
		dialect: 'mariadb'
	}
};

module.exports = sequelizeConnectData;
