const productosDAO = require('../models/DAO/productoDAO');
const carritoDAO = require('../models/DAO/carritoDAO');
const sendEmail = require('../services/nodemailer');
const { sendWhatsapp, sendSMS } = require('../services/twilio');

const getList = async (req, res) => {
	let response;
	const id = req.query.id;
	if (!!id) {
		response = await carritoDAO.findById(id);
	} else {
		response = await carritoDAO.find();
	}
	res.status(200).json(response);
};

const addItem = async (req, res) => {
	try {
		const producto = await productosDAO.findById(req.params.id_producto);
		const item = {
			timestamp: Date.now(),
			producto: producto._id,
			usuario: req.user._id
		};
		await carritoDAO.insert(item);
		res.status(201).json({ notificacion: 'Producto agregado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const buy = async (req, res) => {
	try {
		const pedido = await carritoDAO.find();
		const html = pedido.map((el) => {
			return `
				<p>Producto:${el.producto.nombre} / codigo: ${el.producto.codigo} / precio: ${el.producto.precio}</p>
			`;
		});
		sendEmail({
			form: 'Servidor Node',
			to: process.env.ADMIN_EMAIL,
			subject: `Nuevo pedido de ${req.user.nombre} email: ${req.user.email}`,
			html: `<p>${html.join('')}</p>`
		});
		sendWhatsapp({
			message: `Nuevo pedido de ${req.user.nombre} email: ${req.user.email}`,
			phone: process.env.ADMIN_WHATSAPP
		});
		sendSMS({
			message: `Su pedido se encuentra en proceso!`,
			phone: req.user.telefono
		});
		await carritoDAO.deleteAll(req.user._id);
		res.status(201).json({ notificacion: 'Pedido realizado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteItem = async (req, res) => {
	try {
		await carritoDAO.delete(req.params.id);
		res.status(200).json({ notificacion: 'Producto eliminado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getList,
	addItem,
	buy,
	deleteItem
};
