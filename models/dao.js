const persistOpt = require('../persistOpt');
const mongodbConnect = require('../db-connect-data/mongoDB');
const daoMongoDB = require('./daoMongoDB');
const daoSequelize = require('./daoSequelize');
const daoFileSystem = require('./daoFileSystem');
const sequelizeConnectData = require('../db-connect-data/sequelize');

class Dao {
	constructor(persistOpt) {
		this.persistOpt = persistOpt;
		this.source = null;
	}
	connect() {
		try {
			switch (this.persistOpt) {
				case 1:
					this.source = daoFileSystem;
					break;
				case 2:
					this.source = daoSequelize(sequelizeConnectData.mariadb);
					break;
				case 3:
					this.source = daoSequelize(sequelizeConnectData.sqllite);
					break;
				case 4:
					const mongoLocal = 'mongodb://127.0.0.1:27017/ecommerce';
					mongodbConnect(mongoLocal);
					this.source = daoMongoDB;
					break;
				case 5:
					const mongoAtlas = 'mongodb://127.0.0.1:27017/ecommerce';
					mongodbConnect(mongoAtlas);
					this.source = daoMongoDB;
					break;
				default:
					mongodbConnect();
					this.source = daoMongoDB;
					break;
			}
		} catch (err) {
			console.log(err);
		}
	}
	createDataAccess(name) {
		return this.source[name];
	}
}

const dao = new Dao(persistOpt);
dao.connect();

module.exports = dao;
