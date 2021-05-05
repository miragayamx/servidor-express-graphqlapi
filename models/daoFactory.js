class DaoFactory {
	constructor(source) {
		return async () => {
			try {
				switch (source) {
					case 1:
						this.db = await import('./daoMongodb');
						return this;
					default:
						this.db = await import('./daoMongodb');
						return this;
				}
			} catch (err) {}
		};
	}
	createSource(source) {
		return new this.db[source];
	}
}

const dao = new DaoFactory(persistOpt);

module.exports = dao;