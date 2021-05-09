const mongoose = require('mongoose');

const mongodb = (mongoUrl) => {
	return mongoose.connect(mongoUrl, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	});
};

module.exports = mongodb;