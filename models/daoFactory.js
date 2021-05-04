class DaoFactory {
	constructor(source) {
		return async () => {
			try {
				switch (source) {
					case 1:
						this.source = await import('../models/daoMongoDB');
						return this;
					default:
						this.source = await import('../models/daoMongoDB');
						return this;
				}
			} catch (err) {}
		};
	}
	async find(destino, opt) {
		return await this.source[destino].find(opt);
	}
	findById(destino, id) {
		console.log('findById');
	}
	insert(destino, opt) {
		console.log('insert');
	}
	delete(destino, id) {
		console.log('delete');
	}
}

module.exports = DaoFactory;
