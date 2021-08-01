const productosDAO = require('../models/DAO/productoDAO');

const getList = async (req, res) => {
	let response;
	const id = req.query.id;
	if (!!id) {
		response = await productosDAO.findById(id);
	} else {
		response = await productosDAO.find();
	}
	res.status(200).json(response);
};

const addItem = async (req, res) => {
	try {
		const producto = req.body;
		producto.timestamp = Date.now();
		await productosDAO.insert(producto);
		res.status(201).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const updateItem = async (req, res) => {
	try {
		const id = req.params.id;
		const producto = req.body;
		await productosDAO.update(id, producto);
		res.status(200).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteItem = async (req, res) => {
	try {
		await productosDAO.delete(req.params.id);
		res.status(200).json({ notification: 'Operación realizada con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getList,
	addItem,
	updateItem,
	deleteItem
};
