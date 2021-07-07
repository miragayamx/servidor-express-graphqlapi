const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const handlebars = require('express-handlebars');
const logger = require('./winstonConfig');
const productoRouter = require('./routes/productoRouter');
const carritoRouter = require('./routes/carritoRouter');
const loginRouter = require('./routes/loginRouter');
const viewRouter = require('./routes/viewRouter');
const { createUploadsFolder } = require('./utils/fileManager');
require('dotenv').config();
require('./db-connect-data/mongoDB');
require('./passport/passport');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
	session({
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URL,
			mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
		}),
		secret: 'secreto',
		resave: true,
		saveUninitialized: true
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.engine(
	'hbs',
	handlebars({
		extname: 'hbs',
		defaultLayout: 'index',
		layoutsDir: path.join(__dirname, '/views/layouts'),
		partialsDir: path.join(__dirname, '/views/partials')
	})
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', viewRouter);
app.use('/', loginRouter);
app.use('/productos', productoRouter);
app.use('/carrito', carritoRouter);

app.all('*', (req, res) => {
	res.status(404).json({
		error: -2,
		descripcion: `ruta ${req.url} método ${req.method} no implementada`
	});
});

const server = app.listen(PORT, async () => {
	logger.info(`El servidor esta corriendo en el puerto: ${server.address().port}`);
	await createUploadsFolder();
});

server.on('error', (err) => {
	logger.info(`Error de servidor: ${err}`);
	logger.error(`Error de servidor: ${err}`);
});
